import PieceModel from '../models/PieceModel';
import {
  Direction,
  GridRange,
  letters,
  ZoneID,
  Zones,
} from '../types/GridTypes';
import {
  MoveMatrix,
  MoveMatrixCell,
  PieceColor,
  PieceModelType,
  Position,
  Rule,
  RuleRange,
  RuleType,
} from '../types/PieceTypes';
import getStepValue, { StepValue } from '../utils/GetStepValue';

export default class PieceController {
  private model: PieceModel;

  constructor(model: PieceModel) {
    console.info('PieceController');
    this.model = model;
  }

  /**
   * Starts with the moves for a particular piece and runs them against
   * the actual grid from it's starting point.
   *
   * @param moves MoveMatrix
   * @param color PieceColor
   * @param start Position
   * @returns Zones
   */
  processRawMoves(
    moves: MoveMatrix,
    color: PieceColor,
    start: Position
  ): Zones {
    //  Go through all directions of moves for a piece by iterating
    //  over the moves listed in a RawMoveMatrix(up, down, etc)
    const allDirections = Object.keys(moves).map((direction) => {
      const direct = direction as Direction;
      //  Get moves per individual direction
      return this.processMoveDirection(direct, moves[direct], color, start);
    });
    return allDirections.flat();
  }

  /**
   * Returns the possible moves per one direction from a MoveMatrixCell
   *
   * 1. Establish each possible move range from the MoveMatrixCell including rules
   * 2. Iterate over each direction possibility against the number of range
   * 3. Return all possible legal moves for this piece
   *
   * Legal Moves:
   * - If the move is to an empty zone, keep it *
   * - If the move is to a zone with an opponent's piece, keep it but block further moves.
   * - If the move is blocked by a piece and this piece is not a knight, toss it and remaining range
   * - If the move is to a zone that is off the board, toss it *
   * - If the move is to zone with same color piece, toss it *
   *
   * @param direction Direction
   * @param moves MoveMatrixCell
   * @param color PieceColor
   * @param start Position
   * @returns Zones
   */
  private processMoveDirection(
    direction: Direction,
    moves: MoveMatrixCell,
    color: PieceColor,
    start: Position
  ): Zones {
    //  1.
    //  Grab Rule from Piece Move data
    const rule: Rule = moves[1];
    //  Establish which piece is in the position
    const startingPiece: PieceModelType = this.model.getPieceByPosition(start);
    //  Find out what the difference is in moves depending on rules
    let ruleRange: RuleRange = this.processRule(rule, startingPiece.zone);
    //  Full range if no rules adding range or the new range set by rules
    let fullRange: GridRange = ruleRange ? ruleRange : moves[0];
    //  Position where loop iteration starts below
    let nextPosition: Position = { x: start.x, y: (start.y + 1) as GridRange };
    //  Determines the matrix of movement depending on direction
    let stepValue: StepValue = getStepValue(direction);
    //  TODO combine these?
    //  Final collection of possible moves
    let newMoves: Zones = [];
    //  Attack moves
    let attackMoves: Zones = [];

    //  2.
    let opponentRangeCount = 0
    for (let i = 0; i < fullRange; i++) {
      if (color === 'white') {
        nextPosition.x += stepValue.x;
        nextPosition.y += stepValue.y;
      } else {
        nextPosition.x -= stepValue.x;
        nextPosition.y -= stepValue.y;
      }
      //  ID a zone to move to
      const zoneID = (letters[nextPosition.x] + nextPosition.y) as ZoneID;

      //  No moves off board
      if (nextPosition.y < 1 && nextPosition.y < 8) {
        break;
      }

      //  Must be a legal ZoneID
      if (!(<ZoneID>zoneID)) {
        break;
      }

      //  No moving to team's zones
      if (this.model.isMovetoSameTeam(color, zoneID) === true) {
        break;
      }

      //  Moves that overlap with an opponent should be an attack
      if (this.model.isMovetoSameTeam(color, zoneID) === false) {
        opponentRangeCount++;
        attackMoves.push(zoneID);
        //break;
      }

      if(opponentRangeCount > 1) break;

      //  Ok it is legal
      newMoves.push(zoneID);
    }
    //  3.
    return newMoves;
  }

  /**
   * Returns new range data depending on the rule passed in.
   *
   * @param rule Rule
   * @returns RuleRange
   */
  private processRule(rule: Rule, zoneID?: ZoneID): RuleRange {
    let ruleRange: RuleRange = 0;
    if (rule) {
      switch (rule.type) {
        case RuleType.ATTACK:
          //  Only pawns have an attack that is different
          break;
        case RuleType.CASTLE:
          //  Check if each piece involved in the castle have moved yet
          break;
        case RuleType.FIRST:
          //  If pawn hasn't moved yet, range is 2
          //  After first move, range is back to 1
          if (zoneID && this.model.getPiece(zoneID)) {
            if (!this.model.getPiece(zoneID).history.length) {
              ruleRange = rule.range;
            }
          }
        case RuleType.SECOND:
          //  Knight has a second move along a different axis
          break;
      }
    }
    return ruleRange;
  }
}

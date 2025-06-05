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
  Position,
  Rule,
  RuleRange,
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
    let fullRange: GridRange = moves[0];
    let ruleRange: RuleRange = this.processRule(moves[1]);
    fullRange = ruleRange ? ruleRange : fullRange;

    //  2.
    let nextPosition: Position = { x: start.x, y: (start.y + 1) as GridRange };
    let stepValue: StepValue = getStepValue(direction);
    let newMoves: Zones = [];

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

      //  No moving to team's zones
      if (this.isMovetoSameTeam(color, zoneID)) {
        break;
      }

      //  No moves off board
      if (nextPosition.y < 1 && nextPosition.y < 8) {
        break;
      }

      //  Must be a legal ZoneID
      if (!(<ZoneID>zoneID)) {
        break;
      }

      //  Ok it is legal
      newMoves.push(zoneID);
    }
    //  3.
    return newMoves;
  }

  /**
   * Returns whether or not the move is to a zone that is currently
   * under a piece of the same color.
   *
   * @param color PieceColor
   * @param zoneID ZoneID
   * @returns Boolean
   */
  private isMovetoSameTeam(color: PieceColor, zoneID: ZoneID): Boolean {
    let sameTeam = false;

    if (this.model.getPiece(zoneID)) {
      sameTeam = color === this.model.getPiece(zoneID)?.color;
    }

    return sameTeam;
  }

  /**
   * Returns new range data depending on the rule passed in.
   *
   * @param rule Rule | undefined
   * @returns RuleRange
   */
  private processRule(rule: Rule | undefined): RuleRange {
    let ruleRange: RuleRange = 0;
    if (rule) {
      switch (rule.type) {
        case 'attack':
          //  Only pawns have an attack that is different
          break;
        case 'castle':
          //  Check if each piece involved in the castle have moved yet
          break;
        case 'first':
          //  If pawn hasn't moved yet, add more range
          //  TODO How do we know what the ZoneID or ID of the piece is here?
          ruleRange = rule.range;
        case 'second':
          //  Knight has a second move along a different axis
          break;
      }
    }
    return ruleRange;
  }
}

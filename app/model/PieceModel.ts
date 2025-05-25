import { PieceColor, PieceType } from '../components/PieceView';
import getStepValue, { StepValue } from '../utils/GetStepValue';
import { Direction, GridCell, letters, Ranges, ZoneID } from './GridModel';

export default class PieceModel {
  //  Track individual pieces movements
  private pieces: PieceModelType[] = [];
  //  Reference to the main grid
  private grid: GridCell[];

  constructor(grid: GridCell[]) {
    console.info('PieceModel');
    this.grid = grid;
    this.pieces = grid
      .filter((zone) => zone.piece.type)
      .map((zone, index) => {
        return {
          id: index,
          zone: zone.zone,
          type: zone.piece.type,
          color: zone.piece.color,
          x: zone.x,
          y: zone.y,
          history: [],
        } as PieceModelType;
      });
  }

  /**
   * Returns an array of possible moves for a piece.
   *
   * 1. Establish the x,y of the landingZone cell of the selected piece.
   * 2. Gets that piece's possible moves.
   * 3. Remove moves that aren't legal.
   * 3. Return remaining moves.
   *
   * @param type PieceType
   * @param zone string
   * @returns ZoneID[]
   */
  getMoves(type: PieceType, color: PieceColor, zone: string): ZoneID[] {
    //  1.
    const cell = this.grid.filter((cell) => cell.zone == zone)[0];
    const start: Position = { x: cell.x, y: cell.y };
    //  2.
    const rawMoves = pieceMovesAtlas[type] as MoveMatrix;
    //  3.
    const newMoves: ZoneID[] = this.processRawMoves(rawMoves, color, start);
    //  4.
    return newMoves;
  }

  /**
   * Starts with the moves for a particular piece and runs them against
   * the actual grid from it's starting point.
   *
   * @param moves
   * @param color
   * @param start
   * @returns ZoneID[]
   */
  private processRawMoves(
    moves: MoveMatrix,
    color: PieceColor,
    start: Position
  ): ZoneID[] {
    //  Go through all directions of moves for a piece by iterating
    //  over the moves listed in a RawMoveMatrix(up, down, etc)
    const allDirections = Object.keys(moves).map((direction) => {
      const direct = direction as Direction;
      //  Get moves per individual direction
      return this.processMoveDirection(direct, moves[direct], color, start);
    });
    return this.validateMoves(allDirections.flat());
  }

  /**
   * Returns the possible moves per one direction from a MoveMatrixCell
   *
   * 1. Establish each possible move ranges from the MoveMatrixCell including rules
   * 2. Iterate over each direction possibility against the number of range
   * 3. Return all possible moves for this piece
   *
   * @param direction Direction
   * @param moves MoveMatrixCell
   * @param color PieceColor
   * @param start Position
   * @returns ZoneID[]
   */
  private processMoveDirection(
    direction: Direction,
    moves: MoveMatrixCell,
    color: PieceColor,
    start: Position
  ): ZoneID[] {
    //  1.
    let fullRange = moves[0];
    const rule = moves[1];
    if (rule) {
      switch (rule.type) {
        case 'attack':
          break;
        case 'castle':
          break;
        case 'first':
          //  If pawn hasn't moved yet, add more range
          fullRange = rule.range;
          break;
        case 'second':
          //  Knight has a second move along a different axis
          break;
      }
    }

    //  2.
    let nextPosition: Position = { x: start.x, y: start.y + 1 };
    let stepValue: StepValue = getStepValue(direction);
    let newMoves: ZoneID[] = [];

    for (let i = 0; i < fullRange; i++) {
      if (color === 'white') {
        nextPosition.x += stepValue.x;
        nextPosition.y += stepValue.y;
      } else {
        nextPosition.x -= stepValue.x;
        nextPosition.y -= stepValue.y;
      }
      newMoves.push((letters[nextPosition.x] + nextPosition.y) as ZoneID);
    }
    //  3.
    return newMoves;
  }

  /**
   * Returns only legal moves.
   *
   * 1. 'Attempt' each move against the grid from the start point
   * 2. If the move is to an empty zone, keep it
   * 3. If the move is to a zone with an opponent's piece, keep it
   * 4. If the move is to zone with same color piece, toss it
   * 5. If the move is to a zone that is off the board, toss it
   * 6. Return each remaining move.
   *
   * @param moves
   * @returns ZoneID[]
   */
  private validateMoves(moves: ZoneID[]): ZoneID[] {
    let validatedMoves = ['' as ZoneID];

    console.log(moves);
    return moves;
  }
}

type PieceModelType = {
  id: number;
  zone: string;
  type: PieceType;
  color: PieceColor;
  x: number;
  y: number;
  history: ZoneID[];
};

type Position = {
  x: number;
  y: number;
};

type RuleType = 'castle' | 'attack' | 'first' | 'second';

type Rule = { type: RuleType; range: 1 | 2 };

type MoveMatrixCell = [Ranges] | [Ranges, Rule];

type MoveMatrix = {
  up: MoveMatrixCell;
  upLeft: MoveMatrixCell;
  left: MoveMatrixCell;
  downLeft: MoveMatrixCell;
  down: MoveMatrixCell;
  downRight: MoveMatrixCell;
  right: MoveMatrixCell;
  upRight: MoveMatrixCell;
};

type MoveAtlas = {
  king: MoveMatrix;
  queen: MoveMatrix;
  bishop: MoveMatrix;
  rook: MoveMatrix;
  knight: MoveMatrix;
  pawn: MoveMatrix;
};

const pieceMovesAtlas: MoveAtlas = {
  king: {
    up: [1],
    upLeft: [1],
    left: [1, { type: 'castle', range: 2 }],
    downLeft: [1],
    down: [1],
    downRight: [1],
    right: [1, { type: 'castle', range: 2 }],
    upRight: [1],
  },
  queen: {
    up: [7],
    upLeft: [7],
    left: [7],
    downLeft: [7],
    down: [7],
    downRight: [7],
    right: [7],
    upRight: [7],
  },
  bishop: {
    up: [0],
    upLeft: [7],
    left: [0],
    downLeft: [7],
    down: [0],
    downRight: [7],
    right: [0],
    upRight: [7],
  },
  rook: {
    up: [7],
    upLeft: [0],
    left: [7, { type: 'castle', range: 2 }],
    downLeft: [0],
    down: [7],
    downRight: [0],
    right: [7, { type: 'castle', range: 2 }],
    upRight: [0],
  },
  knight: {
    up: [2],
    upLeft: [0, { type: 'second', range: 1 }],
    left: [2],
    downLeft: [0, { type: 'second', range: 1 }],
    down: [2],
    downRight: [0, { type: 'second', range: 1 }],
    right: [2],
    upRight: [0, { type: 'second', range: 1 }],
  },
  pawn: {
    up: [1, { type: 'first', range: 2 }],
    upLeft: [0, { type: 'attack', range: 1 }],
    left: [0],
    downLeft: [0],
    down: [0],
    downRight: [0],
    right: [0],
    upRight: [0, { type: 'attack', range: 1 }],
  },
};

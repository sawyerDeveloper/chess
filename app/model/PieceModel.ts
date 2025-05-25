import { PieceColor, PieceType } from '../components/PieceView';
import { GridCell, letters, ZoneID } from './GridModel';

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
   * Sequence:
   * 1. Establish the x,y of the landingZone cell of the pressed piece.
   * 2. Gets that piece's possible moves.
   * 3. Interpolate the moves against the grid system and return them in Algerbraic Notation.
   * 4. Remove moves depending on if the moves are not aligned with open/attackable zones.
   * 5. Return moves that are left.
   *
   * @param type PieceType
   * @param zone string
   * @returns string[]
   */
  getMoves(type: PieceType, color: PieceColor, zone: string): ZoneID[] {
    //  1.
    const cell = this.grid.filter((cell) => cell.zone == zone)[0];
    const start: StartingPosition = { x: cell.x, y: cell.y };
    //  2.
    const rawMoves = pieceMovesAtlas[type] as RawMoveMatrix;
    //  3.
    const newMoves: ZoneID[] =
      //  4.
      this.processRawMoves(rawMoves, color, start);
    //  5.
    return newMoves;
  }

  /**
   * Starts with the moves for a particular piece and runs them against
   * the actual grid from the starting point of the selected piece.
   *
   * @param moves
   * @param color
   * @param start
   * @returns
   */
  private processRawMoves(
    moves: RawMoveMatrix,
    color: PieceColor,
    start: StartingPosition
  ): ZoneID[] {
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
   * Returns the possible moves per one direction from a MoveMatrix
   *
   * 1. Establish each possible move ranges from the MoveMatrixCell
   * 2. 'Attempt' each move against the grid from the start point
   * 3. If the move is to an empty zone, keep it
   * 4. If the move is to a zone with an opponent's piece, keep it
   * 5. If the move is to zone with same color piece, toss it
   * 6. If the move is to a zone that is off the board, toss it
   * 7. Return each move that is legal
   *
   * @param direction Direction
   * @param moves MoveMatrixCell
   * @param color PieceColor
   * @param start StartingPosition
   * @returns MoveMatrix
   */
  private processMoveDirection(
    direction: Direction,
    moves: MoveMatrixCell,
    color: PieceColor,
    start: StartingPosition
  ): ZoneID[] {
    //  1.
    let fullRange = moves[0];
    const rule = moves[1];
    if (rule) {
      switch (rule.type) {
        case 'attack':
          //console.log('attack');
          break;
        case 'castle':
          //console.log('castle');
          break;
        case 'first':
          console.log('first');
          //  If pawn hasn't moved yet, add more range
          fullRange = rule.range;
          break;
        case 'second':
          //  Knight has a second move along a different axis
          //console.log('second');
          break;
      }
    }

    //  2.
    let nextPosition: StartingPosition = { x: start.x, y: start.y + 1 };
    let stepValue: StartingPosition;
    let newMoves: ZoneID[] = [];
    switch (direction) {
      case 'up':
        stepValue = { x: 0, y: 1 };
        break;
      case 'down':
        stepValue = { x: 0, y: -1 };
        break;
      case 'left':
        stepValue = { x: -1, y: 0 };
        break;
      case 'right':
        stepValue = { x: 1, y: 0 };
        break;
      case 'upLeft':
        stepValue = { x: -1, y: 1 };
        break;
      case 'downLeft':
        stepValue = { x: -1, y: -1 };
        break;
      case 'downRight':
        stepValue = { x: 1, y: -1 };
        break;
      case 'upRight':
        stepValue = { x: 1, y: 1 };
        break;
    }
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
    return newMoves;
  }
}

type PieceModelType = {
  id: number;
  zone: string;
  type: PieceType;
  color: PieceColor;
  x: number;
  y: number;
  history: string[];
};

export type MoveMatrix = {
  up: string[];
  upLeft: string[];
  left: string[];
  downLeft: string[];
  down: string[];
  downRight: string[];
  right: string[];
  upRight: string[];
};

type StartingPosition = {
  x: number;
  y: number;
};

type Direction =
  | 'up'
  | 'down'
  | 'left'
  | 'right'
  | 'upLeft'
  | 'upRight'
  | 'downLeft'
  | 'downRight';
type RuleType = 'castle' | 'attack' | 'first' | 'second';
type Rule = { type: RuleType; range: number };
type MoveMatrixCell = [number] | [number, Rule];

type RawMoveMatrix = {
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
  king: RawMoveMatrix;
  queen: RawMoveMatrix;
  bishop: RawMoveMatrix;
  rook: RawMoveMatrix;
  knight: RawMoveMatrix;
  pawn: RawMoveMatrix;
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

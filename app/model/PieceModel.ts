import { PieceColor, PieceType } from '../components/PieceView';
import { GridCell, ZoneID } from './GridModel';

export default class PieceModel {
  private pieces: PieceModelType[] = [];
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
          moves: [],
        } as PieceModelType;
      });
  }

  /**
   * Returns an array of possible moves for a piece.
   * Sequence:
   * 1. Establish the x,y of the landingZone cell of the pressed piece.
   * 2. Gets that piece's possible moves.
   * 3. Interpolate the moves against the grid system and Algerbraic Notation.
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
    const allDirections = Object.keys(moves).map((direction) => {
      const direct = direction as Direction;
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
    console.log(moves);
    let newMoves: ZoneID[] = [];
    if (direction === 'up') {
      newMoves = ['a3', 'a4'];
    }

    return newMoves;
  }
}

type StartingPosition = {
  x: Number;
  y: Number;
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

type PieceModelType = {
  id: number;
  zone: string;
  type: PieceType;
  color: PieceColor;
  moves: string[];
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

type MoveMatrixCell = [number] | [number, object];

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
    left: [1, { castle: 2 }],
    downLeft: [1],
    down: [1],
    downRight: [1],
    right: [1, { castle: 2 }],
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
    left: [7, { castle: 2 }],
    downLeft: [0],
    down: [7],
    downRight: [0],
    right: [7, { castle: 2 }],
    upRight: [0],
  },
  knight: {
    up: [2],
    upLeft: [0, { second: 1 }],
    left: [2],
    downLeft: [0, { second: 1 }],
    down: [2],
    downRight: [0, { second: 1 }],
    right: [2],
    upRight: [0, { second: 1 }],
  },
  pawn: {
    up: [1, { first: 2 }],
    upLeft: [0, { attack: 1 }],
    left: [0],
    downLeft: [0],
    down: [0],
    downRight: [0],
    right: [0],
    upRight: [0, { attack: 1 }],
  },
};

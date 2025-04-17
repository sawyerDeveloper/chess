import { useId } from 'react';
import { PieceColor, PieceType } from '../components/PieceView';
import { GridCell } from './GridModel';

export default class PieceModel {
  private pieces: PieceModelType[] = [];
  constructor(grid: GridCell[]) {
    this.pieces = grid
      .filter((zone) => zone.piece.type)
      .map((zone) => {
        return {
          id: useId(),
          zone: zone.zone,
          type: zone.piece.type,
          color: zone.piece.color,
          moves: [],
        } as PieceModelType;
      });
    console.info('PieceModel');
  }

  /**
   * Returns a MoveMatrix of possible moves for a piece
   *
   * @param type PieceType
   * @param zone string
   * @param grid GridCell[]
   * @returns MoveMatrix
   */
  getMoves(type: PieceType, zone: string, grid: GridCell[]): MoveMatrix {
    const cell = grid.filter((cell) => cell.zone === zone)[0];
    const start = [cell.x, cell.y];
    const rawMoves = pieceMovesAtlas[type] as RawMoveMatrix;
    const newMoves: MoveMatrix = {
      up: this.processRawMoves(rawMoves.up, grid),
      upLeft: this.processRawMoves(rawMoves.upLeft, grid),
      left: this.processRawMoves(rawMoves.left, grid),
      downLeft: this.processRawMoves(rawMoves.downLeft, grid),
      down: this.processRawMoves(rawMoves.down, grid),
      right: this.processRawMoves(rawMoves.right, grid),
      downRight: this.processRawMoves(rawMoves.downRight, grid),
      upRight: this.processRawMoves(rawMoves.upRight, grid),
    };

    console.log(start, rawMoves, newMoves);

    return newMoves;
  }

  private processRawMoves(moves: MoveMatrixCell, grid: GridCell[]): string[] {
    const newMoves = moves.map((move) => {
      console.log(move);
      return move;
    });

    // start with default moves
    return moves[0];
  }
}

type PieceModelType = {
  id: string;
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

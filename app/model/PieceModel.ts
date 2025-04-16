import { PieceType } from '../components/PieceView';
import { GridCell } from './GridModel';

export default class PieceModel {
  private pieces : GridCell[] = []
  constructor(grid: GridCell[]) {
    console.info('PieceModel');
    this.pieces = grid.filter(zone => zone.piece.type)
  }

  getMoves(type: PieceType, zone: string, grid: GridCell[]): MoveMatrix {

    console.log(this.pieces)

    return pieceMovesAtlas[type] as MoveMatrix;
  }
}

export type MoveMatrix = {
  up: [number] | [number, object];
  upLeft: [number] | [number, object];
  left: [number] | [number, object];
  downLeft: [number] | [number, object];
  down: [number] | [number, object];
  downRight: [number] | [number, object];
  right: [number] | [number, object];
  upRight: [number] | [number, object];
};

export type MoveAtlas = {
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
    upLeft: [0, {second: 1}],
    left: [2],
    downLeft: [0, {second: 1}],
    down: [2],
    downRight: [0, {second: 1}],
    right: [2],
    upRight: [0, {second: 1}],
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

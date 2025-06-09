import { GridRange, ZoneID, Zones } from './GridTypes';

export enum PieceType {
  KING = 'king',
  QUEEN = 'queen',
  BISHOP = 'bishop',
  KNIGHT = 'knight',
  ROOK = 'rook',
  PAWN = 'pawn',
}

export enum PieceColor {
  WHITE = 'white',
  BLACK = 'black',
}

export type Pieces = PieceModelType[];

export type PieceModelType = {
  id: number;
  zone: ZoneID;
  type: PieceType;
  color: PieceColor;
  x: GridRange;
  y: GridRange;
  history: Zones;
};

export type Piece = {
  type: PieceType;
  color: PieceColor;
};

export type Position = {
  x: GridRange;
  y: GridRange;
};

export enum RuleType {
  CASTLE = 'castle',
  ATTACK = 'attack',
  FIRST = 'first',
  SECOND = 'second',
}

export type RuleRange = 1 | 2 | 0;

export type Rule = { type: RuleType; range: RuleRange } | undefined;

export type MoveMatrixCell = [GridRange] | [GridRange, Rule];

export type MoveMatrix = {
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

export const pieceMovesAtlas: MoveAtlas = {
  king: {
    up: [1],
    upLeft: [1],
    left: [1, { type: RuleType.CASTLE, range: 2 }],
    downLeft: [1],
    down: [1],
    downRight: [1],
    right: [1, { type: RuleType.CASTLE, range: 2 }],
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
    left: [7, { type: RuleType.CASTLE, range: 2 }],
    downLeft: [0],
    down: [7],
    downRight: [0],
    right: [7, { type: RuleType.CASTLE, range: 2 }],
    upRight: [0],
  },
  knight: {
    up: [2],
    upLeft: [0, { type: RuleType.SECOND, range: 1 }],
    left: [2],
    downLeft: [0, { type: RuleType.SECOND, range: 1 }],
    down: [2],
    downRight: [0, { type: RuleType.SECOND, range: 1 }],
    right: [2],
    upRight: [0, { type: RuleType.SECOND, range: 1 }],
  },
  pawn: {
    up: [1, { type: RuleType.FIRST, range: 2 }],
    upLeft: [0, { type: RuleType.ATTACK, range: 1 }],
    left: [0],
    downLeft: [0],
    down: [0],
    downRight: [0],
    right: [0],
    upRight: [0, { type: RuleType.ATTACK, range: 1 }],
  },
};

export default {};

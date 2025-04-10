import { Piece } from '../components/PieceView';

export default class PieceModel {
  constructor() {
    console.info('PieceModel');
  }

  getMoves(piece: Piece, id: string) : [] {
    let moves:[] = [];
    if (piece.type) {
      moves = pieceMovesAtlas[piece.type].moves;
    }
    return moves;
  }
}

export type MoveMatrix = {
  up: number;
  upLeft: number;
  left: number;
  downLeft: number;
  down: number;
  downRight: number;
  right: number;
  upRight: number;
};

const pieceMovesAtlas = {
  king: {
    moves: [
      {
        up: 1,
        upLeft: 1,
        left: 1,
        downLeft: 1,
        down: 1,
        downRight: 1,
        right: 1,
        upRight: 1,
      },
      {
        left: 2,
        right: 2,
      },
    ],
  },
  queen: {
    moves: [
      {
        up: 7,
        upLeft: 7,
        left: 7,
        downLeft: 7,
        down: 7,
        downRight: 7,
        right: 7,
        upRight: 7,
      },
    ],
  },
  bishop: {
    moves: [
      {
        up: 0,
        upLeft: 7,
        left: 0,
        downLeft: 7,
        down: 0,
        downRight: 7,
        right: 0,
        upRight: 7,
      },
    ],
  },
  rook: {
    moves: [
      {
        up: 7,
        upLeft: 0,
        left: 7,
        downLeft: 0,
        down: 7,
        downRight: 0,
        right: 7,
        upRight: 0,
      },
      {
        left: 2,
        right: 2,
      },
    ],
  },
  knight: {
    moves: [{ up: 2, right: 1 }],
  },
  pawn: {
    moves: [
      {
        up: 1,
        upLeft: 0,
        left: 0,
        downLeft: 0,
        down: 0,
        downRight: 0,
        right: 0,
        upRight: 0,
      },
      {
        up: 2,
      },
    ],
    attacks: {
      upLeft: 1,
      upRight: 1,
    },
  },
};

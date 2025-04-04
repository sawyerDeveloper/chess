const startingGrid = [
  {
    x: 0,
    y: 0,
    id: 'a1',
    piece: {
      type: 'rook',
      color: 'white',
    },
  },
  {
    x: 0,
    y: 1,
    id: 'a2',
    piece: {
      type: 'pawn',
      color: 'white',
    },
  },
  {
    x: 0,
    y: 2,
    id: 'a3',
    piece: {
      type: null,
      color: null,
    },
  },
  {
    x: 0,
    y: 3,
    id: 'a4',
    piece: {
      type: null,
      color: null,
    },
  },
  {
    x: 0,
    y: 4,
    id: 'a5',
    piece: {
      type: null,
      color: null,
    },
  },
  {
    x: 0,
    y: 5,
    id: 'a6',
    piece: {
      type: null,
      color: null,
    },
  },
  {
    x: 0,
    y: 6,
    id: 'a7',
    piece: {
      type: 'pawn',
      color: 'black',
    },
  },
  {
    x: 0,
    y: 7,
    id: 'a8',
    piece: {
      type: 'rook',
      color: 'black',
    },
  },
  {
    x: 1,
    y: 0,
    id: 'b1',
    piece: {
      type: 'knight',
      color: 'white',
    },
  },
  {
    x: 1,
    y: 1,
    id: 'b2',
    piece: {
      type: 'pawn',
      color: 'white',
    },
  },
  {
    x: 1,
    y: 2,
    id: 'b3',
    piece: {
      type: null,
      color: null,
    },
  },
  {
    x: 1,
    y: 3,
    id: 'b4',
    piece: {
      type: null,
      color: null,
    },
  },
  {
    x: 1,
    y: 4,
    id: 'b5',
    piece: {
      type: null,
      color: null,
    },
  },
  {
    x: 1,
    y: 5,
    id: 'b6',
    piece: {
      type: null,
      color: null,
    },
  },
  {
    x: 1,
    y: 6,
    id: 'b7',
    piece: {
      type: 'pawn',
      color: 'black',
    },
  },
  {
    x: 1,
    y: 7,
    id: 'b8',
    piece: {
      type: 'knight',
      color: 'black',
    },
  },
  {
    x: 2,
    y: 0,
    id: 'c1',
    piece: {
      type: 'bishop',
      color: 'white',
    },
  },
  {
    x: 2,
    y: 1,
    id: 'c2',
    piece: {
      type: 'pawn',
      color: 'white',
    },
  },
  {
    x: 2,
    y: 2,
    id: 'c3',
    piece: {
      type: null,
      color: null,
    },
  },
  {
    x: 2,
    y: 3,
    id: 'c4',
    piece: {
      type: null,
      color: null,
    },
  },
  {
    x: 2,
    y: 4,
    id: 'c5',
    piece: {
      type: null,
      color: null,
    },
  },
  {
    x: 2,
    y: 5,
    id: 'c6',
    piece: {
      type: null,
      color: null,
    },
  },
  {
    x: 2,
    y: 6,
    id: 'c7',
    piece: {
      type: 'pawn',
      color: 'black',
    },
  },
  {
    x: 2,
    y: 7,
    id: 'c8',
    piece: {
      type: 'bishop',
      color: 'black',
    },
  },
  {
    x: 3,
    y: 0,
    id: 'd1',
    piece: {
      type: 'queen',
      color: 'white',
    },
  },
  {
    x: 3,
    y: 1,
    id: 'd2',
    piece: {
      type: 'pawn',
      color: 'white',
    },
  },
  {
    x: 3,
    y: 2,
    id: 'd3',
    piece: {
      type: null,
      color: null,
    },
  },
  {
    x: 3,
    y: 3,
    id: 'd4',
    piece: {
      type: null,
      color: null,
    },
  },
  {
    x: 3,
    y: 4,
    id: 'd5',
    piece: {
      type: null,
      color: null,
    },
  },
  {
    x: 3,
    y: 5,
    id: 'd6',
    piece: {
      type: null,
      color: null,
    },
  },
  {
    x: 3,
    y: 6,
    id: 'd7',
    piece: {
      type: 'pawn',
      color: 'black',
    },
  },
  {
    x: 3,
    y: 7,
    id: 'd8',
    piece: {
      type: 'queen',
      color: 'black',
    },
  },
  {
    x: 4,
    y: 0,
    id: 'e1',
    piece: {
      type: 'king',
      color: 'white',
    },
  },
  {
    x: 4,
    y: 1,
    id: 'e2',
    piece: {
      type: 'pawn',
      color: 'white',
    },
  },
  {
    x: 4,
    y: 2,
    id: 'e3',
    piece: {
      type: null,
      color: null,
    },
  },
  {
    x: 4,
    y: 3,
    id: 'e4',
    piece: {
      type: null,
      color: null,
    },
  },
  {
    x: 4,
    y: 4,
    id: 'e5',
    piece: {
      type: null,
      color: null,
    },
  },
  {
    x: 4,
    y: 5,
    id: 'e6',
    piece: {
      type: null,
      color: null,
    },
  },
  {
    x: 4,
    y: 6,
    id: 'e7',
    piece: {
      type: 'pawn',
      color: 'black',
    },
  },
  {
    x: 4,
    y: 7,
    id: 'e8',
    piece: {
      type: 'king',
      color: 'black',
    },
  },
  {
    x: 5,
    y: 0,
    id: 'f1',
    piece: {
      type: 'bishop',
      color: 'white',
    },
  },
  {
    x: 5,
    y: 1,
    id: 'f2',
    piece: {
      type: 'pawn',
      color: 'white',
    },
  },
  {
    x: 5,
    y: 2,
    id: 'f3',
    piece: {
      type: null,
      color: null,
    },
  },
  {
    x: 5,
    y: 3,
    id: 'f4',
    piece: {
      type: null,
      color: null,
    },
  },
  {
    x: 5,
    y: 4,
    id: 'f5',
    piece: {
      type: null,
      color: null,
    },
  },
  {
    x: 5,
    y: 5,
    id: 'f6',
    piece: {
      type: null,
      color: null,
    },
  },
  {
    x: 5,
    y: 6,
    id: 'f7',
    piece: {
      type: 'pawn',
      color: 'black',
    },
  },
  {
    x: 5,
    y: 7,
    id: 'f8',
    piece: {
      type: 'bishop',
      color: 'black',
    },
  },
  {
    x: 6,
    y: 0,
    id: 'g1',
    piece: {
      type: 'knight',
      color: 'white',
    },
  },
  {
    x: 6,
    y: 1,
    id: 'g2',
    piece: {
      type: 'pawn',
      color: 'white',
    },
  },
  {
    x: 6,
    y: 2,
    id: 'g3',
    piece: {
      type: null,
      color: null,
    },
  },
  {
    x: 6,
    y: 3,
    id: 'g4',
    piece: {
      type: null,
      color: null,
    },
  },
  {
    x: 6,
    y: 4,
    id: 'g5',
    piece: {
      type: null,
      color: null,
    },
  },
  {
    x: 6,
    y: 5,
    id: 'g6',
    piece: {
      type: null,
      color: null,
    },
  },
  {
    x: 6,
    y: 6,
    id: 'g7',
    piece: {
      type: 'pawn',
      color: 'black',
    },
  },
  {
    x: 6,
    y: 7,
    id: 'g8',
    piece: {
      type: 'knight',
      color: 'black',
    },
  },
  {
    x: 7,
    y: 0,
    id: 'h1',
    piece: {
      type: 'rook',
      color: 'white',
    },
  },
  {
    x: 7,
    y: 1,
    id: 'h2',
    piece: {
      type: 'pawn',
      color: 'white',
    },
  },
  {
    x: 7,
    y: 2,
    id: 'h3',
    piece: {
      type: null,
      color: null,
    },
  },
  {
    x: 7,
    y: 3,
    id: 'h4',
    piece: {
      type: null,
      color: null,
    },
  },
  {
    x: 7,
    y: 4,
    id: 'h5',
    piece: {
      type: null,
      color: null,
    },
  },
  {
    x: 7,
    y: 5,
    id: 'h6',
    piece: {
      type: null,
      color: null,
    },
  },
  {
    x: 7,
    y: 6,
    id: 'h7',
    piece: {
      type: 'pawn',
      color: 'black',
    },
  },
  {
    x: 7,
    y: 7,
    id: 'h8',
    piece: {
      type: 'rook',
      color: 'black',
    },
  },
];

export default startingGrid
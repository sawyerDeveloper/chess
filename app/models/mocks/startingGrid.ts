const startingGrid = [
  {
    x: 0,
    y: 0,
    zone: 'a1',
    piece: {
      type: 'rook',
      color: 'white',
    },
  },
  {
    x: 0,
    y: 1,
    zone: 'a2',
    piece: {
      type: 'pawn',
      color: 'white',
    },
  },
  {
    x: 0,
    y: 2,
    zone: 'a3',
    piece: {
      type: null,
      color: null,
    },
  },
  {
    x: 0,
    y: 3,
    zone: 'a4',
    piece: {
      type: null,
      color: null,
    },
  },
  {
    x: 0,
    y: 4,
    zone: 'a5',
    piece: {
      type: null,
      color: null,
    },
  },
  {
    x: 0,
    y: 5,
    zone: 'a6',
    piece: {
      type: null,
      color: null,
    },
  },
  {
    x: 0,
    y: 6,
    zone: 'a7',
    piece: {
      type: 'pawn',
      color: 'black',
    },
  },
  {
    x: 0,
    y: 7,
    zone: 'a8',
    piece: {
      type: 'rook',
      color: 'black',
    },
  },
  {
    x: 1,
    y: 0,
    zone: 'b1',
    piece: {
      type: 'knight',
      color: 'white',
    },
  },
  {
    x: 1,
    y: 1,
    zone: 'b2',
    piece: {
      type: 'pawn',
      color: 'white',
    },
  },
  {
    x: 1,
    y: 2,
    zone: 'b3',
    piece: {
      type: null,
      color: null,
    },
  },
  {
    x: 1,
    y: 3,
    zone: 'b4',
    piece: {
      type: null,
      color: null,
    },
  },
  {
    x: 1,
    y: 4,
    zone: 'b5',
    piece: {
      type: null,
      color: null,
    },
  },
  {
    x: 1,
    y: 5,
    zone: 'b6',
    piece: {
      type: null,
      color: null,
    },
  },
  {
    x: 1,
    y: 6,
    zone: 'b7',
    piece: {
      type: 'pawn',
      color: 'black',
    },
  },
  {
    x: 1,
    y: 7,
    zone: 'b8',
    piece: {
      type: 'knight',
      color: 'black',
    },
  },
  {
    x: 2,
    y: 0,
    zone: 'c1',
    piece: {
      type: 'bishop',
      color: 'white',
    },
  },
  {
    x: 2,
    y: 1,
    zone: 'c2',
    piece: {
      type: 'pawn',
      color: 'white',
    },
  },
  {
    x: 2,
    y: 2,
    zone: 'c3',
    piece: {
      type: null,
      color: null,
    },
  },
  {
    x: 2,
    y: 3,
    zone: 'c4',
    piece: {
      type: null,
      color: null,
    },
  },
  {
    x: 2,
    y: 4,
    zone: 'c5',
    piece: {
      type: null,
      color: null,
    },
  },
  {
    x: 2,
    y: 5,
    zone: 'c6',
    piece: {
      type: null,
      color: null,
    },
  },
  {
    x: 2,
    y: 6,
    zone: 'c7',
    piece: {
      type: 'pawn',
      color: 'black',
    },
  },
  {
    x: 2,
    y: 7,
    zone: 'c8',
    piece: {
      type: 'bishop',
      color: 'black',
    },
  },
  {
    x: 3,
    y: 0,
    zone: 'd1',
    piece: {
      type: 'queen',
      color: 'white',
    },
  },
  {
    x: 3,
    y: 1,
    zone: 'd2',
    piece: {
      type: 'pawn',
      color: 'white',
    },
  },
  {
    x: 3,
    y: 2,
    zone: 'd3',
    piece: {
      type: null,
      color: null,
    },
  },
  {
    x: 3,
    y: 3,
    zone: 'd4',
    piece: {
      type: null,
      color: null,
    },
  },
  {
    x: 3,
    y: 4,
    zone: 'd5',
    piece: {
      type: null,
      color: null,
    },
  },
  {
    x: 3,
    y: 5,
    zone: 'd6',
    piece: {
      type: null,
      color: null,
    },
  },
  {
    x: 3,
    y: 6,
    zone: 'd7',
    piece: {
      type: 'pawn',
      color: 'black',
    },
  },
  {
    x: 3,
    y: 7,
    zone: 'd8',
    piece: {
      type: 'queen',
      color: 'black',
    },
  },
  {
    x: 4,
    y: 0,
    zone: 'e1',
    piece: {
      type: 'king',
      color: 'white',
    },
  },
  {
    x: 4,
    y: 1,
    zone: 'e2',
    piece: {
      type: 'pawn',
      color: 'white',
    },
  },
  {
    x: 4,
    y: 2,
    zone: 'e3',
    piece: {
      type: null,
      color: null,
    },
  },
  {
    x: 4,
    y: 3,
    zone: 'e4',
    piece: {
      type: null,
      color: null,
    },
  },
  {
    x: 4,
    y: 4,
    zone: 'e5',
    piece: {
      type: null,
      color: null,
    },
  },
  {
    x: 4,
    y: 5,
    zone: 'e6',
    piece: {
      type: null,
      color: null,
    },
  },
  {
    x: 4,
    y: 6,
    zone: 'e7',
    piece: {
      type: 'pawn',
      color: 'black',
    },
  },
  {
    x: 4,
    y: 7,
    zone: 'e8',
    piece: {
      type: 'king',
      color: 'black',
    },
  },
  {
    x: 5,
    y: 0,
    zone: 'f1',
    piece: {
      type: 'bishop',
      color: 'white',
    },
  },
  {
    x: 5,
    y: 1,
    zone: 'f2',
    piece: {
      type: 'pawn',
      color: 'white',
    },
  },
  {
    x: 5,
    y: 2,
    zone: 'f3',
    piece: {
      type: null,
      color: null,
    },
  },
  {
    x: 5,
    y: 3,
    zone: 'f4',
    piece: {
      type: null,
      color: null,
    },
  },
  {
    x: 5,
    y: 4,
    zone: 'f5',
    piece: {
      type: null,
      color: null,
    },
  },
  {
    x: 5,
    y: 5,
    zone: 'f6',
    piece: {
      type: null,
      color: null,
    },
  },
  {
    x: 5,
    y: 6,
    zone: 'f7',
    piece: {
      type: 'pawn',
      color: 'black',
    },
  },
  {
    x: 5,
    y: 7,
    zone: 'f8',
    piece: {
      type: 'bishop',
      color: 'black',
    },
  },
  {
    x: 6,
    y: 0,
    zone: 'g1',
    piece: {
      type: 'knight',
      color: 'white',
    },
  },
  {
    x: 6,
    y: 1,
    zone: 'g2',
    piece: {
      type: 'pawn',
      color: 'white',
    },
  },
  {
    x: 6,
    y: 2,
    zone: 'g3',
    piece: {
      type: null,
      color: null,
    },
  },
  {
    x: 6,
    y: 3,
    zone: 'g4',
    piece: {
      type: null,
      color: null,
    },
  },
  {
    x: 6,
    y: 4,
    zone: 'g5',
    piece: {
      type: null,
      color: null,
    },
  },
  {
    x: 6,
    y: 5,
    zone: 'g6',
    piece: {
      type: null,
      color: null,
    },
  },
  {
    x: 6,
    y: 6,
    zone: 'g7',
    piece: {
      type: 'pawn',
      color: 'black',
    },
  },
  {
    x: 6,
    y: 7,
    zone: 'g8',
    piece: {
      type: 'knight',
      color: 'black',
    },
  },
  {
    x: 7,
    y: 0,
    zone: 'h1',
    piece: {
      type: 'rook',
      color: 'white',
    },
  },
  {
    x: 7,
    y: 1,
    zone: 'h2',
    piece: {
      type: 'pawn',
      color: 'white',
    },
  },
  {
    x: 7,
    y: 2,
    zone: 'h3',
    piece: {
      type: null,
      color: null,
    },
  },
  {
    x: 7,
    y: 3,
    zone: 'h4',
    piece: {
      type: null,
      color: null,
    },
  },
  {
    x: 7,
    y: 4,
    zone: 'h5',
    piece: {
      type: null,
      color: null,
    },
  },
  {
    x: 7,
    y: 5,
    zone: 'h6',
    piece: {
      type: null,
      color: null,
    },
  },
  {
    x: 7,
    y: 6,
    zone: 'h7',
    piece: {
      type: 'pawn',
      color: 'black',
    },
  },
  {
    x: 7,
    y: 7,
    zone: 'h8',
    piece: {
      type: 'rook',
      color: 'black',
    },
  },
];

export default startingGrid;

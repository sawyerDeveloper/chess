import { Piece } from '../components/PieceView';
import { STARTING_ARRAY } from './data/startingArray';
export default class GridModel {
  private grid: GridCell[] = [];

  constructor() {
    console.info('GridModel');
  }

  public initGrid(startingArray: GridCell[] = []) {
    const pieceArray =
      startingArray.length > 0 ? startingArray : STARTING_ARRAY;
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
    for (let file: number = 1; file < letters.length; file++) {
      for (let rank: number = 1; rank < 9; rank++) {
        const notation = letters[file - 1] + rank;
        const piece: Piece = pieceArray.find(
          (piece) => piece.id === notation
        ) as Piece;
        this.grid.push({
          x: file - 1,
          y: rank - 1,
          id: notation,
          piece: { type: piece.type, color: piece.color } as Piece,
        });
      }
    }
  }

  public getGrid() {
    return this.grid;
  }
}

export type GridCell = {
  x: Number;
  y: Number;
  id: string;
  piece: Piece;
};

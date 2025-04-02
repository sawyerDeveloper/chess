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
    for (let file: number = 1; file < letters.length + 1; file++) {
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

  public updateGrid(start: string, end: string) {
    const startZone = this.grid.find((zone) => zone.id === start);
    const endZone = this.grid.find((zone) => zone.id === end);
    if (endZone?.piece && startZone?.piece) {
      endZone.piece.color = startZone.piece.color;
      endZone.piece.type = startZone.piece.type;
      startZone.piece.color = null;
      startZone.piece.type = null;
    }
  }

  public getGrid() {
    return this.grid;
  }

  public getZone(id: string): GridCell | undefined {
    const zone = this.grid.find((zone) => zone.id === id);
    if (zone) {
      return zone;
    }
  }
}

export const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
export type GridCell = {
  x: Number;
  y: Number;
  id: string;
  piece: Piece;
};

import { Piece } from '../components/PieceView';
import STARTING_ARRAY from './data/startingArray';
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
        const notation: ZoneID = (letters[file - 1] + rank) as ZoneID;
        const piece: Piece = pieceArray.find(
          (piece) => piece.zone === notation
        ) as Piece;
        this.grid.push({
          x: file - 1,
          y: rank - 1,
          zone: notation,
          piece: { type: piece.type, color: piece.color } as Piece,
        });
      }
    }
  }

  public updateGrid(start: ZoneID, end: ZoneID) {
    const startZone = this.grid.find((zone) => zone.zone === start);
    const endZone = this.grid.find((zone) => zone.zone === end);
    //  TODO: Create a single value change for piece
    if (endZone?.piece && startZone?.piece) {
      endZone.piece.color = startZone.piece.color;
      endZone.piece.type = startZone.piece.type;
      startZone.piece.color = null;
      startZone.piece.type = null;
    }
  }

  public getGrid(): GridCell[] {
    return this.grid;
  }

  public getZone(zoneId: string): GridCell {
    return this.grid.filter((zone) => zone.zone === zoneId)[0];
  }
}

export const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
export type GridCell = {
  x: Number;
  y: Number;
  zone: ZoneID;
  piece: Piece;
};
export type ZoneID =
  | 'a1'
  | 'a2'
  | 'a3'
  | 'a4'
  | 'a5'
  | 'a6'
  | 'a7'
  | 'a8'
  | 'b1'
  | 'b2'
  | 'b3'
  | 'b4'
  | 'b5'
  | 'b6'
  | 'b7'
  | 'b8'
  | 'c1'
  | 'c2'
  | 'c3'
  | 'c4'
  | 'c5'
  | 'c6'
  | 'c7'
  | 'c8'
  | 'd1'
  | 'd2'
  | 'd3'
  | 'd4'
  | 'd5'
  | 'd6'
  | 'd7'
  | 'd8'
  | 'e1'
  | 'e2'
  | 'e3'
  | 'e4'
  | 'e5'
  | 'e6'
  | 'e7'
  | 'e8'
  | 'f1'
  | 'f2'
  | 'f3'
  | 'f4'
  | 'f5'
  | 'f6'
  | 'f7'
  | 'f8'
  | 'g1'
  | 'g2'
  | 'g3'
  | 'g4'
  | 'g5'
  | 'g6'
  | 'g7'
  | 'g8'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'h7'
  | 'h8'
  | '';

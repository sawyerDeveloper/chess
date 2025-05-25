import { Piece } from '../components/PieceView';
import { GridCell, letters, ZoneID } from '../types/GridTypes';
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

import { Piece } from '../types/PieceTypes';
import {
  Grid,
  GridCell,
  GridColumn,
  GridRange,
  GridRow,
  letters,
  ZoneID,
} from '../types/GridTypes';
import STARTING_ARRAY from './data/startingArray';

/**
 * Handles the DataModel for the grid of the game.
 *
 */
export default class GridModel {
  //  Array of GridCells representing each square of the board.
  private grid: Grid = [];

  constructor() {
    console.info('GridModel');
  }

  /**
   *
   * @param startingArray
   */
  public initGrid(startingArray: Grid = []) {
    const pieceArray =
      startingArray.length > 0 ? startingArray : STARTING_ARRAY;
    for (let file: GridRow = 1; file < letters.length + 1; file++) {
      for (let rank: GridColumn = 1; rank < 9; rank++) {
        const notation: ZoneID = (letters[file - 1] + rank) as ZoneID;
        const piece: Piece = pieceArray.find(
          (piece) => piece.zone === notation
        ) as Piece;
        this.grid.push({
          x: (file - 1) as GridRange,
          y: (rank - 1) as GridRange,
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

  public getGrid(): Grid {
    return this.grid;
  }

  public getZone(zoneId: ZoneID): GridCell {
    return this.grid.filter((zone) => zone.zone === zoneId)[0];
  }

}

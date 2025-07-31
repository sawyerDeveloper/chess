import { Piece } from '../types/PieceTypes';
import {
  GridCellArray,
  GridCell,
  GridColumn,
  GridRange,
  GridRow,
  letters,
  ZoneID,
} from '../types/GridTypes';
import STARTING_ARRAY from './data/startingArray';

/**
 * Handles the data model for the grid of the game.
 *
 */
export default class GridModel {
  //  Array of GridCells representing each square of the board.
  private grid: GridCellArray = [];

  constructor() {
    console.info('GridModel');
  }

  /**
   * Initializes the grid with a starting array or existing game.
   *
   * @param startingArray GridCellArray
   * @access public
   */
  initGrid(startingArray: GridCellArray = []) {
    //  Either new grid or passed in from param
    const pieceArray =
      startingArray.length > 0 ? startingArray : STARTING_ARRAY;
    //  Dual loop through 'file' and 'rank' which are chess for row and column
    for (let file: GridRow = 1; file < letters.length + 1; file++) {
      for (let rank: GridColumn = 1; rank < 9; rank++) {
        //  Convert loop iteration into ZoneID in chess Standard Notation. A4, B6, etc
        const notation: ZoneID = (letters[file - 1] + rank) as ZoneID;
        //  Find the piece based on the above Standard Notation
        const piece: Piece = pieceArray.find(
          (piece) => piece.zone === notation
        ) as Piece;
        //  Push the new piece, zone and coordinates to the grid array
        this.grid.push({
          x: (file - 1) as GridRange,
          y: (rank - 1) as GridRange,
          zone: notation,
          piece: { type: piece.type, color: piece.color } as Piece,
        });
      }
    }
  }

  /**
   * Mutates the grid mased on moves of pieces.
   *
   * @param start ZoneID
   * @param end ZoneID
   * @access public
   */
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

  /**
   * Returns a reference to the grid of zones(GridCell).
   *
   * @returns GridCellArray
   * @access public
   */
  getGrid(): GridCellArray {
    return this.grid;
  }

  /**
   * Returns a GridCell based on the ZoneID passed in.
   *
   * @param zoneId ZoneID
   * @returns GridCell
   * @access public
   */
  getZone(zoneId: ZoneID): GridCell {
    return this.grid.filter((zone) => zone.zone === zoneId)[0];
  }
}

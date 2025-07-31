import { GridCell, GridCellArray, ZoneID, Zones } from '../types/GridTypes';
import GridModel from './GridModel';
import PieceModel from './PieceModel';

/**
 * Handles the overall data model for the game
 *
 */
export default class ChessModel {
  //  Reference to model that is scoped only to the cartesian/algebraic grid
  private gridModel: GridModel;
  //  Reference to model that is scoped onlyo to pieces
  private pieceModel: PieceModel;

  /**
   * Constructor. Initilizes GridModel and PieceModel.
   */
  constructor() {
    console.info('ChessModel');
    this.gridModel = new GridModel();
    this.gridModel.initGrid();
    this.pieceModel = new PieceModel(this.gridModel.getGrid());
  }

  /**
   * Returns an array of GridCells that represent every square on the board.
   *
   * @access public
   * @returns GridCellArray
   */
  getGrid(): GridCellArray {
    return this.gridModel.getGrid();
  }

  /**
   * Returns a GridCell out of the grid based on a ZoneID passed in.
   *
   * @access public
   * @param zone ZoneID
   * @returns GridCell
   */
  getZone(zone: ZoneID): GridCell {
    return this.gridModel.getZone(zone);
  }

  /**
   * Returns an array of ZoneIDs that represent all of the
   * possible moves a piece can make.
   *
   * @access public
   * @param zoneID ZoneID
   * @returns Zones
   */
  getAvailableZones(zoneID: ZoneID): Zones {
    const zone = this.getZone(zoneID);
    let newMoves: Zones = [];
    if (zone) {
      const { type, color } = this.getZone(zoneID).piece;
      if (type && color) {
        const possibleMoves = this.pieceModel.getMoves(type, color, zoneID);
        newMoves = possibleMoves;
      }
    }
    return newMoves;
  }

  /**
   * Moves a piece from one zone to another
   * Checks to see if the move is legal first
   *
   * @access public
   * @param start ZoneID
   * @param end ZoneID
   * @returns Boolean
   */
  movePiece(start: ZoneID, end: ZoneID): Boolean {
    if (!this.getAvailableZones(start).find((zone) => zone === end)) {
      return false;
    }
    this.pieceModel.makeMove(start, end);
    this.gridModel.updateGrid(start, end);
    return true;
  }
}

import {
  PieceColor,
  PieceType,
  PieceModelType,
  Position,
  pieceMovesAtlas,
  MoveMatrix,
  Pieces,
} from '../types/PieceTypes';
import { Grid, ZoneID, Zones } from '../types/GridTypes';
import PieceController from '../controllers/PieceController';

export default class PieceModel {
  //  Track individual pieces movements
  private pieces: Pieces = [];
  //  Reference to the main grid
  private grid: Grid;

  private controller: PieceController;

  constructor(grid: Grid) {
    console.info('PieceModel');
    this.grid = grid;
    this.pieces = grid
      .filter((zone) => zone.piece.type)
      .map((zone, index) => {
        return {
          id: index,
          zone: zone.zone,
          type: zone.piece.type,
          color: zone.piece.color,
          x: zone.x,
          y: zone.y,
          history: [],
        } as PieceModelType;
      });
    this.controller = new PieceController(this);
  }

  /**
   * Returns the piece data in the pieces array based on ZoneID
   *
   * @param zoneID ZoneID
   * @returns PieceModelType | undefined
   */
  getPiece(zoneID: ZoneID): PieceModelType {
    return this.pieces.filter((piece) => piece.zone == zoneID)[0];
  }

  /**
   * Updates the pieces Data Model to account for changes in individual pieces' data.
   *
   * @param fromZoneID ZoneID
   * @param toZoneID ZoneID
   */
  makeMove(fromZoneID: ZoneID, toZoneID: ZoneID): void {
    //  If there is an opponent piece
    const opponentPiece: PieceModelType | undefined = this.getPiece(toZoneID);
    const fromPiece: PieceModelType | undefined = this.getPiece(fromZoneID);

    //  Set history
    if (fromPiece) {
      fromPiece.history.push(toZoneID);
      fromPiece.zone = toZoneID;
    }

    //  Remove the opponent piece from the board and update history for that piece
    if (opponentPiece) {
      opponentPiece.zone = '';
      opponentPiece.history.push('');
    }
  }

  /**
   * Returns an array of possible moves for a piece.
   *
   * 1. Establish the x,y of the landingZone cell of the selected piece.
   * 2. Gets that piece's possible moves.
   * 3. Remove moves that aren't legal.
   * 3. Return remaining moves.
   *
   * @param type PieceType
   * @param zone ZoneID
   * @returns Zones
   */
  getMoves(type: PieceType, color: PieceColor, zone: ZoneID): Zones {
    //  1.
    const cell = this.grid.filter((cell) => cell.zone == zone)[0];
    const start: Position = { x: cell.x, y: cell.y };
    //  2.
    const rawMoves = pieceMovesAtlas[type] as MoveMatrix;
    //  3.
    const newMoves: Zones = this.controller.processRawMoves(
      rawMoves,
      color,
      start
    );
    //  4.
    return newMoves;
  }
}

import { GridCell, ZoneID } from '../types/GridTypes';
import GridModel from './GridModel';
import PieceModel from './PieceModel';

export default class ChessModel {
  private gridModel: GridModel;
  private pieceModel: PieceModel;

  constructor() {
    console.info('ChessModel');
    this.gridModel = new GridModel();
    this.gridModel.initGrid();
    this.pieceModel = new PieceModel(this.gridModel.getGrid());
  }

  public getGrid(): GridCell[] {
    return this.gridModel.getGrid();
  }

  public getZone(zone: ZoneID): GridCell {
    return this.gridModel.getZone(zone);
  }

  public getAvailableZones(zone: ZoneID): ZoneID[] {
    const { type, color } = this.getZone(zone).piece;
    let newMoves: ZoneID[] = [];
    if (type && color) {
      const possibleMoves = this.pieceModel.getMoves(type, color, zone);
      newMoves = possibleMoves;
      console.log(newMoves);
    }
    return newMoves;
  }

  public validateMove(start: ZoneID, end: ZoneID): Boolean {
    if (
      this.gridModel.getZone(end)?.piece.color ===
      this.gridModel.getZone(start)?.piece.color
    ) {
      return false;
    }
    this.gridModel.updateGrid(start, end);
    return true;
  }
}

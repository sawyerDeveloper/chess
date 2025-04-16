import GridModel, { GridCell } from './GridModel';
import PieceModel, { MoveMatrix } from './PieceModel';

export default class ChessModel {
  private gridModel: GridModel;
  private pieceModel: PieceModel
  private availableZones: GridCell[] = []
  
  constructor() {
    console.info('ChessModel');
    this.gridModel = new GridModel();
    this.gridModel.initGrid();
    this.pieceModel = new PieceModel(this.gridModel.getGrid())
  }

  public getGrid() {
    return this.gridModel.getGrid();
  }

  public getZone(zone: string): GridCell {
    return this.gridModel.getZone(zone);
  }

  public setAvailableZones(zone: string) {
    const pieceType = this.getZone(zone).piece.type
    if(pieceType){
      const possibleMoves = this.pieceModel.getMoves(pieceType, zone, this.getGrid())
      let newMoves : MoveMatrix = possibleMoves

      console.log(newMoves)
    }
  }

  public validateMove(start: string, end: string): Boolean {
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

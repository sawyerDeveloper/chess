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

  public getAvailableZones(zone: string) : string[] {
    const {type, color} = this.getZone(zone).piece
    if(type && color){
      const possibleMoves = this.pieceModel.getMoves(type, color, zone)
      let newMoves : string[] = possibleMoves
      console.log(newMoves)
      return newMoves
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

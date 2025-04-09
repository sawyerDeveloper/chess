import GridModel, { GridCell } from './GridModel';
import PieceModel, { MoveMatrix } from './PieceModel';

export default class ChessModel {
  private gridModel: GridModel;
  private pieceModel: PieceModel
  private availableZones: GridCell[] = []
  
  constructor() {
    console.info('ChessModel');
    this.gridModel = new GridModel();
    this.pieceModel = new PieceModel()
    this.gridModel.initGrid();
  }

  public getGrid() {
    return this.gridModel.getGrid();
  }

  public getZone(id: string): GridCell {
    return this.gridModel.getZone(id);
  }

  public setAvailableZones(zone: string) {
    const piece = this.getZone(zone).piece
    const possibleMoves = this.pieceModel.getMoves(piece, zone)
    let newMoves : MoveMatrix = possibleMoves[0]
    console.log(newMoves)


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

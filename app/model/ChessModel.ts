import GridModel, { GridCell } from './GridModel';

export default class ChessModel {
  private gridModel: GridModel;
  constructor() {
    console.info('ChessModel')
    this.gridModel = new GridModel();
    this.gridModel.initGrid();
  }

  public getGrid(){
    return this.gridModel.getGrid()
  }

  public getZone(id : string) : GridCell | undefined {
    return this.gridModel.getZone(id)
  }

  public validateMove(start: string, end: string): Boolean {
    this.gridModel.updateGrid(start, end)
    return false;
  }
}

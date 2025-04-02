import GridModel from './GridModel';

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

  public validateMove(start: string, end: string): Boolean {
    return false;
  }
}

import GridModel from './GridModel';

export default class ChessModel {
  gridModel: GridModel;
  constructor() {
    this.gridModel = new GridModel();
    this.gridModel.initGrid()
  }

  public validateMove(start: string, end: string): Boolean {
    return false;
  }
}

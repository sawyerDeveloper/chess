import GridModel from '../GridModel';
import { startingGrid } from '../mocks/startingGrid';
describe('GridModel', () => {
  describe('initGrid', () => {
    test('should initialize a grid that matches a static matrix of starting pieces', () => {
      const model = new GridModel();
      model.initGrid();
      expect(model.getGrid()).toStrictEqual(startingGrid);
    });
  });
  describe('updateGrid', () => {
    test('should move a pawn up 1 spot', () => {
      const model = new GridModel();
      model.initGrid();
      model.updateGrid('a2', 'a3');
      startingGrid[2].piece.color = startingGrid[1].piece.color;
      startingGrid[2].piece.type = startingGrid[1].piece.type;
      startingGrid[1].piece.color = null;
      startingGrid[1].piece.type = null;
      expect(model.getGrid()).toStrictEqual(startingGrid);
    });
  });
});

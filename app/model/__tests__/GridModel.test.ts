import GridModel from '../GridModel';
import startingGrid from '../mocks/startingGrid';
describe('GridModel', () => {
  describe('initGrid', () => {
    test('should initialize a grid that matches a static matrix of starting pieces', () => {
      const model = new GridModel();
      model.initGrid();
      expect(model.getGrid()).toStrictEqual(startingGrid);
    });
  });
  describe('updateGrid', () => {
    test('move a pawn up 1 spot', () => {
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
  describe('getZone', () => {
    test('return the zone with id a1 should be a white rook at 0,0', () => {
      const model = new GridModel();
      model.initGrid();
      const zone = model.getZone('a1');
      expect(zone?.id).toBe('a1');
      expect(zone?.piece.color).toBe('white')
      expect(zone?.piece.type).toBe('Rook')
      expect(zone?.x).toBe(0)
      expect(zone?.y).toBe(0)
    });
    test('return the zone with id a2 should be a white pawn at 0,1', () => {
      const model = new GridModel();
      model.initGrid();
      const zone = model.getZone('a2');
      expect(zone?.id).toBe('a2');
      expect(zone?.piece.color).toBe('white')
      expect(zone?.piece.type).toBe('Pawn')
      expect(zone?.x).toBe(0)
      expect(zone?.y).toBe(1)
    });
    test('return the zone with id h7 should be a black pawn at 7,6', () => {
      const model = new GridModel();
      model.initGrid();
      const zone = model.getZone('h7');
      expect(zone?.id).toBe('h7');
      expect(zone?.piece.color).toBe('black')
      expect(zone?.piece.type).toBe('Pawn')
      expect(zone?.x).toBe(7)
      expect(zone?.y).toBe(6)
    });
    test('return the zone with id d8 should be a black queen at 3,7', () => {
      const model = new GridModel();
      model.initGrid();
      const zone = model.getZone('d8');
      expect(zone?.id).toBe('d8');
      expect(zone?.piece.color).toBe('black')
      expect(zone?.piece.type).toBe('Queen')
      expect(zone?.x).toBe(3)
      expect(zone?.y).toBe(7)
    });
    test('return the zone with id d5 should be a null null at 3,7', () => {
      const model = new GridModel();
      model.initGrid();
      const zone = model.getZone('d5');
      expect(zone?.id).toBe('d5');
      expect(zone?.piece.color).toBe(null)
      expect(zone?.piece.type).toBe(null)
      expect(zone?.x).toBe(3)
      expect(zone?.y).toBe(4)
    });
  });
});

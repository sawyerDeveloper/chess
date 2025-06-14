import ChessModel from '../ChessModel';
describe('ChessModel', () => {
  describe('validateMove', () => {
    test('Allow a move against opposite color', () => {
      const model = new ChessModel();
      expect(model.getZone('a7')?.piece.color === 'black');
      model.movePiece('a2', 'a7');
      expect(model.getZone('a7')?.piece.color === 'white');
    });
    test('Disallow a move against same color', () => {
      const model = new ChessModel();
      expect(
        model.getZone('b1')?.piece.color === 'white' &&
          model.getZone('b1')?.piece.type === 'knight'
      );
      expect(
        model.getZone('a2')?.piece.color === 'white' &&
          model.getZone('a2')?.piece.type === 'pawn'
      );
      model.movePiece('a2', 'b1');
      expect(
        model.getZone('b1')?.piece.color === 'white' &&
          model.getZone('b1')?.piece.type === 'knight'
      );
      expect(
        model.getZone('a2')?.piece.color === 'white' &&
          model.getZone('a2')?.piece.type === 'pawn'
      );
    });
  });
});

import { FontAwesome5 } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';

export enum PieceType {
  KING = 'King',
  QUEEN = 'Queen',
  BISHOP = 'Bishop',
  KNIGHT = 'Knight',
  ROOK = 'Rook',
  PAWN = 'Pawn',
  EMPTY = 'Empty',
}

export enum PieceColor {
  WHITE = 'white',
  BLACK = 'black',
}

export type Piece = {
  type: PieceType | null | undefined;
  color: PieceColor | null | undefined;
};

interface PieceViewProps {
  piece: Piece;
  active: Boolean;
}

export default function PieceView({ piece, active }: PieceViewProps) {
  const { type, color } = piece;
  return (
    <View style={styles.container}>
      <FontAwesome5
        style={[
          {
            textShadowColor: color === 'white' ? 'black' : 'white',
            textShadowRadius: 1,
            textShadowOffset: { width: 0.5, height: 0.5 },
          },
        ]}
        name={'chess-' + piece.type?.toLowerCase()}
        size={active ? 65 : 45}
        color={color}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 2,
    paddingBottom: 10,
    minHeight: 60,
    minWidth: 80,
  },
});

import { FontAwesome5 } from '@expo/vector-icons';
import { ColorValue, StyleSheet, Text, View } from 'react-native';

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
    padding: 5,
    minHeight: 60,
    minWidth: 80
  }
});

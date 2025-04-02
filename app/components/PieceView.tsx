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
}

export default function PieceView({ piece }: PieceViewProps) {
  const { type, color } = piece;
  return (
    <View style={styles.container}>
      <FontAwesome5 name='chess' size={20} color={color} />
      <Text style={[styles.label, { color: color as ColorValue }]}>
        {type}
      </Text>
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
    borderWidth: 1,
    borderRadius: 50,
    minHeight: 60,
  },
  label: {
    textAlign: 'center',
    fontSize: 12,
  },
});

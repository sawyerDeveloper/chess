import { FontAwesome5 } from '@expo/vector-icons';
import { Text, View } from 'react-native';

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
  type: PieceType;
  color: PieceColor;
};

interface PieceViewProps {
  piece: Piece;
}

export default function PieceView({ piece }: PieceViewProps) {
  const { type, color } = piece;
  return (
    <View>
      <FontAwesome5 name='chess' size={25} color='black' />
      <Text>{type + ' ' + color}</Text>
    </View>
  );
}

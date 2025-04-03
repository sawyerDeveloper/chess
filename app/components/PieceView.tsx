import { FontAwesome5 } from '@expo/vector-icons';
import { memo } from 'react';
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
  color: PieceColor;
  type: PieceType;
  active: Boolean;
}

function PieceView({ color, type, active }: PieceViewProps) {
  return (
    <View style={styles.container}>
      <FontAwesome5
        style={[
          {
            textShadowColor: color === 'white' ? 'black' : 'white',
            textShadowRadius: active ? 2 : 1,
            textShadowOffset: {
              width: active ? 1.5 : 1,
              height: active ? 1.5 : 1,
            },
          },
        ]}
        name={'chess-' + type?.toLowerCase()}
        size={active ? 70 : 45}
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
    paddingBottom: 15,
    minHeight: 60,
    minWidth: 80,
  },
});

export default memo(PieceView);

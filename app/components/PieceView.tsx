import { FontAwesome5 } from '@expo/vector-icons';
import { memo, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import ZoneContext from './context/ZoneContext';

export enum PieceType {
  KING = 'king',
  QUEEN = 'queen',
  BISHOP = 'bishop',
  KNIGHT = 'knight',
  ROOK = 'rook',
  PAWN = 'pawn',
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
  id: string;
}

function PieceView({ id }: PieceViewProps) {
  const { model, getPressedZone } = useContext(ZoneContext);
  const piece = model.getZone(id)?.piece;
  const active = getPressedZone() === id;
  return (
    <View style={styles.container}>
      {piece.type && (
        <FontAwesome5
          style={[
            {
              textShadowColor: piece?.color === 'white' ? 'black' : 'white',
              textShadowRadius: active ? 2 : 1,
              textShadowOffset: {
                width: active ? 1.5 : 1,
                height: active ? 1.5 : 1,
              },
            },
          ]}
          name={'chess-' + piece?.type}
          size={active ? 70 : 45}
          color={piece?.color}
        />
      )}
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

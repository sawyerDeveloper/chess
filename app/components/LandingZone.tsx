import { Pressable, StyleSheet, Text } from 'react-native';
import PieceView, { Piece } from './PieceView';

export enum LandingZoneColors {
  WHITE = 'white',
  BLACK = 'grey',
}

interface LandingZoneProps {
  gridCoordinates: [number, number];
  piece: Piece;
  color: LandingZoneColors;
}

export default function LandingZone({
  gridCoordinates,
  piece,
  color,
  onPress,
  id,
}: LandingZoneProps) {
  return (
    <Pressable
      style={[styles.container, { backgroundColor: color }]}
      onPress={() => onPress(id)}
    >
      {piece.type && <PieceView onPress={onPress} piece={piece} />}
      <Text>{id}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    borderWidth: 0.5,
  },
});

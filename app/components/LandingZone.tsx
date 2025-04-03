import { Pressable, StyleSheet, Text } from 'react-native';
import PieceView, { Piece } from './PieceView';
import { useContext } from 'react';
import { ZoneContext } from './context/ZoneContext';

export enum LandingZoneColors {
  WHITE = 'lightgrey',
  BLACK = 'grey',
}

interface LandingZoneProps {
  gridCoordinates: [number, number];
  piece: Piece;
  color: LandingZoneColors;
  id: string;
}

export default function LandingZone({
  gridCoordinates,
  piece,
  color,
  id,
}: LandingZoneProps) {
  const zoneContext = useContext(ZoneContext);
  return (
    <Pressable
      style={[styles.container, { backgroundColor: color }]}
      onPress={() => zoneContext.onPress(id)}
    >
      <Text style={styles.label}>{id}</Text>
      {piece.type && (
        <PieceView active={id === zoneContext.getPressedZone()} piece={piece} />
      )}
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
  label: {
    color: 'darkgrey',
    paddingLeft: 2
  }
});

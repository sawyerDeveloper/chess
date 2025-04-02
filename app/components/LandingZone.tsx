import { StyleSheet, Text, View } from 'react-native';
import PieceView, { Piece } from './PieceView';
import { letters } from '../model/GridModel';

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
}: LandingZoneProps) {
  return (
    <View style={[styles.container, {backgroundColor: color}]}>
      {piece && <PieceView piece={piece} />}
      <Text>{letters[gridCoordinates[0] - 1] +''+gridCoordinates[1]}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    width: '100%',
    height: '100%',
  },
});

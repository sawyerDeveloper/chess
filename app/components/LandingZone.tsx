import { Pressable, StyleSheet, Text } from 'react-native';
import PieceView from './PieceView';
import { memo, useContext } from 'react';
import ZoneContext from './context/ZoneContext';

export enum LandingZoneColors {
  WHITE = 'lightgrey',
  BLACK = 'grey',
}

interface LandingZoneProps {
  color: LandingZoneColors;
  id: string;
}

function LandingZone({ color, id }: LandingZoneProps) {
  const zoneContext = useContext(ZoneContext);
  return (
    <Pressable
      style={[styles.container, { backgroundColor: color }]}
      onPress={() => zoneContext.onPress(id)}
    >
      <Text style={styles.label}>{id}</Text>
      <PieceView id={id} />
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
    paddingLeft: 2,
  },
});

export default memo(LandingZone);

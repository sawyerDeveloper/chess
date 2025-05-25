import { Pressable, StyleSheet } from 'react-native';
import PieceView from './Piece';
import { memo, useContext } from 'react';
import ZoneContext from './context/ZoneContext';
import { ZoneID } from '../types/GridTypes';
import ZoneLabel from './ui/ZoneLabel';

export enum LandingZoneColors {
  WHITE = 'lightgrey',
  BLACK = 'grey',
}

interface LandingZoneProps {
  color: LandingZoneColors;
  zone: ZoneID;
}

function LandingZone({ color, zone }: LandingZoneProps) {
  const { availableZones, onPress } = useContext(ZoneContext);
  const avail = availableZones.includes(zone);
  return (
    <Pressable
      style={[styles.container, { backgroundColor: avail ? '#006600' : color }]}
      onPress={() => onPress(zone)}
    >
      <ZoneLabel available={avail} zone={zone} />
      <PieceView zone={zone} />
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

export default memo(LandingZone);

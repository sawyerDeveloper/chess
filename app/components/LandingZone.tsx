import { memo, useContext } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import ZoneContext from './context/zone/ZoneContext';
import PieceView from './Piece';
import ZoneLabel from './ui/ZoneLabel';
import { ZoneID } from '../types/GridTypes';

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
    borderWidth: 0.1,
    borderColor: 'grey',
  },
});

export default memo(LandingZone);

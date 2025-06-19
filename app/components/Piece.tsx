import { FontAwesome5 } from '@expo/vector-icons';
import { memo, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import ZoneContext from './context/zone/ZoneContext';
import { ZoneID } from '../types/GridTypes';

interface PieceProps {
  zone: ZoneID;
}

function Piece({ zone }: PieceProps) {
  const { model, getPressedZone, availableZones } = useContext(ZoneContext);
  const {color, type} = model.getZone(zone)?.piece;
  const textShadowColor = color === 'white' ? 'black' : 'white';
  const opponent = availableZones.includes(zone);
  const active = getPressedZone() === zone || opponent;

  return (
    <View style={styles.container}>
      {type && (
        <FontAwesome5
          style={[
            {
              textShadowColor: textShadowColor,
              textShadowRadius: active ? 2 : 1,
              textShadowOffset: {
                width: active ? 1.5 : 1,
                height: active ? 1.5 : 1,
              },
            },
          ]}
          name={'chess-' + type}
          size={active ? 65 : 45}
          color={color}
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

export default memo(Piece);

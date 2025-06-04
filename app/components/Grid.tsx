import { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import ZoneContext from './context/ZoneContext';
import Row from './ui/Row';
import Column from './ui/Column';
import LandingZone, { LandingZoneColors } from './LandingZone';
import { GridCell, letters } from '../types/GridTypes';

export default function Grid() {
  const { model } = useContext(ZoneContext);

  const ifZone = (row: number, column: number): GridCell | undefined => {
    const zone = model.getGrid().find((zone) => {
      return zone.zone === letters[column - 1] + row;
    });
    return zone;
  };

  const layoutZones = (column: number) => {
    let views = [];
    for (let row: number = 1; row < 9; row++) {
      const zone = ifZone(row, column);
      if (zone) {
        views.push(
          <LandingZone
            zone={zone.zone}
            key={zone.zone}
            color={
              row % 2 == column % 2
                ? LandingZoneColors.WHITE
                : LandingZoneColors.BLACK
            }
          />
        );
      }
    }
    return views.reverse();
  };

  const layoutGrid = () => {
    let views = [];
    for (var column: number = 1; column < 9; column++) {
      views.push(
        <Row key={column + column}>
          <Column>{layoutZones(column)}</Column>
        </Row>
      );
    }
    return views;
  };

  return <View style={styles.container}>{layoutGrid()}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    height: '100%',
    width: '100%',
  },
});

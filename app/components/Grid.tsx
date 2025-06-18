import { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import ZoneContext from './context/zone/ZoneContext';
import Row from './ui/Row';
import Column from './ui/Column';
import LandingZone, { LandingZoneColors } from './LandingZone';
import { GridCell, GridColumn, GridRow, letters } from '../types/GridTypes';

export default function Grid() {
  const { model } = useContext(ZoneContext);

  const ifZone = (row: GridRow, column: GridColumn): GridCell | undefined => {
    const zone = model.getGrid().find((zone) => {
      return zone.zone === letters[column - 1] + row;
    });
    return zone;
  };

  const layoutZones = (column: GridColumn) => {
    let views = [];
    for (let row: GridRow = 1; row < 9; row++) {
      const zone = ifZone(row as GridRow, column);
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
    for (var column: GridColumn = 1; column < 9; column++) {
      views.push(
        <Row key={column + column}>
          <Column>{layoutZones(column as GridColumn)}</Column>
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

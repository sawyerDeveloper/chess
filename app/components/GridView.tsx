import { StyleSheet, View } from 'react-native';
import LandingZone, { LandingZoneColors } from './LandingZone';
import Row from './ui/Row';
import Column from './ui/Column';
import { letters } from '../model/GridModel';
import { useContext } from 'react';
import ZoneContext from './context/ZoneContext';

export default function GridView() {
  const { model } = useContext(ZoneContext);
  const layoutZones = (column: number) => {
    let views = [];
    for (let row: number = 1; row < 9; row++) {
      const zone = model.getGrid().find((zone) => {
        return zone.id === letters[column - 1] + row;
      });
      if (zone) {
        views.push(
          <LandingZone
            id={zone.id}
            key={zone.id}
            gridCoordinates={[row, column]}
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
    flexDirection: 'row',
    height: '100%',
    width: '100%',
  },
});

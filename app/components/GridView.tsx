import { StyleSheet, View } from 'react-native';
import LandingZone, { LandingZoneColors } from './LandingZone';
import Row from './ui/Row';
import Column from './ui/Column';
import { GridCell, letters } from '../model/GridModel';

interface GridViewProps {
  grid: GridCell[];
}

export default function GridView({ grid }: GridViewProps) {

  const layoutZones = (column: number) => {
    let views = [];
    for (let row: number = 1; row < 9; row++) {
      const zone = grid.find((zone) => {
        return zone.id === letters[column - 1] + row;
      });
      views.push(
        <LandingZone
          key={zone && zone.id}
          piece={zone && zone.piece}
          gridCoordinates={[row, column]}
          color={
            row % 2 == (column % 2) ? LandingZoneColors.WHITE : LandingZoneColors.BLACK
          }
        />
      );
    }
    return views;
  };

  const layoutGrid = () => {
    let views = [];

    for (var column: number = 1; column < 9; column++) {
      views.push(
        <Column key={column + column}>
          <Row>{layoutZones(column)}</Row>
        </Column>
      );
    }
    return views;
  };
  return <View style={styles.container}>{layoutGrid()}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
});

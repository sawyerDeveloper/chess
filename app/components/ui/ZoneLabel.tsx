import { ZoneID } from '@/app/model/GridModel';
import { StyleSheet, Text } from 'react-native';

interface ZoneLabeProps {
  available: Boolean;
  zone: ZoneID;
}
export default function ZoneLabel({ available, zone }: ZoneLabeProps) {
  return (
    <Text
      style={[
        styles.container,
        {
          color: available ? 'lightgreen' : 'darkgrey',
        },
      ]}
    >
      {zone}
    </Text>
  );
}

const styles = StyleSheet.create({
  container: {
    color: 'darkgrey',
    paddingLeft: 2,
  },
});

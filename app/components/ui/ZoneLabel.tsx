import { StyleSheet, Text } from 'react-native';
import { ZoneID } from '@/app/types/GridTypes';

interface ZoneLabelProps {
  available: Boolean;
  zone: ZoneID;
}

export default function ZoneLabel({ available, zone }: ZoneLabelProps) {
  return (
    <Text
      style={[
        styles.container,
        {
          color: available ? 'lightgrey' : 'darkgrey',
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

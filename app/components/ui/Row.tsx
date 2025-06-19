import { StyleSheet, View } from 'react-native';
import { ReactNode } from 'react';

interface RowProps {
  children: ReactNode | ReactNode[];
}
const Row = ({ children }: RowProps) => {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});

export default Row
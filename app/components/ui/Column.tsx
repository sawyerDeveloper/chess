import { StyleSheet, View } from 'react-native';
import { ReactNode } from 'react';

interface ColumnProps {
  children: ReactNode | ReactNode[];
}

const Column = ({ children }: ColumnProps) => {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
});

export default Column
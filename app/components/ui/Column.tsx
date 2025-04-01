import { StyleSheet, View } from 'react-native';
import { ReactNode } from 'react';

interface ColumnProps {
  children: ReactNode | ReactNode[];
}

export default function Column({ children }: ColumnProps) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
});

import { StyleSheet, View } from 'react-native';
import { ReactNode } from 'react';

interface RowProps {
  children: ReactNode | ReactNode[];
}

export default function Row({ children }: RowProps) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});

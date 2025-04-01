import { StyleSheet, View } from 'react-native';
import { useState } from 'react';
import GridModel from '../model/GridModel';
import ChessModel from '../model/ChessModel';

export default function Chess() {

  const [model] = useState(new ChessModel())
console.log(model)

  return (
    <View style={styles.container}>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});

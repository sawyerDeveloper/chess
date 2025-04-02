import { ColorValue, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import ChessModel from '../model/ChessModel';
import GridView from './GridView';

export default function Chess() {
  const [model] = useState(new ChessModel());

  return (
    <View style={styles.container}>
      <GridView grid={model.getGrid()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    //width: 300,
    width: '100%',
    height: '100%',
    backgroundColor: 'red'
  },
});

import { StyleSheet, View } from 'react-native';
import { useState } from 'react';
import ChessModel from '../model/ChessModel';
import GridView from './GridView';
import { ZoneContextProvider } from './context/ZoneContextProvider';

export default function Chess() {
  const [model] = useState(new ChessModel());

  return (
    <View style={styles.container}>
      <ZoneContextProvider model={model}>
        <GridView grid={model.getGrid()} />
      </ZoneContextProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});

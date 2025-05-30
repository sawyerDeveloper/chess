import { StyleSheet, View } from 'react-native';
import Grid from './Grid';
import ZoneContextProvider from './context/ZoneContextProvider';
import ChessModel from '../models/ChessModel';

export default function Chess() {
  return (
    <ZoneContextProvider model={new ChessModel()}>
      <View style={styles.container}>
        <Grid />
      </View>
    </ZoneContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    paddingLeft: 50,
    paddingRight: 50,
    paddingTop: 20,
    paddingBottom: 30,
    minHeight: 720,
    maxHeight: 720,
  },
});

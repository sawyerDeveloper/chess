import { StyleSheet, View } from 'react-native';
import GridView from './GridView';
import ZoneContextProvider from './context/ZoneContextProvider';
import ChessModel from '../model/ChessModel';

export default function Chess() {
  return (
    <ZoneContextProvider model={new ChessModel()}>
      <View style={styles.container}>
        <GridView />
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
    paddingTop: 30,
  },
});

import ChessModel from '@/app/model/ChessModel';
import { createContext } from 'react';
const ZoneContext = createContext({
  onPress: (id: string) => {},
  getPressedZone: () => {return new String},
  model: ChessModel.prototype
});

export default ZoneContext
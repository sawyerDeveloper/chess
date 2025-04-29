import ChessModel from '@/app/model/ChessModel';
import { createContext } from 'react';
const ZoneContext = createContext({
  onPress: (zone: string) => {},
  getPressedZone: () => {return new String},
  model: ChessModel.prototype,
  availableZones: ['']
});

export default ZoneContext
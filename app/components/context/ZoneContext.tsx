import ChessModel from '@/app/model/ChessModel';
import { ZoneID } from '@/app/model/GridModel';
import { createContext } from 'react';
const ZoneContext = createContext({
  onPress: (zone: ZoneID) => {},
  getPressedZone: (): ZoneID => {
    return '';
  },
  model: ChessModel.prototype,
  availableZones: [''],
});

export default ZoneContext;

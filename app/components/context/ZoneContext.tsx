import ChessModel from '@/app/model/ChessModel';
import { ZoneID } from '@/app/types/GridTypes';
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

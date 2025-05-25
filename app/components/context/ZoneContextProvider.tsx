import { ReactNode, useCallback, useMemo, useState } from 'react';
import ZoneContext from './ZoneContext';
import ChessModel from '@/app/model/ChessModel';
import { ZoneID } from '@/app/model/GridModel';

interface ZoneContextProviderProps {
  children: ReactNode | ReactNode[];
  model: ChessModel;
}

const ZoneContextProvider = ({ children, model }: ZoneContextProviderProps) => {
  const [pressedZone, setPressedZone] = useState<ZoneID>('');
  const [availableZones, setAvailableZones] = useState<ZoneID[]>([])

  //  TODO implement a decoupled state approach to this method and its passing
  const onPress = useCallback(
    (zone: ZoneID) => {
      if (zone === pressedZone) {
        setPressedZone('');
        setAvailableZones([])
        return;
      }

      if (!pressedZone && model.getZone(zone).piece.type) {
        setAvailableZones(model.getAvailableZones(zone));
        setPressedZone(zone);
      } else {
        setAvailableZones([])
        model.validateMove(pressedZone!, zone);
        setPressedZone('');
      }
    },
    [pressedZone]
  );

  const getPressedZone = useCallback(() => {
    return pressedZone;
  }, [pressedZone]);

  const value = useMemo(
    () => ({ onPress, getPressedZone, model, availableZones }),
    [onPress, getPressedZone, availableZones]
  );
  return <ZoneContext.Provider value={value}>{children}</ZoneContext.Provider>;
};
export default ZoneContextProvider;

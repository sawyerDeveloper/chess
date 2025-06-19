import { ReactNode, useCallback, useMemo, useState } from 'react';
import ZoneContext from './ZoneContext';
import ChessModel from '@/app/models/ChessModel';
import { ZoneID, Zones } from '@/app/types/GridTypes';

interface ZoneContextProviderProps {
  children: ReactNode | ReactNode[];
  model: ChessModel;
}

function ZoneContextProvider({ children, model }: ZoneContextProviderProps) {
  const [pressedZone, setPressedZone] = useState<ZoneID>('');
  const [availableZones, setAvailableZones] = useState<Zones>([]);

  //  TODO implement a decoupled state approach to this method and its passing
  const onPress = useCallback(
    (zone: ZoneID) => {
      if (zone === pressedZone) {
        setPressedZone('');
        setAvailableZones([]);
        return;
      }

      if (!pressedZone && model.getZone(zone).piece.type) {
        setAvailableZones(model.getAvailableZones(zone));
        setPressedZone(zone);
      } else {
        setAvailableZones([]);
        model.movePiece(pressedZone!, zone);
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

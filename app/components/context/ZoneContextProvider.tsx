import { ReactNode, useCallback, useMemo, useState } from 'react';
import ZoneContext from './ZoneContext';
import ChessModel from '@/app/model/ChessModel';

interface ZoneContextProviderProps {
  children: ReactNode | ReactNode[];
  model: ChessModel;
}

const ZoneContextProvider = ({ children, model }: ZoneContextProviderProps) => {
  const [pressedZone, setPressedZone] = useState('');

  const onPress = useCallback(
    (zone: string) => {
      if (zone === pressedZone) {
        setPressedZone('');
        return;
      }

      if (!pressedZone && model.getZone(zone).piece.type) {
        model.setAvailableZones(zone);
        setPressedZone(zone);
      } else {
        model.validateMove(pressedZone, zone);
        setPressedZone('');
      }
    },
    [pressedZone]
  );

  const getPressedZone = useCallback(() => {
    return pressedZone;
  }, [pressedZone]);

  const value = useMemo(
    () => ({ onPress, getPressedZone, model }),
    [onPress, getPressedZone]
  );
  return <ZoneContext.Provider value={value}>{children}</ZoneContext.Provider>;
};
export default ZoneContextProvider;

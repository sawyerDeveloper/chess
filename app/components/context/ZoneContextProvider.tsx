import { ReactNode, useState } from 'react';
import { ZoneContext } from './ZoneContext';
import ChessModel from '@/app/model/ChessModel';

interface ZoneContextProviderProps {
  children: ReactNode | ReactNode[];
}

export const ZoneContextProvider = ({
  children,
}: ZoneContextProviderProps) => {
  const [model] = useState(new ChessModel());
  const [pressedZone, setPressedZone] = useState('');
  const onPress = (zone: string) => {
    if (zone === pressedZone) {
      setPressedZone('');
      return;
    }

    if (!pressedZone && model.getZone(zone)?.piece.type) {
      setPressedZone(zone);
    } else {
      model.validateMove(pressedZone, zone);
      setPressedZone('');
    }
  };

  const getPressedZone = () => {
    return pressedZone;
  };

  return (
    <ZoneContext.Provider value={{ onPress, getPressedZone, model }}>
      {children}
    </ZoneContext.Provider>
  );
};

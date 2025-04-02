import { ReactNode, useState } from 'react';
import { ZoneContext } from './ZoneContext';
import ChessModel from '@/app/model/ChessModel';

interface ZoneContextProviderProps {
  children: ReactNode | ReactNode[];
  model: ChessModel;
}

export const ZoneContextProvider = ({
  children,
  model,
}: ZoneContextProviderProps) => {
  const [pressedZone, setPressedZone] = useState('');
  const onPress = (zone: string) => {
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
    <ZoneContext.Provider value={{ onPress, getPressedZone }}>
      {children}
    </ZoneContext.Provider>
  );
};

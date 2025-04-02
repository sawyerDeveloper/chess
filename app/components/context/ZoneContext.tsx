import { createContext } from 'react';
export const ZoneContext = createContext({
  onPress: (id: string) => {},
  getPressedZone: () => {},
});
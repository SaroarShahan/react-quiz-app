import { createContext } from 'react';

const initAppContextState = {} as AppContextProps;

export const AppContext = createContext(initAppContextState);

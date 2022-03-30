import { createContext, useReducer } from 'react';
import DarkModeReducer from './darkModeReducer';

interface DarkModeContextProps {
  darkMode: boolean;
  dispatch?: any;
}
const INITIAL_STATE = {
  darkMode: false,
};

export const DarkModeContext =
  createContext<DarkModeContextProps>(INITIAL_STATE);

interface DarkModeContextProviderProps {
  children: JSX.Element;
}

export const DarkModeContextProvider = ({
  children,
}: DarkModeContextProviderProps) => {
  const [state, dispatch] = useReducer(DarkModeReducer, INITIAL_STATE);
  return (
    <DarkModeContext.Provider value={{ darkMode: state.darkMode, dispatch }}>
      {children}
    </DarkModeContext.Provider>
  );
};

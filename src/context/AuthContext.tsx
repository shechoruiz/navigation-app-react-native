import React, {useReducer} from 'react';
import {createContext} from 'react';
import {authReducer} from './authReducer';

// Cómo lucirá la información
export interface AuthState {
  isLoggedIn: boolean;
  username?: string;
  favoriteIcon?: string;
}

// Estado inicial
export const authInitialState: AuthState = {
  isLoggedIn: false,
  username: undefined,
  favoriteIcon: undefined,
};

// Interfaz para indicar a React como luce y que expone el context
export interface AuthContextProps {
  authState: AuthState;
  signIn: () => void;
}

// Crear el contexto
export const AuthContext = createContext({} as AuthContextProps);

// Exponer el proveedor de informacion
export const AuthProvider = ({children}: any) => {
  const [authState, dispatch] = useReducer(authReducer, authInitialState);
  return (
    <AuthContext.Provider
      value={{
        authState,
        signIn: () => {},
      }}>
      {children}
    </AuthContext.Provider>
  );
};

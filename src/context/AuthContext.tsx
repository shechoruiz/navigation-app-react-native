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
  changeFavoriteIcon: (iconName: string) => void;
  signOut: () => void;
  asignUsername: (userName: string) => void;
}

// Crear el contexto
export const AuthContext = createContext({} as AuthContextProps);

// Exponer el proveedor de informacion
export const AuthProvider = ({children}: any) => {
  const [authState, dispatch] = useReducer(authReducer, authInitialState);

  const signIn = () => {
    dispatch({type: 'signIn'});
  };

  const changeFavoriteIcon = (iconName: string) => {
    dispatch({type: 'changeFavIcon', payload: iconName});
  };

  const signOut = () => {
    dispatch({type: 'signOut'});
  };

  const asignUsername = (userName: string) => {
    dispatch({type: 'asignUsername', payload: userName});
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        signIn,
        changeFavoriteIcon,
        signOut,
        asignUsername,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

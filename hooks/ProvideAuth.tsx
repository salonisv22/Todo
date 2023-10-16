import React, {createContext, useContext} from 'react';
import useAuthHook from './useAuthHook';

export const loginContext = createContext({});

export function ProvideAuth({children}: any) {
  const {user, signin, isSignedin} = useAuthHook();

  return (
    <loginContext.Provider
      value={{
        user: user,
        signin: signin,
        isSignedin: isSignedin,
      }}>
      {children}
    </loginContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(loginContext);
};

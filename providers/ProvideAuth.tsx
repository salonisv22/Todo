import React, {createContext, useContext, useState} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

export const loginContext = createContext({});

export function ProvideAuth({children}: any) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);

  async function signin(data: any) {
    setLoading(true);
    try {
      await AsyncStorage.setItem('username', data.username);
      setUser(data.username);
      console.log('signed in');
    } catch (error: any) {
      setErrors(error.errors);
    }
    setLoading(false);
  }

  async function signout() {
    setLoading(true);
    try {
      await AsyncStorage.removeItem('username');
      setUser(null);
    } catch (error: any) {
      setErrors(error.errors);
    }
    setLoading(false);
  }

  return (
    <loginContext.Provider
      value={{
        user: user,
        signin: signin,
      }}>
      {children}
    </loginContext.Provider>
  );
}

import React, {createContext, useContext, useEffect, useState} from 'react';
import {Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const loginContext = createContext({});

export function ProvideAuth({children}: any) {
  const [user, setUser] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);

  async function getUserFromAsync() {
    setLoading(true);
    const response = await AsyncStorage.getItem('username');
    setUser(response);
    setLoading(false);
  }

  useEffect(() => {
    getUserFromAsync();
  }, []);

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
        signout: signout,
      }}>
      {loading ? <Text>Loading...</Text> : children}
    </loginContext.Provider>
  );
}

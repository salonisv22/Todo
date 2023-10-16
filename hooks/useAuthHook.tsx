import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

function useAuthHook() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);

  async function signin(data: any) {
    setLoading(true);
    try {
      await AsyncStorage.setItem('username', data.username);
      setUser(data.username);
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

  return {user, loading, errors, signin, signout};
}

export default useAuthHook;

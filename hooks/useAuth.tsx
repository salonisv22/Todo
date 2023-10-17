import {useContext} from 'react';
import {loginContext} from '../providers/ProvideAuth';

const useAuth = () => {
  return useContext(loginContext);
};

export default useAuth;

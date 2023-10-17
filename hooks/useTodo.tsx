import {useContext} from 'react';
import {todoContext} from '../providers/ProvideTodo';

const useTodo = () => {
  return useContext(todoContext);
};

export default useTodo;

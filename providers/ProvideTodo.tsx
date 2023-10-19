import React, {createContext, useContext, useState} from 'react';
import axios from 'axios';
export const todoContext = createContext({});

const url = 'https://todo.mukulsingh.in/api/';

export function ProvideTodo({children}: any) {
  // const [todo, setTodo] = useState<string>("");
  type FormValues = {
    title: string;
    description: string;
  };
  const [todoList, setTodoList] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState('');
  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Host: 'todo.mukulsingh.in',
    },
  };
  async function getTodoList() {
    setLoading(true);
    try {
      const response = await axios.get(url, config);
      console.log('fetched list');
      setTodoList(await response.data);
    } catch (error: any) {
      setErrors(JSON.stringify(error));
      console.log('error' + JSON.stringify(error) + error);
    }
    setLoading(false);
  }

  async function getTodoItem(id: number) {
    setLoading(true);
    try {
      const response = await axios.get(url + `${id}/`);
      console.log('fetched item');
      return response.data;
    } catch (error: any) {
      setErrors(JSON.stringify(error));
      console.log('error' + JSON.stringify(error));
    }
    setLoading(false);
  }

  async function createTodoItem(data: any) {
    setLoading(true);
    try {
      await axios.post(url, data);
      setTodoList([...todoList, {id: data.id, title: data.title}]);
      console.log('updated list');
    } catch (error: any) {
      console.log('error create' + error);
      setErrors(JSON.stringify(error));
    }
    setLoading(false);
  }

  async function removeTodoItem(id: number) {
    setLoading(true);
    try {
      await axios.delete(url + `${id}/`);
      console.log('removed item');
      setTodoList(todoList.filter(item => item.id !== id));
    } catch (error: any) {
      setErrors(JSON.stringify(error));
      console.log(' delete' + error);
    }
    setLoading(false);
  }

  async function updateTodoItem(id: number, data: FormValues) {
    setLoading(true);
    try {
      await axios.put(url + `${id}/`, data);
      setTodoList(
        todoList.map(item => {
          if (item.id == id) {
            return {...item, title: data.title, description: data.description};
          }
          return item;
        }),
      );
    } catch (error: any) {
      setErrors(JSON.stringify(error));
      console.log('error update' + error);
    }
    setLoading(false);
  }

  return (
    <todoContext.Provider
      value={{
        loading: loading,
        errors: errors,
        todoList: todoList,
        getTodoList: getTodoList,
        getTodoItem: getTodoItem,
        createTodoItem: createTodoItem,
        removeTodoItem: removeTodoItem,
        updateTodoItem: updateTodoItem,
      }}>
      {children}
    </todoContext.Provider>
  );
}

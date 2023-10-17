import React, {createContext, useContext, useState} from 'react';
import axios from 'axios';
export const todoContext = createContext({});

const url = 'https://todo.mukulsingh.in/api/';

export function ProvideTodo({children}: any) {
  // const [todo, setTodo] = useState<string>("");
  const [todoList, setTodoList] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);

  async function getTodoList() {
    setLoading(true);
    try {
      const response = await axios.get(url);
      console.log('fetched list');
      setTodoList(response.data);
    } catch (error: any) {
      setErrors(error.errors);
      console.log('error' + JSON.stringify(error));
    }
    setLoading(false);
  }

  async function getTodoItem(id: number) {
    setLoading(true);
    try {
      const response = await axios.get(url + `/${id}/`);
      return response.data;
    } catch (error: any) {
      setErrors(error.errors);
      console.log('error' + JSON.stringify(error));
    }
    setLoading(false);
  }

  async function createTodoItem(data: any) {
    setLoading(true);
    try {
      const response: any[] = await axios.post(url, data);
      setTodoList([...todoList, {id: data.id, title: data.title}]);
      console.log('updated list');
    } catch (error: any) {
      console.log('error create' + error);
      setErrors(error.errors);
    }
    setLoading(false);
  }

  async function removeTodoItem(id: number) {
    setLoading(true);
    try {
      const response = await axios.delete(url + `/${id}/`);
      setTodoList(todoList.filter(item => item.id !== id));
    } catch (error: any) {
      setErrors(error.errors);
      console.log(' delete' + error);
    }
    setLoading(false);
  }

  async function updateTodoItem(id: number, data: JSON) {
    setLoading(true);
    try {
      const response = await axios.put(url + `/${id}/`, data);
    } catch (error: any) {
      setErrors(error.errors);
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
import {useState} from 'react';
import {createContext} from 'react';

const TaskContext = createContext();

export const TaskProvider = ({children}) => {
  const [tasks, setTasks] = useState([]);

  const addTask = text => {};
};

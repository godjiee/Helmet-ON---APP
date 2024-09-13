import React, {createContext, useState, useContext} from 'react';

const FormContext = createContext();

export const FormProvider = ({children}) => {
  const [tasks, setTasks] = useState([]);

  const addTask = task => {
    setTasks([...tasks, {...task, id: Date.now()}]);
  };

  const removeTask = taskId => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <FormContext.Provider value={{tasks, addTask, removeTask}}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => useContext(FormContext);

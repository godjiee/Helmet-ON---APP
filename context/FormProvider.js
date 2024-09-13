import React, { createContext, useState, useContext } from 'react';

const FormContext = createContext();

export const useFormContext = () => useContext(FormContext);

export const FormProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      icon: 'silverware-fork-knife',
      title: 'Fazer o almoço',
      status: 'done',
      description: 'description',
      type: 'food',
      options: '',
    },
    {
      id: 2,
      icon: 'dumbbell',
      title: 'Ir ao ginásio',
      status: 'todo',
      description: 'description',
      type: 'exercise',
      options: '',
    },
    {
      id: 3,
      icon: 'xml',
      title: 'sssd',
      status: 'done',
      description: 'description',
      type: 'code',
      options: '',
    },
  ]);

  const addTask = (task) => {
    const newTask = { ...task, id: tasks.length + 1 }; 
    setTasks([...tasks, newTask]);
  };

  const removeTask = taskId => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };
  return (
    <FormContext.Provider value={{ tasks, addTask, removeTask }}>
      {children}
    </FormContext.Provider>
  );
};

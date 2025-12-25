import React, { createContext, useContext, useState, useEffect } from 'react';

// 1. Create the Context
const TaskContext = createContext();

// 2. Create the Provider Component
export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const addTask = (text) => {
    setTasks([...tasks, { id: Date.now(), text, completed: false }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask, toggleTask, darkMode, setDarkMode }}>
      {children}
    </TaskContext.Provider>
  );
};

// 3. Custom Hook (PascalCase to satisfy Vite Fast Refresh)
// ... (rest of your TaskProvider code)

// Ensure this EXACT line is at the bottom:
export const useTasks = () => useContext(TaskContext);

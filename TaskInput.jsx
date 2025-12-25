import { useState } from 'react';
import { useTasks } from '../store/taskContextLogic';
export default function TaskInput() {
  const [text, setText] = useState('');
  const { addTask } = useTasks();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTask(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)}
        className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="What needs to be done?"
      />
      <button 
        type="submit"
        className="w-full sm:w-auto px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow transition-all active:scale-95"
      >
        Add Task
      </button>
    </form>
  );
}

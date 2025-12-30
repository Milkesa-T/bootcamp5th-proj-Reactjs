import { useTasks } from '../store/taskContext';
export default function TaskItem({ task }) {
  const { deleteTask, toggleTask } = useTasks();

  return (
    <li className="flex items-center justify-between p-4 transition-colors hover:bg-gray-50 dark:hover:bg-gray-700/50">
      <div className="flex items-center gap-4">
        <input 
          type="checkbox" 
          checked={task.completed} 
          onChange={() => toggleTask(task.id)} 
          className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
        />
        <span className={`text-base transition-all ${
          task.completed 
            ? 'line-through text-gray-400 italic' 
            : 'text-gray-900 dark:text-gray-100'
        }`}>
          {task.text}
        </span>
      </div>
      <button 
        onClick={() => deleteTask(task.id)}
        className="px-3 py-1 text-sm font-medium text-red-600 bg-red-50 rounded-md hover:bg-red-100 dark:bg-red-900/20 dark:text-red-400 dark:hover:bg-red-900/40 transition-colors"
      >
        Delete
      </button>
    </li>
  );
}

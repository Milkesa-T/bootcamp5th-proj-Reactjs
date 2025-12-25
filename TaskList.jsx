import { useTasks } from '../store/taskContextLogic';import TaskItem from './TaskItem';

export default function TaskList() {
  const { tasks } = useTasks();

  return (
    <div className="mt-4">
      {tasks.length === 0 ? (
        <p className="text-center text-gray-500 dark:text-gray-400 py-10">
          No tasks yet. Add one above!
        </p>
      ) : (
        <ul className="bg-white dark:bg-gray-800 rounded-lg shadow-sm divide-y divide-gray-200 dark:divide-gray-700">
          {tasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </ul>
      )}
    </div>
  );
}

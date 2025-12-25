import { useTasks } from '../store/taskContext'; // Must have { }

export default function Stats() {
  const { tasks } = useTasks();
  const completed = tasks.filter(t => t.completed).length;

  return (
    <div className="max-w-xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow mt-10">
      <h2 className="text-2xl font-bold mb-4 dark:text-white text-center">Statistics</h2>
      <div className="space-y-4 dark:text-gray-200">
        <p className="flex justify-between">Total Tasks: <span>{tasks.length}</span></p>
        <p className="flex justify-between">Completed: <span className="text-green-500">{completed}</span></p>
        <p className="flex justify-between">Remaining: <span className="text-red-500">{tasks.length - completed}</span></p>
      </div>
    </div>
  );
}

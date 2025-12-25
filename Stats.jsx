import { useTasks } from '../store/taskContext';

export default function Stats() {
  const { tasks } = useTasks();
  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;

  return (
    <main className="max-w-2xl mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Task Statistics</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-4 bg-blue-100 dark:bg-blue-900 rounded">Total: {total}</div>
        <div className="p-4 bg-green-100 dark:bg-green-900 rounded">Completed: {completed}</div>
        <div className="p-4 bg-yellow-100 dark:bg-yellow-900 rounded">Remaining: {total - completed}</div>
      </div>
    </main>
  );
}

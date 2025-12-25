import { Link } from 'react-router-dom';
import { useTasks } from '../store/taskContextLogic';
export default function Header() {
  const { darkMode, setDarkMode } = useTasks();
  return (
    <header className="flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-800 shadow-md">
      <h1 className="text-2xl font-bold dark:text-white">Task Tracker</h1>
      <nav className="space-x-4">
        <Link to="/" className="dark:text-gray-300">Home</Link>
        <Link to="/stats" className="dark:text-gray-300">Stats</Link>
        <button 
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded bg-gray-300 dark:bg-gray-600"
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
      </nav>
    </header>
  );
}

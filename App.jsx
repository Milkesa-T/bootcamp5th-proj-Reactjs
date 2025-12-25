// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TaskProvider } from './store/taskContext';
import Header from './components/Header';
import Home from './pages/Home';
import Stats from './pages/Stats';

function App() {
  return (
    /* TaskProvider MUST wrap everything that uses the task state */
    <TaskProvider> 
      <Router>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
          <Header />
          <main className="container mx-auto p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/stats" element={<Stats />} />
            </Routes>
          </main>
        </div>
      </Router>
    </TaskProvider>
  );
}

export default App;

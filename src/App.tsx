import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FocusHub from './pages/focus/Hub';
import Research from './pages/focus/Research';
import Projects from './pages/focus/Projects';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/focus" element={<FocusHub />} />
      <Route path="/focus/research" element={<Research />} />
      <Route path="/focus/projects" element={<Projects />} />
    </Routes>
  );
}

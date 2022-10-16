import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';

export const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
};

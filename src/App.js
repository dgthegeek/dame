import './App.css';
import HomePage from './components/home/Home';
import Inscription from './components/inscription/inscription';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="inscription" element={<Inscription />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage';
import PeliculasPage from './pages/PeliculasPage';

function App() {
  return (
    <BrowserRouter> 
    <Routes>
      <Route path='/' element={<HomePage/>} /> 
      <Route path='/peliculas' element={<PeliculasPage/>}/> 
    </Routes> 
  </BrowserRouter>

  );
}

export default App;

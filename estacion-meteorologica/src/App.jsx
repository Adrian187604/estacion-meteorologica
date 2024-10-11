import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../src/styles/App.css';
import Login from './components/Login';
import Registro from './components/Registro';
import HomePage from './pages/HomePage';
import DatosPage from './pages/DatosPage';
import EstadisticasPage from './pages/EstadisticasPage';
import LayoutWithNavBar from './components/Layouth';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='registro' element={<Registro />} />

        <Route
          path='/home'
          element={
            <LayoutWithNavBar>
              <HomePage />
            </LayoutWithNavBar>
          }
        />
        <Route
          path='/datos'
          element={
            <LayoutWithNavBar>
              <DatosPage />
            </LayoutWithNavBar>
          }
        />
        <Route
          path='/estadisticas'
          element={
            <LayoutWithNavBar>
              <EstadisticasPage />
            </LayoutWithNavBar>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';

const NavBar = () => {
    const listaRutas = [
        { path: '/home', pathName: 'Mapa' },
        { path: '/datos', pathName: 'Datos Meteorologicos' },
        { path: '/estadisticas', pathName: 'Estadisticas' }
    ];

    return (
        <div className="navbar-container">
            <nav className="navbar">
                <div className="navbar-logo">
                    <h1>Estacion </h1>
                </div>
                <ul className="navbar-links">
                    {listaRutas.map((ruta, index) => (
                        <li key={index} className="navbar-item">
                            <Link to={ruta.path} className="navbar-link">
                                {ruta.pathName}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="navbar-logout">
                    <Link to="/">
                        <button>Cerrar Sesión</button>
                    </Link>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;

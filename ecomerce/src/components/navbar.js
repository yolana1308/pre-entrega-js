import React from 'react';
import CartWidget from './CartWidget';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Chef Course</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Cursos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contacto</a>
                        </li>
                    </ul>
                    <CartWidget />
                </div>
            </div>
        </nav>
    );
};

export default NavBar;

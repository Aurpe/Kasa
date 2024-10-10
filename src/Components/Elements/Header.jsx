import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Images/Logo_Kasa.png';

export default function Header() {
    return (
        <header>
            <h1>
                <img src={logo} alt="logo Kasa" className="logoKasa" />
            </h1>
            <nav className='Navbar'>
                <Link to="/" className="nav-link">Accueil</Link>
                <Link to="/apropos" className="nav-link">À propos</Link>
            </nav>
        </header>
    );
}




import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header>
            <h1>KASA</h1>
            <nav>
            <Link to= "/">Accueil</Link>
            <Link to= "/">à propos</Link>  
            </nav>

        </header>
    )
}



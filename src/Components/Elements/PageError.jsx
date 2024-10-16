import React from 'react';



export default function PageError() {
    return (
        <div className='Error'>
            <p className='title'>404</p>
            <p className='Subtitle'> <span>Oups! la page que </span> 
                <span>vous demandez n'existe pas</span> </p>
            <a href="/" className='BackHomePage'> Retourner sur la page d'accueil </a>
        </div>
    )
};

import React from 'react';



export default function PageError() {
    return (
        <div className='Error'>
            <p className='title'>404</p>
            <p className='Subtitle'>Oups! la page que vous demandez n'existe pas </p>
            <a href="/" className='BackHomePage'> Retourner sur la page d'accueil </a>
        </div>
    )
};

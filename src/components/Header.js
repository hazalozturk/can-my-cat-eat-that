import React from 'react'
import logo from '../assets/mark.png';

function Header() {
    return (
        <header className="App-header">
            {/* TODO: Use a high res cat log0, this is a Figma export */}
            <img src={logo} alt="Cat Logo" className="app-logo" />
            <h1>Catopia!</h1>
        </header>
    )
}

export default Header
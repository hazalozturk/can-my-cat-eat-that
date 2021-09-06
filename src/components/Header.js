import React from 'react'
import logo from '../assets/mark.png';
import '../styles/Header.css';

const goToHome = () => {
    alert('Hire this cat!')
}

function Header() {
    return (
        <header className="App-header">
            {/* TODO: Use a high res cat log0, this is a Figma export */}
            <img src={logo} alt="Cat Logo" className="app-logo" onClick={goToHome} />
            <h1 onClick={goToHome}>Catopia!</h1>
        </header>
    )
}

export default Header
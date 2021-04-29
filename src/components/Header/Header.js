import React from 'react';
import logo from '../../logo.png'

const Header = () => {
    const imgStyle = 
    {
        height : "150px",
        marginBottom : "-14px",
        marginTop : "-9px",  
    }
    return (
        <div>
            <div className = "d-flex justify-content-center">
                <img style={imgStyle} src={logo} alt="" />
            </div>
            <nav className="pr-5 d-flex justify-content-end navbar navbar-dark bg-light border rounded">
                <a className="nav-link" href="/home">Home</a>
                <a className="nav-link"  href="/generatedPlayer">Generated Player</a>
                <a className="nav-link" href="/contact">Contact us</a>
            </nav>
        </div>
    );
};

export default Header;
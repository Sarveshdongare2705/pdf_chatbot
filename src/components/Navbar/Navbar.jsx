import React from "react";
import './navbar.scss';
import { Link } from "react-router-dom";

const Navbar = () =>{
    return(
        <div className="Navbar">
            <Link to='/' className="logo">PDF Insights.</Link>
            <div className="menu">
                <Link to='/' className="icon">Home</Link>
                <Link to='/about' className="icon">About</Link>
            </div>
            <div className="menu">
            <Link to='/signin'><button className="signin">Login</button></Link>
            <div className="user"><img src="https://plus.unsplash.com/premium_photo-1669882305273-674eff6567af?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fHww" alt="" /></div>
            </div>
        </div>
    );
}

export default Navbar;
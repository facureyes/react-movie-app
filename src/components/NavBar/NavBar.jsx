import {React, useState} from 'react';
import logo from '../../assets/logo192.png'
import './NavBar.css'


const CustomNavBar = props => {

    const handleInput = event => {
        const inp = event.target.value;
        props.onSearch(inp);
        event.preventDefault();
    }

    return (
        <nav className="NavBar">
            <img src={logo} alt="Brand Logo" />
            <h1>movies.</h1> 

            <div>
                <input type="text" placeholder="Search a movie..." value={props.searchTerm} autoFocus={true} onChange={handleInput}></input>
            </div>
        </nav>
    );
}

export default CustomNavBar;

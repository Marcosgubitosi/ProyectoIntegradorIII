import React from 'react';
import Navbar from '../Navbar/Navbar';
import "./Header.css"


function Header(){
        return (
            <header>
                <nav className='nav'>
                    <Navbar/> 
                </nav>
            </header>
        )
    }


export default Header
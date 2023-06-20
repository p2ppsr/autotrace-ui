import React from 'react'
import { NavLink } from 'react-router-dom'
import './header-style.css'

const Header = () => {
    return (
        <div className='header'>
            <div className='logo'>
                <img src='/images/autoTraceLogo.png' alt='AutoTrace Logo' />
            </div>
            <NavLink className='item' to='/'>Home</NavLink>
            <NavLink className='item' to='/Trace'>Trace</NavLink>
            <NavLink className='item' to='/Register'>Register</NavLink>
            <NavLink className='item' to='/Transfer'>Transfer</NavLink>
            <NavLink className='item' to='/Receive'>Receive</NavLink>
        </div>
    )
}

export default Header
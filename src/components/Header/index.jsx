import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div className='Header'>
            <div className='nav'>
                <ul>
                    <li>
                        <NavLink to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/About'>About</NavLink>
                    </li>
                    <li>
                        <NavLink to='/Trace'>Trace</NavLink>
                    </li>
                    <li>
                        <NavLink to='/Register'>Register</NavLink>
                    </li>
                    <li>
                        <NavLink to='/Transfer'>Transfer</NavLink>
                    </li>
                    <li>
                        <NavLink to='/Receive'>Receive</NavLink>
                    </li>
                </ul>
            </div>
            {/* 
                logo
                navigation
                link to your cars
            */}
        </div>
    )
}

export default Header
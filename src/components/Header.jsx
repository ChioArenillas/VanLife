import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import loginIcon from '../assets/images/avatarIcon.png'

export default function Header() {

    return (
        <header>
            <Link className="site-logo" to="/">#VANLIFE</Link>
            <nav>
                <NavLink
                    to="vans"
                    className={({ isActive }) => isActive ? "active-link" : null}>
                    Vans
                </NavLink>
                <NavLink
                    to="about"
                    className={({ isActive }) => isActive ? "active-link" : null}>
                    About
                </NavLink>
                <Link
                    to="host"
                    className='login-link'>
                    <img src={loginIcon} className='login-icon' />
                </Link>
            </nav>
        </header>
    )
}

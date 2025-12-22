import React from 'react'
import './Header.css'
import { NavLink } from 'react-router'
import { MdNightlight } from "react-icons/md";
import { BsSunFill } from "react-icons/bs";



export default function Header({ handleThemeChange }) {
    return (
        <div className='wrapper'>
            <header className='blog-header'>
                <NavLink className='blog-header-anchor' to={'/'} >Home</NavLink>
                <NavLink className='blog-header-anchor' to={'/about'}>About</NavLink>
                <NavLink className='blog-header-anchor' to={'/contact'} >Contact</NavLink>
                <div onClick={handleThemeChange} className="theme-switch">
                    <div className="circle"></div>
                    <BsSunFill className='sun' />
                    <MdNightlight className='moon' />
                </div>
            </header>
        </div>
    )
}

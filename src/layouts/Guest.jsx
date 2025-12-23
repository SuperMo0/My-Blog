import React from 'react'
import Header from '../Components/Header/Header'
import { Outlet } from 'react-router'

export default function Guest({ handleThemeChange }) {
    return (
        <>
            <Header handleThemeChange={handleThemeChange}></Header>
            <Outlet></Outlet>
        </>

    )
}

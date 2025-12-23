import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router';
import { createContext } from 'react';

export const AuthContext = createContext();

export default function AuthProvider({ handleThemeChange }) {
    const [admin, setAdmin] = useState(null);
    const [token, setToken] = useState(null);

    useEffect(() => {
        handleThemeChange(true);
        let token = localStorage.getItem('token');
        if (!token) return;
        let data = token.split('.');
        data = data[1];
        data.replace(/\-/g, '+');
        data.replace(/\_/g, '/');
        data = atob(data);
        setAdmin(JSON.parse(data));
    }, [token])

    function login(token) {
        localStorage.setItem('token', token);
        setToken(token);
    }

    function logout(token) {
        localStorage.removeItem('token');
        setAdmin(null);
        setToken(null);
    }


    return (
        <AuthContext value={{ login, logout, admin }}>
            <Outlet></Outlet>
        </AuthContext >
    )
}

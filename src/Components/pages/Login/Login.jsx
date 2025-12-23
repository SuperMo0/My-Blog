import React from 'react'
import './Login.css'
import { useContext } from 'react'
import { AuthContext } from '../../../Auth/AuthProvider'
import api from './../../../utils/Api.js'
import { useState } from 'react'
import { useNavigate } from 'react-router'

export default function Login() {
    const { login } = useContext(AuthContext);
    const [message, setMessage] = useState(null);
    const navigate = useNavigate();


    async function handleLoginSubmit(e) {
        e.preventDefault();
        let form = e.target;
        let object = Object.fromEntries(new FormData(form).entries());
        let [res, ok] = await api('/admin/login', { method: 'post', body: JSON.stringify(object) });
        if (!ok) {
            setMessage(res.message);
            return;
        }
        login(res.token);
        navigate('/admin/dashboard');
    }

    return (
        <div className="wrapper">
            <div className="page">
                <form className='login-form' onSubmit={handleLoginSubmit}>
                    <p>{message}</p>
                    <input name='email' required className='login-input' placeholder='Email' type="email" />
                    <input name='password' required className='login-input' placeholder='Password' type="password" />
                    <button type='submit'>Login</button>
                </form>
            </div>
        </div>
    )
}

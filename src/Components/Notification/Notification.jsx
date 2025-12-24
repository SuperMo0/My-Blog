import React from 'react'
import './Notification.css'

export default function Notification({ message }) {
    return (
        <div className='notification'>
            <p>{message}</p>
        </div>
    )
}

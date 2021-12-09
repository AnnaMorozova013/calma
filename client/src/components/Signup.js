import React, { useState } from 'react'
import { signup } from '../services/auth'

export default function Signup() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = e => { 
        e.preventDefault();
        console.log(username, password)

        signup(username, password)
        .then(response => {
            console.log(response);
            if (response.message) {
                //reset form
                setUsername('');
                setPassword('');
                //set message
                setMessage(response.message)
            } else {
                //user is correctly signed up
                //add user to state of App.js
                
                //redirect to the welcome page
            }

        })
        .catch(err => console.log(err))
    }

    return (
        <>
            <h3>Signup</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor='username'>Username: </label>
                <input
                    type='text'
                    name='username'
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />

                <label htmlFor='password'>Password: </label>
                <input
                    type='password'
                    name='password'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <button>Sign Up</button>
                {message && (
                    <h3>{message}</h3>
                )}
            </form>
        </>

    )
}

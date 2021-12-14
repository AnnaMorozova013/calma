import React, { useState } from 'react'
import { signup } from '../services/auth'
import Login from '../components/Login'
import { useNavigate } from 'react-router-dom'

export default function Signup(props) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')

    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault();

        signup(username, password)
            .then(response => {

                if (response.message) {
                    //reset form
                    setUsername('');
                    setPassword('');
                    //set message
                    setMessage(response.message)
                } else {
                    navigate('/welcome')
                }

            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <h3>Sign up</h3>
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
                <button type='submit'>Sign up</button>
                {message && (
                    <h3>{message}</h3>
                )}
                </form>
            < Login />
        </>

    )
}

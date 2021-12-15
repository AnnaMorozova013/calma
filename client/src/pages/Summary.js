import React from 'react'
import { Link } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import { logout } from '../services/auth'


export default function Summary(props) {
    const handleLogout = () => {
        logout()
            .then(() => {
                props.setUser(null)
            }
            )
    }
return (
    <div>
        <h1>Hey you! </h1>
        <Link to='/'>
            <Button onClick={() => handleLogout()}>
                Logout
            </Button>
        </Link>
    </div>
)
}

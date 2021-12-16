import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import { logout } from '../services/auth';
import axios from 'axios'


export default function Summary(props) {
    const handleLogout = () => {
        logout()
            .then(() => {
                props.setUser(null)
            }
            )
    }


    //state for info from DB
    const [objectArray, setObjectArray] = useState([])

    //function which calls all the information from data
    function showSummary() {
        axios
            .post('/userSummary')
            .then((response) => {
                console.log(response.data.foundInDB)
                setObjectArray(response.data.foundInDB)
            })
            .catch((err) => console.log(err.data))
    }
    showSummary()

    return (

        <div>
            <h1>Hey you! </h1>
            <Link to='/'>
                <Button onClick={() => handleLogout()}>
                    Logout
                </Button>
            </Link>
                {objectArray.map((element) => ( 
                    <div> 
            <p> Your recap from <b>{element.createdAt}</b> </p>
            <p> You felt {element.mood} </p>
            <p> You ranked your sleep quality {element.sleep}/5</p>
            <p> You ranked your social life {element.social}/5</p>
            <p> You ranked your eating habits {element.food}/5</p>
            <p> You ranked your sport activities {element.sport}/5</p>
            <p> You ranked your work {element.sport}/5</p>
            <p> Here is your journal entry: <i>{element.journal}</i></p> 
            </div> ))}
            
        </div>
    )
}

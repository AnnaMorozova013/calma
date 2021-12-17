import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import logo from '../images/logo.png'

export default function Journal() {

    const [text, setText] = useState('')

    const onChangeHandler = (e) => {
        setText(e.target.value)
    }

    //create button handle 
    const navigate = useNavigate()
    const handleAddJournal = (e) => {
        e.preventDefault(e);
        axios
            .post('/addJournal', { text })
            //each time button clicked, info sent to server (/addJournal)
            .then((response) => {
            })
        navigate('/summary')
    }

    return (
        <div>
        <img className='logo' src={logo} alt='' />
        <div id='wrapper'>
            <form id='paper' method='get'>
                <textarea placeholder='Share your thoughts...' onChange={onChangeHandler} value={text} id='text' name='text' rows='8' style={{ 'overflow': 'hidden', 'wordWrap': 'break-word', 'resize': 'none', 'height': '400px', 'width': '300px' }} /> <br></br>
                <Link to='/summary'>
                    <Button  className="button-55" role="button" onClick={handleAddJournal}>
                        Submit
                    </Button>
                </Link>
            </form>
        </div>
        </div>
    )
}

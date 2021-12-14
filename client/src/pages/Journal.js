import React from 'react'
import { Link } from 'react-router-dom';
import Button from "react-bootstrap/Button";

export default function Journal() {
    return (
        <div id='wrapper'>
            <form id='paper' method='get' action=''>
                <textarea placeholder='Share your thoughts...' id='text' name='text' rows='8' style={{'overflow': 'hidden', 'wordWrap': 'break-word', 'resize': 'none', 'height': '400px', 'width':'300px'}} /> <br></br>
            <input id="button" type="submit" value="Create"/>
            </form>
        </div>
    )
}

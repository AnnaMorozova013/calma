import React from 'react'
import MoodEmojis from '../components/MoodEmojis'
import logo from '../images/logo.png'

export default function Mood() {

    return (
        <div>
        <img className='logo' src={logo} alt='' />
            < MoodEmojis />
        </div>
    )
}



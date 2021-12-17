import React from 'react'
import SurveyRating from '../components/SurveyRating'
import logo from '../images/logo.png'

export default function Survey() {
    return (
        <div>
        <img className='logo' src={logo} alt='' />
            < SurveyRating />
        </div>
    )
}

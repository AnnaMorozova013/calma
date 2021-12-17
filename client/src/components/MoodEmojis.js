import React, { useState } from 'react';
import contentBW from '../images/content-bw.png'
import contentColor from '../images/content-color.png'
import happyBW from '../images/happy-bw.png'
import happyColor from '../images/happy-color.png'
import sadBW from '../images/sad-bw.png'
import sadColor from '../images/sad-color.png'
import worriedBW from '../images/worried-bw.png'
import worriedColor from '../images/worried-color.png'
import sleepBW from '../images/sleep-bw.png'
import sleepColor from '../images/sleep-color.png'
import { Link } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function MoodEmojis() {

    const [active, setActive] = useState(false)
    const [active1, setActive1] = useState(false)
    const [active2, setActive2] = useState(false)
    const [active3, setActive3] = useState(false)
    const [active4, setActive4] = useState(false)

    const [emotion, setEmotion] = useState('')

    const handleChangeHappy = () => {
        setActive((emoji) => {
            return !emoji
        })
        setActive1(false)
        setActive2(false)
        setActive3(false)
        setActive4(false)
        setEmotion('happy')
    }

    const handleChangeContent = () => {
        setActive1((emoji) => {
            return !emoji
        })
        setActive(false)
        setActive2(false)
        setActive3(false)
        setActive4(false)
        setEmotion('content')
    }

    const handleChangeSleep = () => {
        setActive2((emoji) => {
            return !emoji
        })
        setActive(false)
        setActive1(false)
        setActive3(false)
        setActive4(false)
        setEmotion('sleepy')
    }

    const handleChangeWorried = () => {
        setActive3((emoji) => {
            return !emoji
        })
        setActive(false)
        setActive1(false)
        setActive2(false)
        setActive4(false)
        setEmotion('worried')
    }

    const handleChangeSad = () => {
        setActive4((emoji) => {
            return !emoji
        })
        setActive(false)
        setActive1(false)
        setActive2(false)
        setActive3(false)
        setEmotion('sad')
    }

    //create button handle 
    const navigate = useNavigate()
    const handleAddMood = (e) => {
        e.preventDefault(e);
        const oneEmotion = { emotion }
        axios
            .post('/addMood', oneEmotion)
            //each time button clicked, info sent to server (/addMood)
            .then((response) => {
            })
        navigate('/survey')
    }

    return (
        <>
            <h1>How are you feeling today?</h1>
            <div className='active'>
                {active ? (
                    <img className='active'
                        src={happyColor}
                        alt='happy'
                        onClick={() => handleChangeHappy()}
                    />

                ) : (
                    <img className='inactive'
                        src={happyBW}
                        alt='happy'
                        onClick={() => handleChangeHappy()}
                    />
                )}
                <h3>Happy</h3>
            </div>

            <div className='active'>
                {active1 ? (
                    <img className='active'
                        src={contentColor}
                        alt='content'
                        onClick={() => handleChangeContent()}
                    />
                ) : (
                    <img className='inactive'
                        src={contentBW}
                        alt='content'
                        onClick={() => handleChangeContent()}
                    />
                )}
                <h3>Content</h3>
            </div>

            <div className='active'>
                {active2 ? (
                    <img className='active'
                        src={sleepColor}
                        alt='sleep'
                        onClick={() => handleChangeSleep()}
                    />
                ) : (
                    <img className='inactive'
                        src={sleepBW}
                        alt='sleep'
                        onClick={() => handleChangeSleep()}
                    />
                )}
                <h3>Sleepy</h3>
            </div>

            <div className='active'>
                {active3 ? (
                    <img className='active'
                        src={worriedColor}
                        alt='worried'
                        onClick={() => handleChangeWorried()}
                    />
                ) : (
                    <img className='inactive'
                        src={worriedBW}
                        alt='worried'
                        onClick={() => handleChangeWorried()}
                    />
                )}
                <h3>Worried</h3>
            </div>

            <div className='active'>
                {active4 ? (
                    <img className='active'
                        src={sadColor}
                        alt='sad'
                        onClick={() => handleChangeSad()}
                    />
                ) : (
                    <img className='inactive'
                        src={sadBW}
                        alt='sad'
                        onClick={() => handleChangeSad()}
                    />
                )}
                <h3>Sad</h3>
            </div>
            <div className='moodLink'>
            <Link to='/survey'>
                <Button className="button-55" role="button" onClick={handleAddMood}>
                    Continue
                </Button>
            </Link>
</div>
        </>
    )
}
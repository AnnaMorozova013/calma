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
import Card from 'react-bootstrap/Card'

export default function MoodImages() {

    const [active, setActive] = useState(false)
    const [active1, setActive1] = useState(false)
    const [active2, setActive2] = useState(false)
    const [active3, setActive3] = useState(false)
    const [active4, setActive4] = useState(false)

    const handleChangeHappy = () => {
        setActive((emoji) => {
         return !emoji
         
        })
        setActive1(false)
        setActive2(false)
        setActive3(false)
        setActive4(false)
    }

    const handleChangeContent = () => {
        setActive1((emoji) => {
            return !emoji
        })
        setActive(false)
        setActive2(false)
        setActive3(false)
        setActive4(false)
    }

    const handleChangeSleep = () => {
        setActive2((emoji) => {
            return !emoji
        })
        setActive(false)
        setActive1(false)
        setActive3(false)
        setActive4(false)
    }

    const handleChangeWorried = () => {
        setActive3((emoji) => {
            return !emoji
        })
        setActive(false)
        setActive1(false)
        setActive2(false)
        setActive4(false)
    }

    const handleChangeSad = () => {
        setActive4((emoji) => {
            return !emoji
        })
        setActive(false)
        setActive1(false)
        setActive2(false)
        setActive3(false)
    }
  
    return (
        <>
        <h1>How are you feeling today?</h1>
        <div>
            <Card className='toggle-wrapper'> 
            {active? (
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
            {active1? (
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
            {active2? (
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
             {active3? (
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
            {active4? (
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
            <header>
            <Link to='/survey'>
        <span>Click to continue</span>
  </Link>
  </header>
            </Card>
        </div>
        </>
    )
}
import React from 'react'
import RandomQuote from '../components/RandomQuote'
import { Link } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import logo from '../images/logo.png'


const unsplashimg = {
  src: 'https://source.unsplash.com/1600x900/?nature',
  alt: 'random unsplash image'
};
const current = new Date();
const date = `${current.getDate()}.${current.getMonth() + 1}.${current.getFullYear()}`


export default function Welcome() {
  return (
    <>
    <img className='logo' src={logo} alt='' />
      <div className='randomImage' >
        <img
          src={unsplashimg.src}
          alt={unsplashimg.alt}
        />
      </div>

      <div className="module">
        <header>
          <h2> {date} </h2>
          <h1>  < RandomQuote />
          </h1>
          <Link to='/mood'>
            <Button className="button-55" role="button">
              Start
            </Button>
          </Link>
        </header>
      </div>
    </>
  )
}

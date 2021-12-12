import React from 'react'
import RandomQuote from '../components/RandomQuote'
import { Link } from 'react-router-dom';

const unsplashimg = {
  src: 'https://source.unsplash.com/1600x900/?nature',
  alt: 'random unsplash image'
};
const current = new Date();
const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`


export default function Welcome() {
  return (
    <>
      <div className='randomImage' >
        <img
          src={unsplashimg.src}
          alt={unsplashimg.alt}
        />
      </div>
      <div class="module">
  
  <header>
  <h2>{ date } </h2>
  <h1>  < RandomQuote />
    </h1>
  <Link to='/mood' className="container">
    <div className= "center">
      <div className="btn">
        <svg width="180px" height="30px" viewBox="0 0 180 30" className="border">
          <polyline points="179,1 179,29 1,29 1,1 179,1" className="bg-line" />
          <polyline points="179,1 179,29 1,29 1,1 179,1" className="hl-line" />
        </svg>
        <span>Click to continue</span>
    </div>
  </div>
  </Link>
 </header>
</div>
    </>
  )
}

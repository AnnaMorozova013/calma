import React from 'react'
import RandomQuote from '../components/RandomQuote'

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
  <h1> { date } 
      < RandomQuote />
    </h1>
  </header>
</div>
    </>
  )
}

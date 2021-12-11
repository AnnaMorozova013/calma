import React from 'react'
import RandomQuote from '../components/RandomQuote'

const unsplashimg = {
  src: 'https://source.unsplash.com/1600x900/?nature',
  alt: 'random unsplash image'
};


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
    <h1>
      < RandomQuote />
    </h1>
  </header>
</div>
    </>
  )
}

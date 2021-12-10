import React from 'react'
import RandomQuote from '../components/RandomQuote'

const unsplashimg = {
  src: 'https://source.unsplash.com/1600x900/?nature',
  alt: 'random unsplash image'
};


export default function Welcome() {
  return (
    <div className>
      < RandomQuote />
      <img className='randomImage'
        src={unsplashimg.src}
        alt={unsplashimg.alt}
      />

    </div>
  )
}

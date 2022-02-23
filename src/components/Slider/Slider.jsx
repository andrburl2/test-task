import React from 'react';
import './slider.scss';

export default function Slider(props) {
  const { data, currentElement } = props;

  document.documentElement.style.setProperty('--slider-length', data.length);

  return (
    <div className='slider' style={{transform: `translateX(calc(${currentElement *-100 / data.length}%)`}}>
      {data.map((el, index) => {
        return (
          <div className='slide' key={index}>
            <p className='slide__text'>{el.text}</p>

            <div className='slide__author'>
              <p className='slide__author-text'>{el.name}</p>
              <p className='slide__author-text'>@{el.instagram_username}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
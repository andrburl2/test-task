import React from 'react';
import './feedback.scss';
import FEEDBACK_DATA from '../../data/feedback_data.json';

import Slider from '../Slider/Slider';
import FeedbackButton from './FeedbackButton';

export default function Feedback() {
  const [index, setIndex] = React.useState(0);

  const movePreviuos = () => {
    setIndex(index-1);
  }

  const moveNext = () => {
    setIndex(index+1);
  }

  return (
    <section className='feedback'>

      <div className='feedback__content'>
        <Slider data={FEEDBACK_DATA} currentElement={index} />
      </div>

      <div className='feedback__button-row'>
        <FeedbackButton handleCLick={movePreviuos} title='Previuos' isDisabled={index === 0} />
        <FeedbackButton handleCLick={moveNext}     title='Next'     isDisabled={index === FEEDBACK_DATA.length-1} />
      </div>

      <div className='feedback__eclipse'></div>
    </section>
  )
}
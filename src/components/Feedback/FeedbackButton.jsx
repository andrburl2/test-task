import React from 'react';

export default function FeedbackButton(props) {
  const { handleCLick, title, isDisabled } = props;

  return (
    <button
      className='feedback__button'
      onClick={handleCLick}           /* функция переключающая индекс текущего элемента */
      title={isDisabled ? '' : title} /* если кнопка disabled, то свойство title убирается */
      disabled={isDisabled}           /* isDisabled получает свое значение в зависимости от индекса текущего элемента в Feedback */
    >
    </button>
  )
}
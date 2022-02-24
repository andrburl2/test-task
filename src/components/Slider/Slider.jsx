import './slider.scss';

export default function Slider(props) {
  const { slidesArray, currentElement } = props;

  // передаем значение переменной в css
  document.documentElement.style.setProperty('--slider-length', slidesArray.length);

  return (
    <div
      className='slider'
      style={{transform: `translateX(calc(${currentElement *-100 / slidesArray.length}%)`}} // сдвигем слайдер в зависимости от выбранного элемента
    >
      {slidesArray.map((el, index) => {
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
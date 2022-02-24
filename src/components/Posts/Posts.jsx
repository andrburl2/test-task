import React from 'react';
import './posts.scss';
import POSTS_DATA from '../../data/blog_posts.json';

import PostsItem from './PostsItem';

function sortByDate(array) {
  // преобразуем дату в объект Date
  array = array.map(el => {
    el.date = new Date(el.date);
    return el
  });

  // сортируем массив от новых к старым датам
  array.sort((a, b) => {
    return b.date - a.date 
  });

  return array
}

export default function Posts(props) {
  const [posts, setPosts] = React.useState(props.posts);

  const loadMorePosts = (data) => {
    // получаем новый массив соединяя массив из стейт и отсортированный по дате полученный массив
    const newPosts = posts.concat(sortByDate(data));

    // обновляем стейт
    setPosts(newPosts);
  };

  return (
    <section className='posts'>
      <h2 className='posts__title'>What's New?</h2>
    
      <div className='posts__content'>
        {
          posts.map((el, index) => {
            return <PostsItem post={el} key={index} />
          })
        }
      </div>

      <button
        className='posts__button'
        onClick={() => loadMorePosts(POSTS_DATA)}
        disabled={posts.length > 3} // отключаем кнопку при увеличении количества постов, что удалит ее с помощью css
      >
        Read More
      </button>
    </section>
  )
}
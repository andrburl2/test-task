export default function PostsItem(props) {
  const { post } = props;

  return (
    <a className='posts__item' href={post.url} target='_blank' rel='noreferrer'>
      <div className='posts__img'></div>

      <h3 className='posts__text'>{post.title}</h3>
    </a>
  )
}
import INITIAL_POSTS_DATA from './data/initial_posts.json';

import Feedback from './components/Feedback/Feedback';
import Posts from './components/Posts/Posts';

function App() {
  return (
    <>
      <Feedback />
      <Posts posts={INITIAL_POSTS_DATA} />
    </>
  );
}

export default App;
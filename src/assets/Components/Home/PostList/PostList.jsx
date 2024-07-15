import { useEffect, useState } from 'react';
import Post from '../Post/Post';


const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/post.json')
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;

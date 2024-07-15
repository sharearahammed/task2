import CreatePost from "./CreatePost/CreatePost";
import PostList from "./PostList/PostList";

const Home = () => {
  return (
    <div>
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">Posts Management</h1>
      </header>
      <CreatePost />
      <PostList />
    </div>
  );
};

export default Home;

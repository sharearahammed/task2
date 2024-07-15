import { useState } from "react";

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('/post.json', {
      method: 'POST',
      body: JSON.stringify({
        title,
        body,
        userId: 1,
        id : 1
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTitle('');
        setBody('');
        alert('Post created');
      });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8 p-6 border rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Create New Post</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Enter post title"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Body</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Enter post body"
        />
      </div>
      <button
        type="submit"
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Create Post
      </button>
    </form>
  );
};

export default CreatePost;

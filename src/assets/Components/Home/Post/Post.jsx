/* eslint-disable react/prop-types */

import axios from "axios";
import toast from "react-hot-toast";

const Post = ({ post }) => {
  const { id, title, body, userId } = post;

  const handleDelete = () => {
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
    toast.success("Task Delete successfully");
  };

  return (
    <div className="p-6 border rounded-lg shadow-md">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="mt-2">{body}</p>
      <p className="mt-2 text-sm text-gray-500">User ID: {userId}</p>
      <div className="mt-4 flex space-x-2">
        <button
          onClick={handleDelete}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Post;

const About = () => {
  return (
    <div className="sm:flex items-center max-w-screen-xl">
      <div className="sm:w-1/2 p-10">
        <div className="image object-center text-center">
          <img src="https://i.imgur.com/WbQnbas.png" />
        </div>
      </div>
      <div className="sm:w-1/2 p-5">
        <div className="text">
          <span className="text-gray-500 border-b-2 border-blue-700 uppercase">
            About us
          </span>
          <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">
            About <span className="text-blue-700">Posts Management</span>
          </h2>
          <div className="text-gray-600">
            <p className="mb-4">
              Posts Management is a simple application designed to manage and
              organize posts. This project demonstrates the use of React,
              Tailwind CSS, and the JSONPlaceholder API to create, read, update,
              and delete posts.
            </p>
            <p className="mb-4">
              The application provides a clean and intuitive interface, making
              it easy to manage posts. Users can create new posts, view a list
              of existing posts, update post details, and delete posts as
              needed.
            </p>
            <p className="mb-4">
              The project also showcases the use of modern web development tools
              and practices, including React components, functional hooks, and
              Tailwind CSS for styling.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

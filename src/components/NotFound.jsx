import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-26.9rem)] px-2 font-inter text-center">
      <h1 className="font-extrabold text-xl text-neutral-900 mb-2">
        Sorry, the page you were looking for was not found.
      </h1>
      <Link to="/">
        <button className="py-3 px-2 rounded cursor-pointer bg-neutral-900 text-white hover:bg-primary">
          Return to Home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;

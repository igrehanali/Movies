import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const Navbar = () => {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogot = async () => {
    try {
      await logout();
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full absolute p-4 flex items-center justify-between z-50">
      <Link to="/">
        <h1 className="uppercase text-red-600 font-nsans-Bold cursor-pointer sm:text-5xl text-2xl">
          netflix
        </h1>
      </Link>

      {user?.email ? (
        <div className="">
          <Link to="/profile" className="">
            <button className="capitalize bg-red-600 sm:px-6 px-4 sm:py-2 p-1 rounded cursor-pointer hover:bg-red-700 transition-colors duration-300 ">
              Profile
            </button>
          </Link>

          <Link className="  transition-colors duration-300 hover:text-red-600 ">
            <button
              onClick={handleLogot}
              className="capitalize pl-4 cursor-pointer hover:underline"
            >
              Logout
            </button>
          </Link>
        </div>
      ) : (
        <div className="">
          <Link
            to="/login"
            className="hover:text-red-600 transition-colors duration-300"
          >
            <button className="capitalize pr-4 cursor-pointer hover:underline">
              Login
            </button>
          </Link>

          <Link
            to="/signup"
            className="hover:text-white transition-colors duration-300"
          >
            <button className="capitalize bg-red-600 sm:px-6 px-4 sm:py-2 p-1 rounded cursor-pointer hover:bg-red-700">
              SignUp
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;

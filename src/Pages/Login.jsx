import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../Context/AuthContext";

const Login = () => {
  const [rememberLogin, setRememberLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const { login, user } = useAuth();
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="w-full h-full">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/1ff59121-777a-410e-afeb-6da82228426f/PK-en-20240205-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="img"
          className="w-full h-full   absolute object-cover"
        />
        <div className="bg-black/50 fixed top-0 left-0 w-full h-screen" />
        <div className="fixed w-full px-4 py-24 z-20">
          <div className="mx-auto max-w-[450px] h-[500px] bg-black/70 rounded-lg">
            <div className="py-16 mx-auto max-w-[320px]">
              <h1 className="text-3xl font-nsans-Bold">Login</h1>

              <form
                action=""
                onSubmit={handleFormSubmit}
                className="w-full flex flex-col py-4"
              >
                <input
                  type="email"
                  className="p-3 my-2 bg-gray-700 rounded"
                  placeholder="Email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <input
                  type="password"
                  className="p-3 my-2 bg-gray-700 rounded"
                  placeholder="Password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                />
                <button className="bg-red-600 py-3 my-6 rounded font-nsans-Bold">
                  Login
                </button>
                <div className="flex justify-between items-center text-gray-600">
                  <p>
                    <input
                      type="checkbox"
                      className="mr-2"
                      checked={rememberLogin}
                      onChange={(e) => setRememberLogin(!rememberLogin)}
                    />
                    Remember me
                  </p>
                  <p>Need help?</p>
                </div>
                <p className="my-4">
                  <span className="text-gray-600 mr-2">New to Netflix</span>
                  <Link to="/Signup">Sign Up</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

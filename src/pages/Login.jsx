import { useContext, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { signInWithPopup } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [loginError, setLoginError] = useState("");

  const { signInUser, provider, githubProvider } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    setLoginError("");

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset();
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
        setLoginError(error.message);
        toast(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);

        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        console.log(result);

        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="flex justify-center items-center rounded-2xl min-h-screen bg-base-200 mx-10 mt-10 md:mx-24 lg:mx-28">
      <div className="  ">
        <h1 className="text-center text-3xl font-bold mb-6">Login now!</h1>

        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 card-body">
          <form onSubmit={handleLogin} className="">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <span
                className="absolute top-2/3 right-3"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
              </span>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-sky-900 text-white">Login</button>
            </div>
          </form>
          <button
            className="bg-gray-200 p-2 rounded-lg mt-4 text-sky-900"
            onClick={handleGoogleSignIn}
          >
            Sign In With <span className="text-teal-500">Google!</span>
          </button>
          <button
            className="bg-gray-200 p-2 rounded-lg mt-4 text-sky-900"
            onClick={handleGithubSignIn}
          >
            Sign In With <span className="text-teal-500">Github!</span>
          </button>
          <p>
            New here ? Please
            <Link to="/register">
              <button className="btn btn-link text-sky-900">Register</button>
            </Link>
          </p>
          {loginError && <p>{loginError}</p>}
        </div>
        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
};

export default Login;

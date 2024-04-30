import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    console.log(name, email, photo, password);

    setRegisterError("");
    setSuccess("");

    if (password.length < 6) {
      toast("Password should be at least 6 characters or longer");
      return;
    } else if (!/[A-Z]/.test(password)) {
      toast("Password should have at least one uppercase letter.");
      return;
    } else if (!/[a-z]/.test(password)) {
      toast("Password should have at least one lowercase letter.");
      return;
    }

    createUser(email, password)
      .then((result) => {
        console.log(result.user);

        updateProfile(result.user, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => console.log("update profile"))
          .catch();
        setSuccess("Welcome to Dobby's Hut!!!", result.user.displayName);
        toast("User Created Successfully !!");
        navigate("/");
      })

      .catch((error) => {
        console.error(error);
        setRegisterError(error.message);
        toast(error.message);
      });
  };

  return (
    <div className=" min-h-screen bg-base-200 flex justify-center items-center rounded-2xl mx-10 mt-10 md:mx-24 lg:mx-28">
      <div className="mt-5">
        <h1 className="text-3xl text-center font-bold mb-6">Register now!</h1>

        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 card-body">
          <form onSubmit={handleRegister} className="">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input input-bordered"
                required
              />
            </div>
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
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Your Photo"
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
                className="absolute top-2/3 right-2"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
              </span>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-amber-700 text-white">Register</button>
            </div>
          </form>
          <p>
            Have an account ? Please
            <Link to="/login">
              <button className="btn btn-link text-amber-700">Login</button>
            </Link>
          </p>
          {success && <p>{success}</p>}
          {registerError && <p>{registerError}</p>}
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Register;

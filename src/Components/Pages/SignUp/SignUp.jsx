import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { API_URL, AXIOS_API, URL_HOME, URL_SIGN_IN } from "../../../Utils/Path";
import { ToastContainer, toast } from "react-toastify";
import CODES from "../../../Utils/StatusCodes";

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      const response = await AXIOS_API.post(API_URL.SIGN_UP, {
        userName: e.target.userName.value,
        email: e.target.email.value,
        password: e.target.password.value,
      });
      if (response.status === CODES.CREATED) {
        toast.success(response.data.message);
        // e.target.reset()
        setLoading(false);
        navigate(URL_HOME);
      }
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <ToastContainer />
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="userName"
          className="border p-3 rounded-lg"
          id="userName"
        />
        <input
          type="text"
          placeholder="email"
          className="border p-3 rounded-lg"
          id="email"
        />
        <input
          type="text"
          placeholder="password"
          className="border p-3 rounded-lg"
          id="password"
        />
        <button
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
          type="submit"
          disabled={loading}
        >
          {loading ? "Loading..." : "Sign up"}
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account?</p>{" "}
        <Link to={URL_SIGN_IN}>
          <span className="text-blue-700">Sign In </span>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;

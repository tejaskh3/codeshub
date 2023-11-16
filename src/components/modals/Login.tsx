import React, { useState } from "react";

type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
    const [loading, setLoading] = useState(false);
  return (
    <form className="space-y-6 px-6 py-4">
      <h3 className="text-xl font-medium text-white">Sign in to codesHub</h3>
      <div>
        <label
          htmlFor="email"
          className="text-5 font-medium mb-2 block text-gray-300"
        >
          Enter Email
        </label>
        <input
          type="text"
          placeholder="Enter Email"
          id="email"
          className="
            border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
            bg-gray-600 border-gray-500 placeholder-gray-400 text-white
        "
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="text-sm font-medium block mb-2 text-gray-300"
        >
          Your Password
        </label>
        <input
          //   onChange={handleInputChange}
          type="password"
          name="password"
          id="password"
          className="
            border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
            bg-gray-600 border-gray-500 placeholder-gray-400 text-white
        "
          placeholder="*******"
        />
      </div>
      <button
        type="submit"
        className="w-full text-white focus:ring-blue-300 font-medium rounded-lg
                text-sm px-5 py-2.5 text-center bg-brand-orange hover:bg-brand-orange-s
            "
      >
        {loading ? "Loading..." : "Log In"}
      </button>
      <button
        className="flex w-full justify-end"
        // onClick={() => handleClick("forgotPassword")}
      >
        <a
          href="#"
          className="text-sm block text-brand-orange hover:underline w-full text-right"
        >
          Forgot Password?
        </a>
      </button>
      <div className="text-sm font-medium text-gray-300">
        Not Registered?{" "}
        <a
          href="#"
          className="text-blue-700 hover:underline"
        //   onClick={() => handleClick("register")}
        >
          Create account
        </a>
      </div>
    </form>
  );
};
export default Login;

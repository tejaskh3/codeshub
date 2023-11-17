"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/firebase";
import { useRouter } from 'next/navigation'

type SignupProps = {};

const defaultData = {
  email: "",
  displayName: "",
  password: "",
};
const Signup: React.FC<SignupProps> = () => {
  // const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState(defaultData);
  const { email, displayName, password } = userData;
  const router = useRouter();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
    console.log(userData);
  };
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const handleRegister = async (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    if(!email || !password || !displayName){
      alert("please provide all the fields");
      return ;
    }
    try {
      const newUser = await createUserWithEmailAndPassword(email,password);
      if( !newUser ){
        router.push('/');
      }{
    }} catch (error:any) {
      alert(error.message)
    };
  };
  useEffect(()=>{
    error && alert(error?.message);
  },[error])
  return (
    <>
      <form className="space-y-6 px-6 py-4">
        <h3 className="text-xl font-medium text-white">Register to codesHub</h3>
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
            name="email"
            value={email}
            className="
            border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
            bg-gray-600 border-gray-500 placeholder-gray-400 text-white
        "
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label
            htmlFor="displayName"
            className="text-5 font-medium mb-2 block text-gray-300"
          >
            Display Name
          </label>
          <input
            type="text"
            placeholder="coder xyz"
            id="displayName"
            name="displayName"
            value={displayName}
            className="
            border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
            bg-gray-600 border-gray-500 placeholder-gray-400 text-white
        "
            onChange={handleInputChange}
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
            onChange={handleInputChange}
            type="password"
            name="password"
            id="password"
            value={password}
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
          onClick={handleRegister}
        >
          {loading ? "Loading..." : "Register"}
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
          Already Registered?{" "}
          <a
            href="#"
            className="text-blue-700 hover:underline"
              // onClick={() => handleClick("register")}
          >
            Create account
          </a>
        </div>
      </form>
    </>
  );
};
export default Signup;

import React from 'react'
import { Link } from "react-router-dom";
 
const Login = () => {
  return (
    <div className="flex justify-center items-center bg-red-400 h-screen">
      <div className=" relative w-[500px] h-[400px]  bg-[black] text-white flex flex-col justify-center items-center pt-10 pb-5 mt-[100px] rounded-md">
        <h1 className=" text-center text-[22px]">Sign In</h1>
        <form className="  w-[80%] ">
          <div className=" w-[100%]">
            <div className=" pb-2 justify-center flex flex-col h-[70px]">
              <label className=" text-[20px] pb-1">Email</label>
              <input
                type="email"
                placeholder="Enter your Email"
                className=" w-full h-[50%]  mr-2"
                required
              />
            </div>
            <div className=" pb-2 justify-center flex flex-col h-[70px]">
              <label className=" text-[20px] pb-1">Password</label>
              <input
                type="password"
                className=" w-full h-[50%]  mr-2"
                required
              />
            </div>
            <div className=" text-white bg-blue-600 text-center flex items-center justify-center h-[30px] mt-4">
              <input type="submit" value="Sing In" />
            </div>
          </div>
          <div className=" flex space-x-3 mt-3">
            <p>Dont Have an Accout ?</p>
            <Link to={"signup"}>
              <p className="text-blue-600 cursor-pointer hover:underline">
                SingUp
              </p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login
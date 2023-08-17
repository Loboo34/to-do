import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Singup = () => {
const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [Password, setPassword] = useState('')

  return (
    <div className=" flex justify-center items-center bg-[#0000ffa0] h-screen ">
      <div className=" relative w-[500px]  bg-[black] text-white flex flex-col justify-center items-center pt-10 pb-10  rounded-md">
        <h1 className=" text-center text-[22px] pb-4">Create Account</h1>
        <form className="  w-[80%] ">
          <div className=" w-[100%]">
            <div className=" pb-2 justify-center flex flex-col h-[70px]">
              <label className=" text-[20px] pb-1">Name</label>
              <input
                type="name"
                value={name}
                placeholder="Enter your Name"
                className=" w-full h-[50%] mr-2 text-black"
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className=" pb-2 justify-center flex flex-col h-[70px]">
              <label className=" text-[20px] pb-1">Email</label>
              <input
                type="email"
                value={email}
                id="email"
                placeholder="Enter your Email"
                className=" w-full h-[50%]  mr-2 text-black"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className=" pb-2 justify-center flex flex-col h-[70px]">
              <label className=" text-[20px] pb-1">Password</label>
              <input
                type="password"
                value={Password}
                id="password"
                className=" w-full h-[50%]  mr-2 text-black"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className=" text-white bg-blue-600 text-center flex items-center justify-center h-[30px] mt-8 font-bold">
              <input type="submit" value="Sing up" />
            </div>
          </div>
          <div className=" flex space-x-3 mt-3">
            <p>Already Have an Accout ?</p>
            <Link to={"signin"}>
              <p className="text-blue-600">Sing in</p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Singup
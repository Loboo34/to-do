import React from 'react'

const Singup = () => {
  return (
    <div className=" flex justify-center ">
      <div className=" relative w-[500px] bg-red-400 flex flex-col justify-center items-center pt-4 pb-4 mt-[100px]">
        <h1 className=" text-center text-[22px]">Create Account</h1>
        <form className="  w-[80%] ">
          <div className=" w-[100%]">
            <div className=" pb-2 justify-center flex flex-col h-[70px]">
              <label className=" text-[20px] pb-1">Name</label>
              <input
                type="name"
                value="name"
                placeholder="Enter your Name"
                className=" w-full h-[50%] mr-2"
              />
            </div>
            <div className=" pb-2 justify-center flex flex-col h-[70px]">
              <label className=" text-[20px] pb-1">Email</label>
              <input
                type="email"
                value={"email"}
                placeholder="Enter your Email"
                className=" w-full h-[50%]  mr-2"
              />
            </div>
            <div className=" pb-2 justify-center flex flex-col h-[70px]">
              <label className=" text-[20px] pb-1">Password</label>
              <input
                type="password"
                value="password"
                className=" w-full h-[50%]  mr-2"
              />
            </div>
            <div className=' text-white bg-blue-600 text-center flex items-center justify-center h-[30px] mt-4'>
              <input type='submit' value="Sing up" />
            </div>
          </div>
          <div className=' flex space-x-3'>
            <p>Already Have an Accout</p>
            <p className='text-blue-600'>Sing in</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Singup
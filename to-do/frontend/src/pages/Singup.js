import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const Singup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { dispatch } = useAuthContext();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const Singup = async (name, email, password) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch("/api/user/singup", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }
    if (response.ok) {
      //save user to local storage
      localStorage.setItem("user", JSON.stringify(json));

      //update
      dispatch({ type: "LOGIN", payload: json });
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await Singup(name, email, password);
  };

  const mystyle = {
    'background-image': "url(/img/wave.svg)",
    backgroundRepeat: "no-repeat",
    backgroundBlendMode: "overlay",
    width: "100%",
  }

  return (
      <div className=" flex justify-center items-center h-screen singup bg-blue-900" style={mystyle}>
        {/* <img src="/img/blob.svg" alt="blob" className="blobsvg"/> */}
        <div className=" absolute w-[500px]  bg-[black] text-white flex flex-col justify-center items-center pt-10 pb-10  rounded-md">
          <h1 className=" text-center text-[22px] pb-4">Create Account</h1>
          <form className="  w-[80%] " onSubmit={handleSubmit}>
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
                  value={password}
                  id="password"
                  className=" w-full h-[50%]  mr-2 text-black"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className=" text-white bg-blue-600 text-center flex items-center justify-center h-[30px] mt-8 font-bold">
                <input type="submit" value="Sing up" disabled={isLoading} />
              </div>
            </div>
            <div className=" flex space-x-3 mt-3">
              <p>Already Have an Accout ?</p>
              <Link to={"signin"}>
                <p className="text-blue-600">Sing in</p>
              </Link>
            </div>
            {error && <div className=" text-red-800">{error}</div>}
          </form>
        </div>
      </div>
   
  );
};

export default Singup;

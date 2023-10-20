import React, { useState  } from "react";
import { Link } from "react-router-dom";

import { useAuthContext } from "../hooks/useAuthContext";
import Navbar from "../components/Navbar";

const Singin = () => {
    //const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { dispatch } = useAuthContext();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const Singin = async ( email, password)=> {
   setIsLoading(true)
   setError(null)

   
  const response = await fetch("/api/user/singin", {
    method: "POST",
    headers: { "Content-Type": "application" },
    body: JSON.stringify({ email, password }),
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
    dispatch({ type: "SINGIN", payload: json });
    setIsLoading(false);
  }

    }
    const handleSubmit = async (e) => {
      e.preventDefault();

      await Singin( email, password);
    };
  return (
    <div className="flex justify-center items-center bg-gray-950 h-screen">
      <svg className="w-full h-full" viewBox="">
        <defs>
          <pattern
            id="bg_pattern"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
          >
            <circle
              cx="0.5"
              cy="0.5"
              r="16"
              stroke="#101011"
              strokeWidth="6"
              fill="none"
              opacity="1"
            ></circle>
            <line
              x1="35"
              y1="35"
              x2="65"
              y2="65"
              stroke="#000095"
              strokeWidth="6"
              strokeLinecap="round"
              opacity="1"
            ></line>{" "}
            <line
              x1="35"
              y1="65"
              x2="65"
              y2="35"
              stroke="#000095"
              strokeWidth="6"
              strokeLinecap="round"
              opacity="1"
            ></line>
            <circle
              cx="100.5"
              cy="0.5"
              r="16"
              stroke="#101011"
              strokeWidth="6"
              fill="none"
              opacity="1"
            ></circle>
            <circle
              cx="0.5"
              cy="100.5"
              r="16"
              stroke="#101011"
              strokeWidth="6"
              fill="none"
              opacity="1"
            ></circle>
            <circle
              cx="100.5"
              cy="100.5"
              r="16"
              stroke="#101011"
              strokeWidth="6"
              fill="none"
              opacity="1"
            ></circle>
          </pattern>
        </defs>
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill="#000000"
          opacity="1"
        ></rect>
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill="url(#bg_pattern)"
          opacity="1"
        ></rect>
      </svg>
      <div className="  w-[500px] h-[400px]  bg-[black] text-white flex flex-col justify-center items-center  pb-5  rounded-md absolute">
        <h1 className=" text-center text-[22px]">Sign In</h1>
        <form className="  w-[80%] " onSubmit={handleSubmit}>
          <div className=" w-[100%]">
            <div className=" pb-2 justify-center flex flex-col h-[70px]">
              <label className=" text-[20px] pb-1">Email</label>
              <input
                type="email"
                placeholder="Enter your Email"
                value={email}
                id="email"
                className=" w-full h-[50%] mr-2 text-black"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className=" pb-2 justify-center flex flex-col h-[70px]">
              <label className=" text-[20px] pb-1">Password</label>
              <input
                type="password"
                value={password}
                id="pass"
                className=" w-full h-[50%] mr-2 text-black"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
           
              <input
                type="submit"
                value="SingIn"
                className=" text-white bg-blue-600 text-center flex items-center justify-center h-[30px] mt-4 font-bold"
                disabled={isLoading}
              />
          </div>
          <div className=" flex space-x-3 mt-3">
            <p>Dont Have an Accout ?</p>
            <Link to={"signup"}>
              <p className="text-blue-600 cursor-pointer hover:underline">
                SingUp
              </p>
            </Link>
          </div>
          {error && <div className=" text-red-800">{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default Singin;

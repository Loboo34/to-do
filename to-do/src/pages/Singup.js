import React from 'react'

const Singup = () => {
  return (
    <div>
      <form>
        <label>
          <input type="name" value="name" placeholder="Enter your Name"></input>
        </label>
        <label>
          <input
            type="email"
            value="email"
            placeholder="Enter your email"
          ></input>
        </label>
        <label>
          <input
            type="password"
            value="password"
            placeholder="Password"
          ></input>
        </label>
      </form>
    </div>
  );
}

export default Singup
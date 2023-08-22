import React, { useState } from "react";

const AddTask = () => {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
    const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
  e.preventDefault();

const task = {title, type, date, time}

const response = await fetch("/api/tasks", {
  method: "POST",
  body: JSON.stringify(task),
  headers: {
    "Content-Type": "application/json",
  },
});
const json = await response.json();

if (!response.ok) {
  setError(json.error);
}
if (response.ok) {
  setError(null);
  setTitle("");
  setType("");
  setDate("");
  setTime("")
  console.log("new Task added:", json);
}

  }
  return (
    <div className=" mt-10 pl-4 w-[300px pb-5">
      <h1 className="  text-[22px] font-bold pb-4">Add Task</h1>
      <form className=" pb-9 flex flex-col" onSubmit={handleSubmit}>
        <label className="">
          <p className=" text-[16px] pb-1 font-semibold">Title:</p>
          <input
            type="text"
            value={title}
            className=" mb-5"
            required
            onChange={(e) => setTitle(e.target.valu)}
          />
        </label>
        <label className="">
          <p className=" text-[16px] pb-1 font-semibold">Type:</p>
          <select className=" w-[184px]">
            <input
              type="text"
              value={type}
              placeholder=""
              className=" mb-5 "
              required
              onChange={(e) => setType(e.target.value)}
            />
            <option value="personal">Work</option>
            <option value="personal">Groceries</option>
            <option value="personal">Shopping</option>
            <option value="personal">Personal</option>
          </select>
        </label>
        <label className="mt-4">
          <p className=" text-[16px] pb-1 font-semibold">Due Date:</p>
          <input
            type="date"
            value={date}
            className="  mb-5 w-[184px]"
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
        <label className="">
          <p className=" text-[16px] pb-1 font-semibold">Time:</p>
          <input
            type="time"
            value={time}
            className="w-[184px] mb-8"
            onChange={(e) => setTime(e.target.value)}
          />
        </label>
        <input
          type="submit"
          value="Add Task"
          placeholder=" Add Task"
          className=" bg-blue-600 text-white w-[100px] pl-2 pr-2 pb-1 pt-1 rounded font-bold"
        />
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
};

export default AddTask;

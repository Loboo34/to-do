import React, { useState } from "react";
import { useTasksContext } from "../hooks/useTasksContext";

const AddTask = () => {
  const { dispatch} = useTasksContext()
  const [title, setTitle] = useState('');
  const [type, setType] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
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
  dispatch({type: 'CREATE_TASK', payload: json});
}

  }
  return (
    <div className=" mt-10 pl-4 w-[300px pb-5">
      <h1 className="  text-[22px] font-bold pb-4">Add Task</h1>
      <form className=" pb-9 flex flex-col" onSubmit={handleSubmit}>
        <div className="">
          <p className=" text-[16px] pb-1 font-semibold">Title:</p>
          <input
            type="text"
            value={title}
            className=" mb-5"
            required
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="">
          <p className=" text-[16px] pb-1 font-semibold">Type:</p>

          {/* <input
            type="text"
            value={type}
            placeholder=""
            className=" mb-5 "
            required
            onChange={(e) => setType(e.target.value)}
          />  */}
          <select
            className=" w-[184px]"
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
          >
            <option value="work">Work</option>
            <option value="groceries">Groceries</option>
            <option value="shopping">Shopping</option>
            <option value="personal">Personal</option>
          </select>
        </div>
        <div className="mt-4">
          <p className=" text-[16px] pb-1 font-semibold">Due Date:</p>
          <input
            type="date"
            value={date}
            className="  mb-5 w-[184px]"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="">
          <p className=" text-[16px] pb-1 font-semibold">Time:</p>
          <input
            type="time"
            value={time}
            className="w-[184px] mb-8"
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
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

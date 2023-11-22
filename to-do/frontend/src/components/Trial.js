import React, { useEffect, useState } from "react";


const Trial = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth());
  const [dates, setDates] = useState([]);
  const [currentDate, setCurrentDate] = useState("");

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

  useEffect(() => {
    manipulate();
  }, [year, month]);

  const manipulate = () => {
    const date = new Date();

    const dayone = new Date(year, month, 1).getDay();
    const lastdate = new Date(year, month + 1, 0).getDate();
    const monthlastdate = new Date(year, month, 0).getDate();

    let calendarDates = [];

    for (let i = dayone; i > 0; i--) {
      calendarDates.push({ day: monthlastdate - i + 1, isActive: false });
    }

    for (let i = 1; i <= lastdate; i++) {
      const isToday =
        i === date.getDate() &&
        month === date.getMonth() &&
        year === date.getFullYear();
      calendarDates.push({ day: i, isActive: isToday });
    }

    setDates(calendarDates);
  };

  const prevNextHandler = (increment) => {
    let newMonth = month + increment;
    let newYear = year;

    if (newMonth < 0 || newMonth > 11) {
      const date = new Date(year, newMonth, new Date().getDate());
      newYear = date.getFullYear();
      newMonth = date.getMonth();
    } else {
      newYear = new Date().getFullYear();
    }

    setYear(newYear);
    setMonth(newMonth);
  };
  return (
    <div className=" bg-white rounded shadow p-4 w-64">
      <p>Hello</p>
      <div className="calendar ">
        <div className="flex justify-between items-center mb-4">
          <span
            className="cursor-pointer text-blue-500 hover:text-blue-700"
            onClick={() => prevNextHandler(-1)}
          >
            &lt;
          </span>
          <span className="font-semibold">
            {months[month]} {year}
          </span>
          <span
            className="cursor-pointer text-blue-500 hover:text-blue-700"
            onClick={() => prevNextHandler(1)}
          >
            &gt;
          </span>
        </div>
        <ul className=" flex gap-2 text-[14px] text-blue-700  justify-center calendar-weekdays dangerouslySetInnerHTML={{ __html: dates }}">
          <li>Sun</li>
          <li>Mon</li>
          <li>Tue</li>
          <li>Wed</li>
          <li>Thu</li>
          <li>Fri</li>
          <li>Sat</li>
        </ul>
        <ul className="grid grid-cols-7 gap-2">
          {dates.map((date, index) => (
            <li
              key={index}
              className={`text-center text-[12px] py-1 border border-gray-300 rounded-md cursor-pointer ${
                date.isActive ? "text-blue-500 font-medium" : "text-gray-700"
              }`}
            >
              {date.day}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Trial;

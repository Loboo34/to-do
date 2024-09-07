import React,{useEffect, useState} from 'react'

const DateToDay = () => {
 const [currentDate, setCurrentDate] = useState(new Date());
 const [timeOfDay, setTimeOfDay] = useState("");

     useEffect(() => {
       const intervalId = setInterval(() => {
         setCurrentDate(new Date());
         determineTimeOfDay();
       }, 1000);

       return () => clearInterval(intervalId);
       // eslint-disable-next-line react-hooks/exhaustive-deps
     }, []);

     const determineTimeOfDay = () => {
       const hours = currentDate.getHours();
       if (hours < 12) {
         setTimeOfDay("Morning");
       } else if (hours < 18) {
         setTimeOfDay("Afternoon");
       } else {
         setTimeOfDay("Evening");
       }
     };
  return (
    <div className=" ">
      <h1 className=" text-blue-700 text-[22px] pt-7">
        {`Good ${timeOfDay} `}
        Tempest
      </h1>
      <p className=" text-[18px] text-slate-400">
        {currentDate.toDateString()}
      </p>
      <p className=" text-[18px] font-bold">{}</p>
    </div>
  );
}

export default DateToDay
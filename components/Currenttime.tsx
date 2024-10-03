"use client"

import React, { useEffect, useState } from 'react';
import { format } from 'date-fns-tz'; // Ensure you have this package installed

const CurrentTime = () => {
  const timeZone = 'Asia/Kolkata'; // Set the time zone for India

  const [currentTime, setCurrentTime] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const time = format(now, 'hh:mm a', { timeZone }); // Format time
      const formattedDate = format(now, 'MMMM dd, yyyy', { timeZone }); // Format date

      setCurrentTime(time); // Update state with current time
      setDate(formattedDate); // Update state with current date
    };

    updateTime(); // Initial call to set time immediately
    const intervalId = setInterval(updateTime, 1000); // Update every second

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, [timeZone]);

  return (
    <div className="flex flex-col gap-2 md:p-8 lg:p-0">
      <h1 className="text-4xl font-extrabold lg:text-7xl">{currentTime}</h1>
      <p className="text-lg font-medium text-sky-1 lg:text-2xl">{date}</p>
    </div>
  );
};

export default CurrentTime;

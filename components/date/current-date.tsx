"use client";

import { useEffect, useState } from "react";

export const CurrentDate = () => {
  const [date, setDate] = useState<Date>(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, [date]);
  return (
    <div className="bg-opacity border px-4 py-2 rounded-lg flex flex-col gap-1 w-full sm:w-1/3">
      {/* <h4 className="text-xl">Время сейчас:</h4> */}
      <h3 className="text-2xl font-semibold">{date.toLocaleTimeString()}</h3>
      <h3 className="text-xl font-semibold">
        {date.toLocaleDateString("ru-RU", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </h3>
    </div>
  );
};

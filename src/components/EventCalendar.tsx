"use client";

import Image from "next/image";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

// Temporary data
export const eventsData = [
  {
    id: 1,
    title: "Lake Trip",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    id: 2,
    title: "Picnic",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    id: 3,
    title: "Beach Trip",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
];

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <div className="bg-white rounded-md p-4">
      <Calendar onChange={onChange} value={value} />
      <div className="flex flex-col gap-4">
        {/* Title */}
        <div className="flex justify-between items-center my-4">
          <h1 className="text-xl font-semibold">Events</h1>
          <Image
            src="/moreDark.png"
            alt=""
            width={20}
            height={20}
            className="cursor-pointer"
          />
        </div>
        {eventsData.map((event) => {
          return (
            <div
              className="p-5 rounded-md border-2 border-gray-100 border-t-4 even:border-t-sky odd:border-t-purple"
              key={event.id}
            >
              <div className="flex items-center justify-between">
                <h1 className="font-semibold text-gray-600">{event.title}</h1>
                <span className="text-xs text-gray-300">{event.time}</span>
              </div>
              <p className="text-gray-400 text-sm mt-2">{event.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EventCalendar;

/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import Calendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction"; // for date click interaction
import "@fullcalendar/react"; // Import FullCalendar React component

type EventTypes = "available" | "blackout" | "out-of-town" | "vacation";

interface Event {
  title: string;
  date: string;
  color: string;
}

const databaseEvents = [
  { title: "Available", date: "2025-08-05", color: "#A0E3A0" },
  { title: "Available", date: "2025-08-06", color: "#A0E3A0" },
  { title: "Available", date: "2025-08-08", color: "#A0E3A0" },
  { title: "Vacation", date: "2025-07-31", color: "#D1C4E9" },
  { title: "Available", date: "2025-07-30", color: "#A0E3A0" },
  { title: "Blackout", date: "2025-08-04", color: "#F8D7DA" },
  { title: "Blackout", date: "2025-08-12", color: "#F8D7DA" },
  { title: "Blackout", date: "2025-08-13", color: "#F8D7DA" },
  { title: "Blackout", date: "2025-08-14", color: "#F8D7DA" },
  { title: "Blackout", date: "2025-10-02", color: "#F8D7DA" },
  { title: "Blackout", date: "2025-10-23", color: "#F8D7DA" },
  { title: "Blackout", date: "2025-11-06", color: "#F8D7DA" },
  { title: "Out-of-town", date: "2025-08-15", color: "#FFEB3B" },
  { title: "Out-of-town", date: "2025-08-09", color: "#FFEB3B" },
  { title: "Vacation", date: "2025-08-07", color: "#D1C4E9" },
  { title: "Vacation", date: "2025-08-01", color: "#D1C4E9" },
  { title: "Vacation", date: "2025-08-02", color: "#D1C4E9" },
  { title: "Vacation", date: "2025-07-29", color: "#D1C4E9" },
  { title: "Vacation", date: "2025-07-28", color: "#D1C4E9" },
  { title: "Out-of-town", date: "2025-08-16", color: "#FFEB3B" },
  { title: "Out-of-town", date: "2025-08-22", color: "#FFEB3B" },
  { title: "Out-of-town", date: "2025-08-28", color: "#FFEB3B" },
  { title: "Out-of-town", date: "2025-08-29", color: "#FFEB3B" },
  { title: "Out-of-town", date: "2025-09-12", color: "#FFEB3B" },
  { title: "Out-of-town", date: "2025-09-13", color: "#FFEB3B" },
  { title: "Out-of-town", date: "2025-09-19", color: "#FFEB3B" },
  { title: "Vacation", date: "2025-09-11", color: "#D1C4E9" },
  { title: "Vacation", date: "2025-09-10", color: "#D1C4E9" },
  { title: "Vacation", date: "2025-09-08", color: "#D1C4E9" },
  { title: "Vacation", date: "2025-09-09", color: "#D1C4E9" },
  { title: "Blackout", date: "2025-09-16", color: "#F8D7DA" },
  { title: "Blackout", date: "2025-09-17", color: "#F8D7DA" },
  { title: "Blackout", date: "2025-09-18", color: "#F8D7DA" },
  { title: "Available", date: "2025-09-27", color: "#A0E3A0" },
  { title: "Available", date: "2025-09-26", color: "#A0E3A0" },
  { title: "Available", date: "2025-09-25", color: "#A0E3A0" },
  { title: "Available", date: "2025-09-24", color: "#A0E3A0" },
  { title: "Available", date: "2025-09-23", color: "#A0E3A0" },
];



const CustomCalendar: React.FC = () => {
  const [events, setEvents] = useState<Event[]>(databaseEvents);
  const [selectedTab, setSelectedTab] = useState<EventTypes>("available");

  const handleTabClick = (tab: EventTypes) => {
    setSelectedTab(tab);
  };

  const eventColors: Record<EventTypes, string> = {
    available: "#A0E3A0", // Green for available
    blackout: "#F8D7DA", // Red for blackout
    "out-of-town": "#FFEB3B", // Yellow for out of town
    vacation: "#D1C4E9", // Purple for vacation
  };

  // Function to handle date click
  const handleDateClick = (arg: any) => {
    const date = arg.dateStr;
    // Check if there is already an event for this date
    const existingEventIndex = events.findIndex(event => event.date === date);

    // If an event exists for this date, update the event
    if (existingEventIndex !== -1) {
      const updatedEvents = [...events];
      updatedEvents[existingEventIndex] = {
        title: selectedTab.charAt(0).toUpperCase() + selectedTab.slice(1),
        date: date,
        color: eventColors[selectedTab],
      };
      setEvents(updatedEvents); // Update events array with the new event
    } else {
      // If no event exists, add a new one
      const newEvent: Event = {
        title: selectedTab.charAt(0).toUpperCase() + selectedTab.slice(1),
        date: date,
        color: eventColors[selectedTab],
      };
      setEvents(prevEvents => [...prevEvents, newEvent]); // Add new event
    }
  };

  useEffect(() => {
    console.log("📅 Updated Events (tutor abilibility):", events);
  }, [events]);





  // Function to render events with custom content
  const eventContent = (eventInfo: any) => {
    return (
      <div>
        {/* Add the custom class here for event title */}
        <span className="custom-event-title">{eventInfo.event.title}</span>
      </div>
    );
  };

  return (
    <div className="mt-10 w-full h-auto mx-auto px-4">
      <h1 className="text-2xl font-semibold mb-5 text-center">
        July 2025 Calendar
      </h1>

      {/* Tabs for event selection */}
      <div className="flex justify-center mb-5 flex-wrap">
        {["available", "blackout", "out-of-town", "vacation"].map(tab => (
          <button
            key={tab}
            onClick={() => handleTabClick(tab as EventTypes)}
            className={`px-4 py-2 mx-2 mb-2 rounded-md ${
              selectedTab === tab ? "bg-primary-blue text-white" : "bg-gray-200"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* FullCalendar Component */}
      <Calendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        dateClick={handleDateClick}
        editable={true}
        eventContent={eventContent} // Use the custom eventContent to render the event title with custom styles
      />

      {/* Legend to display event types */}
      <div className="mt-4  text-center text-sm text-gray-600">
        <div className="flex flex-wrap xl:justify-center  gap-5">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-green-300 rounded-full"></div>
            <span className="ml-2">Available</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-red-300 rounded-full"></div>
            <span className="ml-2">Blackout</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-yellow-300 rounded-full"></div>
            <span className="ml-2">Out of Town</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-purple-300 rounded-full"></div>
            <span className="ml-2">Vacation</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomCalendar;

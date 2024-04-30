// Events.js
import React from "react";

function Events() {
  return (
    <div>
      <h2>Events</h2>
      <div className="event-container">
        {/* Add your event cards here */}
        <div className="event-card">
          <img src="event1.jpg" alt="Event 1" />
          <p>Description of Event 1</p>
        </div>
        <div className="event-card">
          <img src="event2.jpg" alt="Event 2" />
          <p>Description of Event 2</p>
        </div>
      </div>
    </div>
  );
}

export default Events;

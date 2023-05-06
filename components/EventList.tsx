import React, { useState, useEffect } from 'react';
import { fetchEvents, Event } from '../lib/eventBriteAPI';

const EventList: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const fetchAndFilterEvents = async () => {
      const allEvents = await fetchEvents();
      const nonSoldOutEvents = allEvents.filter(
        (event) => event.ticket_availability.has_available_tickets
      );
      setEvents(nonSoldOutEvents);
    };

    fetchAndFilterEvents();
  }, []);

  return (
    <div>
      <h1>Non-soldout Eventbrite Events</h1>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <a href={event.url} target="_blank" rel="noopener noreferrer">
              {event.name.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;

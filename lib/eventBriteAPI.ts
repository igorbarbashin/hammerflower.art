const EVENTBRITE_API_KEY = process.env.EVENTBRITE_API_KEY;
const EVENTBRITE_API_BASE = 'https://www.eventbriteapi.com/v3';

export interface Event {
  id: string;
  name: {
    text: string;
  };
  url: string;
  ticket_availability: {
    has_available_tickets: boolean;
  };
}

export const fetchEvents = async (): Promise<Event[]> => {
  try {
    const response = await fetch(
      `${EVENTBRITE_API_BASE}/organizations/63675539363/events`,
      {
        headers: {
          Authorization: `Bearer ${EVENTBRITE_API_KEY}`,
        },
      }
    );

    const data = await response.json();

    return data.events;
  } catch (error) {
    console.error('Error fetching events:', error);
    return [];
  }
};

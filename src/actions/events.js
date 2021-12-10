// exporting actions to be able to call them in the middleware
export const FETCH_EVENTS = 'FETCH_EVENTS';
export const SAVE_EVENTS = 'SAVE_EVENTS';

// setting up a fonction to fetch events data from the API
export const fetchEvents = () => ({
  type: FETCH_EVENTS,
});

// setting up a fonction to save the events data
// fetched from the API into the state
export const saveEvents = (events) => ({
  type: SAVE_EVENTS,
  events: events,
});

/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */

/**
 * @param {Array} events - all events
 * @param {string} searchedSlug - slug from the seekend event
 * @return {Object} - event found
 */

// function which targets an artist thanks to its slug then fetch it
export function findEvent(events, searchedSlug) {
  const event = events.find((testedEvent) => {
    return testedEvent.slug === searchedSlug;
  });
  return event;
}

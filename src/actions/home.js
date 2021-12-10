// Home artists
export const FETCH_HOME_ARTISTS = 'FETCH_HOME_ARTISTS';
export const SAVE_HOME_ARTISTS = 'SAVE_HOME_ARTISTS';

export const fetchHomeArtists = () => ({
  type: FETCH_HOME_ARTISTS,
});

export const saveHomeArtists = (artists) => ({
  type: SAVE_HOME_ARTISTS,
  artists: artists,
});

// Home events
export const FETCH_HOME_EVENTS = 'FETCH_HOME_EVENTS';
export const SAVE_HOME_EVENTS = 'SAVE_HOME_EVENTS';

export const fetchHomeEvents = () => ({
  type: FETCH_HOME_EVENTS,
});

export const saveHomeEvents = (events) => ({
  type: SAVE_HOME_EVENTS,
  events: events,
});

// Home artworks
export const FETCH_HOME_ARTWORKS = 'FETCH_HOME_ARTWORKS';
export const SAVE_HOME_ARTWORKS = 'SAVE_HOME_ARTWORKS';

export const fetchHomeArtworks = () => ({
  type: FETCH_HOME_ARTWORKS,
});

export const saveHomeArtworks = (artworks) => ({
  type: SAVE_HOME_ARTWORKS,
  artworks: artworks,
});

// Fetch home data action
export const FETCH_HOME_DATA = 'FETCH_HOME_DATA';
export const fetchHomeData = () => ({
  type: FETCH_HOME_DATA,
});

// exporting actions to be able to call them in the middleware
export const FETCH_ARTISTS = 'FETCH_ARTISTS';
export const SAVE_ARTISTS = 'SAVE_ARTISTS';

// setting up a fonction to fetch artists data from the API
export const fetchArtists = () => ({
  type: FETCH_ARTISTS,
});

// setting up a fonction to save the artists data
// fetched from the API into the state
export const saveArtists = (artists) => ({
  type: SAVE_ARTISTS,
  artists: artists,
});

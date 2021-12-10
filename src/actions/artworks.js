// exporting actions to be able to call them in the middleware
export const FETCH_ARTWORKS = 'FETCH_ARTWORKS';
export const SAVE_ARTWORKS = 'SAVE_ARTWORKS';

// setting up a fonction to fetch artworks data from the API
export const fetchArtworks = (slug) => ({
  type: FETCH_ARTWORKS,
  slug: slug,
});

// setting up a fonction to save the artworks data
// fetched from the API into the state
export const saveArtworks = (artworks) => ({
  type: SAVE_ARTWORKS,
  artworks: artworks,
});

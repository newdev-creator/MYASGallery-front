/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */

/**
 * @param {Array} artists - all artists
 * @param {string} searchedSlug - artists slug
 * @return {Object} - artist found
 */

// function which targets an artist thanks to its slug then fetch it
export function findArtist(artists, searchedSlug) {
  const artist = artists.find((testedArtists) => {
    return testedArtists.slug === searchedSlug;
  });
  return artist;
}

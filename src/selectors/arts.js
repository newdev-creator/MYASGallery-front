/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */

/**
 * @param {Array} arts - all artworks
 * @param {string} searchedSlug - slug from the seeked artwork
 * @return {Object} - artwork found
 */

// function which targets an artwork thanks to its slug then fetch it
export function findArt(arts, searchedSlug) {
  const art = arts.find((testedArts) => {
    return testedArts.slug === searchedSlug;
  });
  return art;
}

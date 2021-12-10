// exporting actions to be able to call them in the middleware
export const FETCH_GLOBAL_DATA = 'FETCH_GLOBAL_DATA';
export const SET_LOADING_FALSE = 'SET_LOADING_FALSE';

// fetches data we need on ALL pages
export const fetchGlobalData = () => ({
  type: FETCH_GLOBAL_DATA,
});

// initialise the loader page
export const setLoadingFalse = () => ({
  type: SET_LOADING_FALSE,
});

export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const SAVE_CATEGORIES = 'SAVE_CATEGORIES';

// setting up a fonction to fetch global data from the API
export const fetchCategories = () => ({
  type: FETCH_CATEGORIES,
});

// setting up a fonction to save the global datas
// fetched from the API into the state
export const saveCategories = (categories) => ({
  type: SAVE_CATEGORIES,
  categories: categories,
});


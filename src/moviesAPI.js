/* eslint-disable no-console */
import http from './http.js';

import { ui } from './UI.js';

// Get Movies
async function getMovies(searchParams) {
  if (searchParams === '') {
    searchParams = 'action';
  }

  http.get(`https://api.tvmaze.com/search/shows?q=${searchParams}`)
    .then((data) => ui.showMovies(data))
    .catch((error) => console.log(error));
}

export default getMovies;

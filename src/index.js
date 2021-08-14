/* eslint-disable no-console */
import './style.css';
// import http from './http.js';
// import ui from './UI.js';
import getMovies from './moviesAPI.js';

// commented out because of search conflict.

// // search with click
// document.querySelector('#get-input').addEventListener('click', (e) => {
//   e.preventDefault();
//   console.log(e.target.previousElementSibling.value);
//   getMovies(e.target.previousElementSibling.value);
// });

// // search with enter
// document.querySelector('#search-input').addEventListener('keypress', (e) => {
//   if (e.key === 'Enter') {
//     e.preventDefault();
//     console.log(e.target.value);
//     getMovies(e.target.value);
//   }
// });

document.addEventListener('DOMContentLoaded', getMovies(''));

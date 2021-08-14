/* eslint-disable no-console */
import http from './http.js';
// import { ui } from './UI.js';

const appKey = 'iTwOeYcQW4Syd1iyW4ip';
const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';
// const likesLink = `/apps/${appKey}/likes/`;
const commentLink = `/apps/${appKey}/comments`;

// Get comments
const getComments = async (itemID) => {
  // const commentBody = {
  //   item_id: itemID,
  // };
  const result = await http.get(`${baseUrl}${commentLink}?item_id=${itemID}`);
  // const likes = await result.json();
  console.log(result);
  return result;
};

// Submit Post
async function submitComment() {
  // // const title = document.querySelector('#title').value;
  // const body = document.querySelector('#body').value;
  // const author = document.querySelector('#author').value;
  // const id = document.querySelector('#id').value;

  // const data = {
  //   author,
  //   body,
  // };

  // Validate input
  // if (body === '' || author === '') {
  //   ui.showAlert('Please fill in all fields', 'alert alert-danger');
  // // eslint-disable-next-line brace-style
  // }

  // // Check for ID
  // else if (id === '') {
  //   // Create Post
  //   http.post('http://localhost:3000/posts', data)
  //     .then((data) => {
  //       // ui.clearFields();
  //       getComments();
  //     })
  //     .catch((err) => console.log(err));
  // }
}

export { getComments, submitComment };
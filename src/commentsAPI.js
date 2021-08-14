/* eslint-disable no-console */
import http from './http.js';

const appKey = 'iTwOeYcQW4Syd1iyW4ip';
const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';
const commentLink = `/apps/${appKey}/comments`;

// Get comments
const getComments = async (itemID) => {
  const result = await http.get(`${baseUrl}${commentLink}?item_id=${itemID}`);
  console.log(result);
  return result;
};

// Submit Post
async function submitComment() {
  console.log('Submitting comment...');
}

export { getComments, submitComment };
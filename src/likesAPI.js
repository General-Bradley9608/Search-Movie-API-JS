/* eslint-disable no-console */
import http from './http.js';

// links
const appKey = 'iTwOeYcQW4Syd1iyW4ip';
const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';
const likesLink = `/apps/${appKey}/likes/`;

// Get Likes Count
const getLikes = async () => {
  const result = await http.get(`${baseUrl}${likesLink}`);
  console.log(result);
  return result;
};

// add likes
function addLike(itemID) {
  console.log('ti id einai edw mesa addLike', itemID);
  const likeBody = {
    item_id: itemID,
  };

  http.post(`${baseUrl}${likesLink}`, likeBody)
    .then((data) => {
      console.log(data);
      getLikes();
    })
    .catch((err) => console.log(err));
}

export { getLikes, addLike };
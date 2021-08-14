const countCards = () => {
  const numOfCards = document.querySelectorAll('.card-movie').length;
  // document.querySelector('.cards-counter').textContent = `(${numOfCards})`;
  return numOfCards;
};

const countLikes = () => {
  const numOfCards = document.querySelectorAll('.card-movie').length;
  // document.querySelector('.cards-counter').textContent = `(${numOfCards})`;
  return numOfCards;
};

const countComments = () => {
  const numOfCards = document.querySelectorAll('.card-movie').length;
  // document.querySelector('.cards-counter').textContent = `(${numOfCards})`;
  return numOfCards;
};

export { countCards, countLikes, countComments };
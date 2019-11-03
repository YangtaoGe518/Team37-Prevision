import flashcards from './flashcards.js';

const convertNameToId = name => name
  .replace(/\s/g, '-')
  .toLowerCase();

const buildMap = arr => arr.reduce((acc, current) => {
  current.id = convertNameToId(current.name);
  acc[current.id] = current;
  return acc;
}, ({}));

const chooseRecommended = categories => Object.values(categories)
  .reduce((acc, current) => acc.concat(Object.values(current)), [])
  .sort(() => Math.random() - 0.5)
  .slice(0, 10);

let categories = {
  flashcards: buildMap(flashcards),
};

categories.recommended = chooseRecommended(categories);

export default categories;

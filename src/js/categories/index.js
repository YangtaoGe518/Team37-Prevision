import flashcards from './flashcards.js';
import videos from './videos.js';
import site from './site.js';

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
  videos: buildMap(videos),
  site: buildMap(site),
};

categories.recommended = chooseRecommended(categories);

export default categories;

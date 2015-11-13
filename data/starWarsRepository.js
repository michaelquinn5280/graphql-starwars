import Human from './human';
import Droid from './droid';

/**
 * Helper function to get a character by ID.
 */
function getCharacter(id) {
  console.log('getCharacter called with id: ', id);
  // Returning a promise just to illustrate GraphQL.js's support.
  var humanData = Human.findOne({ 'id': id });
  var droidData = Droid.findOne({ 'id': id });
  return Promise.resolve(humanData || droidData);
}

/**
 * Allows us to query for a character's friends.
 */
export function getFriends(character) {
   console.log('getFriends called');
  return character.friends.map(id => getCharacter(id));
}

/**
 * Allows us to fetch the undisputed hero of the Star Wars trilogy, R2-D2.
 */
export function getHero(episode) {
   console.log('getHero called with episode: ', episode);
  if (parseInt(episode) === 5) {
    // Luke is the hero of Episode V.
    var luke = Human.findOne({ 'id': '1000' })
    return luke;
  }
  else
  {
    // Artoo is the hero otherwise.
    var artoo = Droid.findOne({ 'id': '2001' })
    return artoo;
  }
}

/**
 * Allows us to query for the human with the given id.
 */
export function getHuman(id) {
  console.log('getHuman called with id:', id);
  var humanData = Human.findOne({ 'id': id });
  return humanData;
}

/**
 * Allows us to query for the droid with the given id.
 */
export function getDroid(id) {
   console.log('getDroid called with id: ', id);
  var droidData = Droid.findOne({ 'id': id });
  return droidData;
}

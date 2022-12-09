// Наш герой.
const Game = require('../Game');

const player = require('play-sound')(opts = {});

class Hero {
  constructor({ boomerang, score = 0, position = { x: 0, y: 0} }) {
    this.skin = '🤠';
    this.position = position;
    this.hasBoomerang = true;
    this.score = score;
  }

}
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

  moveLeft() {
    if (this.position.x > 0) {
      this.position.x -= 1;
      this.boomerang.position.x -= 1;
    }
  }

  moveUp() {
    if (this.position.y > 0) {
      this.position.y -= 1;
      this.boomerang.position.y -= 1;
    }
  }

  moveDown() {
    this.position.y += 1;
    this.boomerang.position.y += 1;
  }

  moveRight() {
    this.position.x += 1;
    this.boomerang.position.x += 1;
  }

  attack() {
    // Атакуем.
    this.boomerang.fly();
  }

  die() {
    this.skin = '💀';
    console.log('YOU ARE DEAD!💀');
    process.exit();
  }
}

module.exports = Hero;

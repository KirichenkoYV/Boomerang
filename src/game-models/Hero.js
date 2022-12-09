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
    if (this.hasBoomerang) {
      player.play('src/sounds/just-like-magic.wav');
      this.hasBoomerang = false;
      const startPosition = this.boomerang.position.x;
      let direction = 'right';
      this.score += 1;
      const id1 = setInterval(() => {
        if (this.boomerang.position.x === this.position.x) {
          this.boomerang.position.x = this.position.x + 1;
          this.hasBoomerang = true;
          clearInterval(id1);
        } else {
          if (this.boomerang.position.x === startPosition + 10) {
            direction = 'left';
          }
          if (direction === 'right') {
            this.boomerang.position.x += 1;
          }
          if (direction === 'left') {
            this.boomerang.position.x -= 1;
          }
        }
      }, 30);
    }
  }

  die() {
    this.skin = '💀';
    console.log('YOU ARE DEAD!💀');
    process.exit();
  }
}

module.exports = Hero;

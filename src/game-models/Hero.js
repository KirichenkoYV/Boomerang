const player = require('play-sound')((opts = {}));
// const User = require('../../db/models');

// Наш герой.

class Hero {
  constructor({ boomerang, score = 0, position = { x: 0, y: 0 } }) {
    this.skin = '🤠'; // можете использовать любые emoji '💃'
    this.boomerang = boomerang;
    this.position = position;
    this.hasBoomerang = true;
    this.score = score;
  }

  moveLeft() {
    // Идём влево.
    if (this.position.x > 0) {
      this.position.x -= 1;
      this.boomerang.position.x -= 1;
    }
  }

  moveRight() {
    // Идём вправо.
    this.position.x += 1;
    this.boomerang.position.x += 1;
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

  attack() {
    // Атакуем.
    // this.boomerang.fly()
    if (this.hasBoomerang) {
      player.play('src/sounds/just-like-magic.wav');
      this.hasBoomerang = false;
      const startPosition = this.boomerang.position.x;
      let direction = 'right';
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
    player.play('src/sounds/electric-fence-buzzing.wav');
    setTimeout(() => {
      // player.play('src/sounds/game-over.wav');
      this.skin = '💀';
      console.log('YOU ARE DEAD!💀');
      process.exit();
    }, 500);
  }
}

module.exports = Hero;

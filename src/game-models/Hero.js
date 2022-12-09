// Наш герой.
const Game = require("../Game");

const player = require("play-sound")((opts = {}));

class Hero {
  constructor({ boomerang, score = 0, position = { x: 0, y: 0 } }) {
    this.skin = "🤠";
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
}

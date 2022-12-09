// Импортируем всё необходимое.
// Или можно не импортировать,
// а передавать все нужные объекты прямо из run.js при инициализации new Game().

const Hero = require('./game-models/Hero');
const Enemy = require('./game-models/Enemy');
const Boomerang = require('./game-models/Boomerang');
const View = require('./View');
const runInteractiveConsole = require('./keyboard');
// const player = require('../node_modules/play-sound')(opts = {});

// Основной класс игры.
// Тут будут все настройки, проверки, запуск.

class Game {
  constructor({ trackWidth, trackHeight, score = 0 }) {
    this.trackWidth = trackWidth;
    this.trackHeight = trackHeight;
    // this.trackLength = trackLength;
    // this.boomerang = new Boomerang(this.hero, this.enemy);
    this.enemyList = [];
    this.generateEnemies();
    // this.enemy = new Enemy();
    this.herois = new Hero({ boomerang: new Boomerang() });
    this.view = new View();
    this.track = [];
    this.regenerateTrack();
    this.score = score;
  }

  generateEnemies() {
    for (let i = 0; i < this.trackHeight; i += 1) {
      this.enemyList.push(new Enemy({ x: 0, y: i }));
    }
  }

  addEnemiesToTrack() {
    this.enemyList.forEach((enemy) => {
      this.track[enemy.position.y][enemy.position.x] = enemy.skin;
    });
  }

  controlEnemies() {
    this.enemyList.forEach((enemy, index) => {
      if (enemy.position.x > 0) {
        enemy.moveLeft();
      } else {
        this.enemyList[index] = new Enemy({ x: 0, y: index });
      }
      this.check(enemy, index);
    });
  }

  regenerateTrack() {
    // Сборка всего необходимого (герой, враг(и), оружие)
    // в единую структуру данных
    this.track = Array.from({ length: this.trackHeight }, () => [
      ...new Array(this.trackWidth).fill('  '),
    ]);
    this.track[this.herois.position.y][this.herois.position.x] =
      this.herois.skin;
    this.addEnemiesToTrack();
    // this.track[this.enemy.position.y][this.enemy.position.x] = this.enemy.skin;
    this.track[this.herois.boomerang.position.y][
      this.herois.boomerang.position.x
    ] = this.herois.boomerang.skin;
  }

  check(enemy, index) {
    if (
      this.herois.position.x === enemy.position.x &&
      this.herois.position.y === enemy.position.y
    ) {
      this.herois.die();
    }
    if (
      this.herois.boomerang.position.x >= enemy.position.x &&
      this.herois.boomerang.position.y === enemy.position.y &&
      !this.herois.hasBoomerang
    ) {
      setTimeout(() => {
        // player.play('src/sounds/exclamation-of-pain.wav');
        enemy.die();
        // this.enemy = null;
        this.enemyList[index] = new Enemy({ x: 0, y: index });
      }, 10);
    }
  }

  play() {
    console.log(this.herois);
    // const speed = Math.random() * 100 + 200;
    runInteractiveConsole(this.herois, this.track);
    this.id = setInterval(() => {
      // Let's play!
      // this.enemy.moveLeft();
      // this.check();
      this.controlEnemies();
      this.regenerateTrack();
      this.view.render(this.track);
    }, 80);
  }
}

module.exports = Game;

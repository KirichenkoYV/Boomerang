// Основной файл.
// Запускает игру.
const Game = require('./src/Game');

// Инициализация игры с настройками.
const game = new Game({
  // trackLength: 30,
  trackWidth: 30,
  trackHeight: 6,
});

// Запуск игры.
game.play();

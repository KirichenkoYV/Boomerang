// Умеешь работать с keypress? Попробуй разобраться в этом файле.
// Вместо keypress можно использовать и стандартный readline.
// Главное не используй всё вместе!

const keypress = require('keypress');
// const Hero = require('./game-models/Hero');
// const Boomerang = require('./game-models/Boomerang');

// Управление.
// Настроим соответствия нажатий на клавиши и действий в игре.

const keyboard = {
  left: (hero) => hero.moveLeft(),
  right: (hero) => hero.moveRight(),
  space: (hero) => hero.attack(),
  up: (hero) => hero.moveUp(),
  down: (hero) => hero.moveDown(),
  // r: () => console.log('r'),
  // t: () => console.log('t'),
  // y: () => console.log('y'),
};

// Какая-то функция.


function runInteractiveConsole(hero, track) {
  keypress(process.stdin);
  process.stdin.on('keypress', (ch, key) => {
    if (key) {
      // Вызывает команду, соответствующую нажатой кнопке.
      if (key.name in keyboard) {

        switch (key.name) {
          case 'right':
            if (hero.position.x < track[0].length - 2) {
              keyboard[key.name](hero);
            }
            break;
          case 'down':
            if (hero.position.y < track.length - 1) {
              keyboard[key.name](hero);
            }
            break;
          default:
            keyboard[key.name](hero);
        }
      }
      // Прерывание программы.
      if (key.ctrl && key.name === 'c') {
        process.exit();
      }
    }
  });
  process.stdin.setRawMode(true);
}

// Давай попробуем запустить этот скрипт!

// runInteractiveConsole();

module.exports = runInteractiveConsole;

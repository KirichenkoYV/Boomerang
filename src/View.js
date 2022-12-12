const Game = require('./Game');
// Сделаем отдельный класс для отображения игры в консоли.

class View {
  render(track) {
    const yourTeamName = 'Ninjaaaa';


    // Тут всё рисуем.
    console.clear();
    console.log(track.map((row) => row.join('')).join('\n'));
    console.log('\n\n');
    console.log(`Created by "${yourTeamName}" with love`);
  }
}

module.exports = View;

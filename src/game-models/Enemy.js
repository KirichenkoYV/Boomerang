// Враг.

class Enemy {
  constructor(position) {
    this.generateSkin();
    this.position = position;
    this.generatePosition();
  }

  generateSkin() {
    const skins = [
      '👾',
      '💀',
      '👹',
      '👻',
      '👽',
      '👿',
      '💩',
      '🤡',
      '🤺',
      '🧛',
      '🧟',
      '🎃',
    ];
    this.skin = skins[Math.floor(Math.random() * skins.length)];
  }

  generatePosition() {
    const rndPosition = 15 - 0.5 + Math.random() * (29 - 15 + 1);
    this.position.x = Math.round(rndPosition);
  }

  moveLeft() {
    this.position -= 1;
  }

  die() {
    this.position = '?';
    console.log('Враг уничтожен!');
  }
}

module.exports = Enemy;

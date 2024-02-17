export default class Character {
  constructor(name) {
    if (name.length > 10 || name.length < 2) {
      throw new Error('Имя должно содержать от 2 до 10 символов.');
    }
    this.name = name;
    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (this.health === 0) {
      throw new Error('HP персонажа равно 0!');
    }
    this.level += 1;
    this.attack += this.attack * 0.2;
    this.defence += this.defence * 0.2;
    this.health = 100;
  }

  damage(points) {
    if (this.health <= 0) {
      throw new Error('HP персонажа уже равно 0!');
    }
    this.health -= points * (1 - this.defence / 100);
  }
}

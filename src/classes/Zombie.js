import Character from './Character';

export default class Zombie extends Character {
  constructor(name, type) {
    if (type !== 'Zombie') {
      throw new Error('Создать этого персонажа можно только с типом Zombie!');
    }
    super(name);
    this.type = type;
    this.attack = 40;
    this.defence = 10;
  }
}

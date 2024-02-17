import Character from './Character';

export default class Daemon extends Character {
  constructor(name, type) {
    if (type !== 'Daemon') {
      throw new Error('Создать этого персонажа можно только с типом Daemon!');
    }
    super(name);
    this.type = type;
    this.attack = 10;
    this.defence = 40;
  }
}

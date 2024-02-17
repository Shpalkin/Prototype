import Character from './Character';

export default class Swordsman extends Character {
  constructor(name, type) {
    if (type !== 'Swordsman') {
      throw new Error('Создать этого персонажа можно только с типом Swordsman!');
    }
    super(name);
    this.type = type;
    this.attack = 40;
    this.defence = 10;
  }
}

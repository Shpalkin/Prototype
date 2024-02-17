import Character from './Character';

export default class Bowerman extends Character {
  constructor(name, type) {
    if (type !== 'Bowerman') {
      throw new Error('Создать этого персонажа можно только с типом Bowerman!');
    }
    super(name);
    this.type = type;
    this.attack = 25;
    this.defence = 25;
  }
}

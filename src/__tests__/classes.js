import Daemon from '../classes/Daemon';
import Bowerman from '../classes/Bowerman';

test('damage test', () => {
  const daemonPlayer = new Daemon('User1', 'Daemon');
  const bowermanPlayer = new Bowerman('User2', 'Bowerman');
  bowermanPlayer.damage(daemonPlayer.attack);
  expect(bowermanPlayer.health).toEqual(92.5);
  bowermanPlayer.health = 0;
  expect(() => {
    bowermanPlayer.damage(daemonPlayer.attack);
  }).toThrow();
});

test('lvlup test', () => {
  const daemonPlayer = new Daemon('User1', 'Daemon');
  daemonPlayer.levelUp();
  expect(daemonPlayer.attack).toEqual(12);
  daemonPlayer.health = 0;
  expect(() => {
    daemonPlayer.levelUp();
  }).toThrow();
});

test('daemonPlayer type', () => {
  expect(() => {
    const daemonPlayer = new Daemon('User1', 'Daemon123');
  }).toThrow();
});

test('bowermanPlayer type', () => {
  expect(() => {
    const bowermanPlayer = new Bowerman('User2', 'Bowerman123');
  }).toThrow();
});

test('character creation', () => {
  expect(() => {
    const daemonPlayer = new Daemon('U', 'Daemon');
  }).toThrow();
});

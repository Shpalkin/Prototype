// Загрузка классов персонажей

import Daemon from './classes/Daemon';
import Bowerman from './classes/Bowerman';
import Swordsman from './classes/Swordsman';
import Magician from './classes/Magician';
import Undead from './classes/Undead';
import Zombie from './classes/Zombie';

// Инициализация персонажей

const daemonPlayer = new Daemon('User1', 'Daemon');
console.log(`Игрок ${daemonPlayer.name} инициализирован:`, daemonPlayer);

const bowermanPlayer = new Bowerman('User2', 'Bowerman');
console.log(`Игрок ${bowermanPlayer.name} инициализирован:`, bowermanPlayer);

const swordsmanPlayer = new Swordsman('User3', 'Swordsman');
console.log(`Игрок ${swordsmanPlayer.name} инициализирован:`, swordsmanPlayer);

const magicianPlayer = new Magician('User4', 'Magician');
console.log(`Игрок ${magicianPlayer.name} инициализирован:`, magicianPlayer);

const undeadPlayer = new Undead('User5', 'Undead');
console.log(`Игрок ${undeadPlayer.name} инициализирован:`, undeadPlayer);

const zombiePlayer = new Zombie('User6', 'Zombie');
console.log(`Игрок ${zombiePlayer.name} инициализирован:`, zombiePlayer);

// игрок User1 (Daemon) наносит урон игроку User2 (Bowerman)
bowermanPlayer.damage(daemonPlayer.attack);
console.log(`[BATTLE] Состояние игрока ${bowermanPlayer.name}:`, bowermanPlayer);
console.log(`[BATTLE] Состояние игрока ${daemonPlayer.name}:`, daemonPlayer);

// игрок User1 (Daemon) получает повышение уровня
daemonPlayer.levelUp();
console.log(`[LVLUP] Состояние игрока ${daemonPlayer.name}:`, daemonPlayer);

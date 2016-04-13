import Race from '../races/Race';

import FeyHound from '../races/FeyHound';
import FeyCorgi from '../races/FeyHounds/FeyCorgi';
import FeyNewf from '../races/FeyHounds/FeyNewf';

import Dwarf from '../races/Dwarf';
import HillDwarf from '../races/Dwarves/HillDwarf';
import MountainDwarf from '../races/Dwarves/MountainDwarf';

import Elf from '../races/Elf';
import HighElf from '../races/Elves/HighElf';
import WoodElf from '../races/Elves/WoodElf';
import DarkElf from '../races/Elves/DarkElf';

import Halfling from '../races/Halfling';
import Lightfoot from '../races/Halflings/Lightfoot';
import Stout from '../races/Halflings/Stout';

import Human from '../races/Human';

import Dragonborne from '../races/Dragonborne.js';

import Gnome from '../races/Gnome.js';
import ForestGnome from '../races/Gnomes/ForestGnome.js';
import RockGnome from '../races/Gnomes/RockGnome.js';

import HalfElf from '../races/HalfElf.js';

import HalfOrc from '../races/HalfOrc.js';

import Tiefling from '../races/Tiefling.js';

var RaceConstants = {
	FEYHOUND: 0,
	DWARF: 1,
	ELF: 2,
	HALFLING: 3,
	HUMAN: 4,
	DRAGONBORNE: 5,
	GNOME: 6,
	HALFELF: 7,
	HALFORC: 8,
	TIEFLING: 9,
	DefaultRace: Race,
	races: [FeyHound, Dwarf, Elf, Halfling, Human, Dragonborne, Gnome, HalfElf, HalfOrc, Tiefling],
	subraces: [
		[FeyCorgi, FeyNewf],
		[HillDwarf, MountainDwarf],
		[HighElf, WoodElf, DarkElf],
		[Lightfoot, Stout],
		[],
		[],
		[ForestGnome,RockGnome],
		[],
		[],
		[],
		[]
  ]
}

export default RaceConstants;
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

var RaceConstants = {
	FEYHOUND: 0,
	DWARF: 1,
	ELF: 2,
	HALFLING: 3,
	races: [FeyHound, Dwarf, Elf, Halfling],
	subraces: [
		[FeyCorgi, FeyNewf],
		[HillDwarf, MountainDwarf],
		[HighElf, WoodElf, DarkElf],
		[Lightfoot, Stout],
		[]
  ]
}

export default RaceConstants;
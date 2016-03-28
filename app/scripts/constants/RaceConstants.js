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

var RaceConstants = {
	FEYHOUND: 0,
	DWARF: 1,
	ELF: 2,
	races: [FeyHound, Dwarf, Elf],
	subraces: [
		[FeyCorgi, FeyNewf],
		[HillDwarf, MountainDwarf],
		[HighElf, WoodElf, DarkElf],
		[]
  ]
};

export default RaceConstants;
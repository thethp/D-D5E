import FeyHound from '../races/FeyHound';
import FeyCorgi from '../races/FeyHounds/FeyCorgi';
import FeyNewf from '../races/FeyHounds/FeyNewf';

import Dwarf from '../races/Dwarf';
import HillDwarf from '../races/Dwarves/HillDwarf';
import MountainDwarf from '../races/Dwarves/MountainDwarf';

var RaceConstants = {
	FEYHOUND: 0,
	DWARF: 1,
  	races: [FeyHound, Dwarf],
  	subraces: [
  		[FeyCorgi, FeyNewf],
  		[HillDwarf, MountainDwarf],
  		[]
  	]
};

export default RaceConstants;
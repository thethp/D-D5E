import FeyHound from '../races/FeyHound';
import FeyCorgi from '../races/FeyHounds/FeyCorgi';
import FeyNewf from '../races/FeyHounds/FeyNewf';

var RaceConstants = {
	FEYHOUND: 0,
  	races: [FeyHound],
  	subraces: [
  		[FeyCorgi, FeyNewf],
  		[]
  	]
};

export default RaceConstants;
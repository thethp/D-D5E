import WeaponConstants from '../../constants/WeaponConstants';
import Elf from '../Elf';

class WoodElf extends Elf {

	constructor() {
		super();
		this.g_raceName = 'Wood Elf';
		this.g_fileName = 'woodelf';
		this.g_speed = 35;
		this.g_features.push(
			'Mask of the Wild: You can attempt to hide even when you are only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena'
		);
		this.g_wisdom += 1;
		this.g_proficientWeapons.push(
			WeaponConstants.LONGSWORD, 
			WeaponConstants.SHORTSWORD, 
			WeaponConstants.LONGBOW, 
			WeaponConstants.SHORTBOW
		);
	}
}

export default WoodElf;
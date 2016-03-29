import WeaponConstants from '../../constants/WeaponConstants';
import Elf from '../Elf';

class DarkElf extends Elf {

	constructor() {
		super();
		this.g_raceName = 'Dark Elf';
		this.g_fileName = 'darkelf';
		this.g_speed = 35;
		this.g_features.push(
			'Superior Darkvision: Your darkvision has a radius of 120 feet',
			'Sunlight Sensitivity: You have disadvantage on attack rolls and wisdom [perception] checks that rely on sight when you or the target are in direct sunlight',
			'Drow Magic: You know the dancing lights cantrip at level 3 can cast faerie fire once per day and at level 5 can cast darkness once per day - all using charisma'
		);
		this.g_charisma += 1;
		this.g_proficientWeapons.push(
			WeaponConstants.RAPIER, 
			WeaponConstants.SHORTSWORD, 
			WeaponConstants.CROSSBOW
		);
	}
}

export default DarkElf;
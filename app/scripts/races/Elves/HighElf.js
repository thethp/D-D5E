import WeaponConstants from '../../constants/WeaponConstants';
import Elf from '../Elf';

class HighElf extends Elf {

	constructor() {
		super();
		this.g_raceName = 'High Elf';
		this.g_fileName = 'highelf';
		this.g_features.push(
			'Cantrip: You get one cantrip of your choice from the wizard spell list. Intelligence is your spellcasting ability for it',
			'Extra Language: You can speak, read, and write one extra language of your choice'
		);
		this.g_intelligence += 1;
		this.g_proficientWeapons.push(
			WeaponConstants.LONGSWORD, 
			WeaponConstants.SHORTSWORD, 
			WeaponConstants.LONGBOW, 
			WeaponConstants.SHORTBOW
		);
	}
}

export default HighElf;
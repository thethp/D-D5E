import AppDispatcher from '../dispatcher/AppDispatcher';
import appConstants from '../constants/AppConstants';
import RaceConstants from '../constants/RaceConstants';
var objectAssign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

var _store = {
  char_name: 'Traveler',
  race: new RaceConstants.DefaultRace(),
  level: 1,
  base_hp: 0,
  base_strength: 0,
  base_dexterity: 0,
  base_constitution: 0,
  base_intelligence: 0,
  base_wisdom: 0,
  base_charisma: 0,
  skills: {
    acrobatics: {
      display_name: 'Acrobatics',
      proficient: false,
      ability: 'dexterity'
    },
    animal_handling: {
      display_name: 'Animal Handling',
      proficient: false,
      ability: 'wisdom'
    },
    arcana: {
      display_name: 'Arcana',
      proficient: false,
      ability: 'intelligence'
    },
    athletics: {
      display_name: 'Athletics',
      proficient: false,
      ability: 'strength'
    },
    deception: {
      display_name: 'Deception',
      proficient: false,
      ability: 'charisma'
    },
    history: {
      display_name: 'History',
      proficient: false,
      ability: 'intelligence'
    },
    insight: {
      display_name: 'Insight',
      proficient: false,
      ability: 'wisdom'
    },
    intimidation: {
      display_name: 'Intimidation',
      proficient: false,
      ability: 'charisma'
    },
    investigation: {
      display_name: 'Investigation',
      proficient: false,
      ability: 'intelligence'
    },
    medicine: {
      display_name: 'Medicine',
      proficient: false,
      ability: 'wisdom'
    },
    nature: {
      display_name: 'Nature',
      proficient: false,
      ability: 'intelligence'
    },
    perception: {
      display_name: 'Perception',
      proficient: false,
      ability: 'wisdom'
    },
    performance: {
      display_name: 'Performance',
      proficient: false,
      ability: 'charisma'
    },
    persuasion: {
      display_name: 'Persuasion',
      proficient: false,
      ability: 'charisma'
    },
    religion: {
      display_name: 'Religion',
      proficient: false,
      ability: 'intelligence'
    },
    sleight_of_hand: {
      display_name: 'Sleight of Hand',
      proficient: false,
      ability: 'dexterity'
    },
    stealth: {
      display_name: 'Stealth',
      proficient: false,
      ability: 'dexterity'
    },
    surivival: {
      display_name: 'Survival',
      proficient: false,
      ability: 'wisdom'
    }
  }
}

//UPDATE FUNCTIONS
var updateCharName = function(name) { _store.char_name = name; }
var updateCharRace = function(race) { _store.race = new race(); }
var updateCharLevel = function(level) { _store.level = level; }
var updateSkills = function(skills) { _store.skills = skills; }
var updateBaseHP = function(hp) { _store.base_hp = hp; }
var updateBaseStrength = function(strength) { _store.base_strength = strength; }
var updateBaseDexterity = function(dexterity) { _store.base_dexterity = dexterity; }
var updateBaseConstitution = function(constitution) { _store.base_constitution = constitution; }
var updateBaseIntelligence = function(intelligence) { _store.base_intelligence = intelligence; }
var updateBaseWisdom = function(wisdom) { _store.base_wisdom = wisdom; }
var updateBaseCharisma = function(charisma) { _store.base_charisma = charisma; }


//HELPER FUNCTIONS
var modStat = function(_stat) { return Math.floor((_stat-10)/2); }

const CharacterStore = objectAssign({}, EventEmitter.prototype, {
	addChangeListener: function(cb){
    this.on(CHANGE_EVENT, cb);
  },

  removeChangeListener: function(cb){
    this.removeListener(CHANGE_EVENT, cb);
  },

	getCharName: function() { return _store.char_name; },
  getCharRace: function() { return _store.race; },
  getCharLevel: function() { return _store.level; },
  getBaseStrength: function() { return _store.base_strength; },
  getBaseDexterity: function() { return _store.base_dexterity; },
  getBaseConstitution: function() { return _store.base_constitution; },
  getBaseIntelligence: function() { return _store.base_intelligence; },
  getBaseWisdom: function() { return _store.base_wisdom; },
  getBaseCharisma: function() { return _store.base_charisma; },

  //CUSTOM GETS
  getHP: function() {
    //todo: add class HP to this
    let raceHP = _store.race.getHitPointMod(_store.level);

    return _store.base_hp + raceHP;
  },

  getSkills() {
    let resultSkills = _store.skills;

    for(let skill in _store.race.proficientSkills) {
      if(resultSkills[skill].proficient != true) {
        resultSkills[skill].proficient = _store.race.proficientSkills[skill]
      }
    }

    return resultSkills;
  },

  resetSkills() {
    for(let skill in _store.skills) {
      _store.skills[skill].proficient = false;
    }
  },

  getProficiencyBonus() {

    if(this.getCharLevel() < 5) {
      return 2;
    } else if (this.getCharLevel() < 9) {
      return 3;
    } else if (this.getCharLevel() < 13) {
      return 4;
    } else if (this.getCharLevel() < 17) {
      return 5;
    } else {
      return 6;
    }
  },

  getStrength: function(_wantMod) {
    //todo: add class strength to this
    _wantMod = !_wantMod ? false : _wantMod;
    let raceStrength = _store.race.strength;
    let baseStrength = _store.base_strength;

    return _wantMod ? modStat(raceStrength + baseStrength) : (raceStrength+baseStrength);
  },

  getDexterity: function(_wantMod) {
    //todo: add class dexterity to this
    _wantMod = !_wantMod ? false : _wantMod;
    let raceDexterity = _store.race.dexterity;
    let baseDexterity = _store.base_dexterity;

    return _wantMod ? modStat(raceDexterity + baseDexterity) : (raceDexterity+baseDexterity);
  },

  getConstitution: function(_wantMod) {
    //todo: add class ionstitution to this
    _wantMod = !_wantMod ? false : _wantMod;
    let raceConstitution = _store.race.constitution;
    let baseConstitution = _store.base_constitution;

    return _wantMod ? modStat(raceConstitution + baseConstitution) : (raceConstitution+baseConstitution);
  },

  getIntelligence: function(_wantMod) {
    //todo: add class intelligence to this
    _wantMod = !_wantMod ? false : _wantMod;
    let raceIntelligence = _store.race.intelligence;
    let baseIntelligence = _store.base_intelligence;

    return _wantMod ? modStat(raceIntelligence + baseIntelligence) : (raceIntelligence+baseIntelligence);
  },

  getWisdom: function(_wantMod) {
    //todo: add class wisdom to this
    _wantMod = !_wantMod ? false : _wantMod;
    let raceWisdom = _store.race.wisdom;
    let baseWisdom = _store.base_wisdom;

    return _wantMod ? modStat(raceWisdom + baseWisdom) : (raceWisdom+baseWisdom);
  },

  getCharisma: function(_wantMod) {
    //todo: add class charisma to this
    _wantMod = !_wantMod ? false : _wantMod;
    let raceCharisma = _store.race.charisma;
    let baseCharisma = _store.base_charisma;

    return _wantMod ? modStat(raceCharisma + baseCharisma) : (raceCharisma+baseCharisma);
  },

  getStats: function(_wantMod) {

    return {
      strength: this.getStrength,
      dexterity: this.getDexterity,
      constitution: this.getConstitution,
      intelligence: this.getIntelligence,
      wisdom: this.getWisdom,
      charisma: this.getCharisma
    }
  }

});

AppDispatcher.register(function(payload){
  var action = payload.action;

  switch(action.actionType){

    case appConstants.UPDATE_CHAR_NAME:
      updateCharName(action.data);
      CharacterStore.emit(CHANGE_EVENT);
      break;

    case appConstants.UPDATE_CHAR_RACE:
      CharacterStore.resetSkills();
      updateCharRace(action.data);
      CharacterStore.emit(CHANGE_EVENT);
      break;

    case appConstants.UPDATE_CHAR_LEVEL:
      updateCharLevel(action.data);
      CharacterStore.emit(CHANGE_EVENT);
      break;

    case appConstants.UPDATE_BASE_HP:
      updateBaseHP(action.data);
      CharacterStore.emit(CHANGE_EVENT);
      break;

    case appConstants.UPDATE_SKILLS:
      updateSkills(action.data);
      CharacterStore.emit(CHANGE_EVENT);
      break;

    case appConstants.UPDATE_STRENGTH:
      if(action.data) { updateBaseStrength(action.data); }
      CharacterStore.emit(CHANGE_EVENT);
      break;

    case appConstants.UPDATE_DEXTERITY:
      if(action.data) { updateBaseDexterity(action.data); }
      CharacterStore.emit(CHANGE_EVENT);
      break;

    case appConstants.UPDATE_CONSTITUTION:
      if(action.data) { updateBaseConstitution(action.data); }
      CharacterStore.emit(CHANGE_EVENT);
      break;

    case appConstants.UPDATE_INTELLIGENCE:
      if(action.data) { updateBaseIntelligence(action.data); }
      CharacterStore.emit(CHANGE_EVENT);
      break;

    case appConstants.UPDATE_WISDOM:
      if(action.data) { updateBaseWisdom(action.data); }
      CharacterStore.emit(CHANGE_EVENT);
      break;

    case appConstants.UPDATE_CHARISMA:
      if(action.data) { updateBaseCharisma(action.data); }
      CharacterStore.emit(CHANGE_EVENT);
      break;

    default:
      return true;
  }
});

export default CharacterStore;

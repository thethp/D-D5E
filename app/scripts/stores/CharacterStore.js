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
  base_hp: 0
}

//UPDATE FUNCTIONS
var updateCharName = function(name) {

  _store.char_name = name;
}

var updateCharRace = function(race) {

  _store.race = new race();
}

var updateCharLevel = function(level) {

  _store.level = level;
}

var updateBaseHP = function(hp) {

  _store.base_hp = hp;
}

//HELPER FUNCTIONS
var modStat = function(_stat) {

  return Math.floor((_stat-10)/2);
}

const CharacterStore = objectAssign({}, EventEmitter.prototype, {
	addChangeListener: function(cb){
    this.on(CHANGE_EVENT, cb);
  },

  removeChangeListener: function(cb){
    this.removeListener(CHANGE_EVENT, cb);
  },

	getCharName: function() {

		return _store.char_name;
	},

  getCharRace: function() {

    return _store.race;
  },

  getCharLevel: function() {

    return _store.level;
  },

  //CUSTOM GETS
  getHP: function() {
    //todo: add class HP to this
    let raceHP = _store.race.getHitPointMod(_store.level);

    return _store.base_hp + raceHP;
  },

  getStrength: function(_wantMod) {
    //todo: add class strength to this and base strength
    let raceStrength = _store.race.strength;

    return _wantMod ? modStat(raceStrength) : raceStrength;
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

    default:
      return true;
  }
});

export default CharacterStore;
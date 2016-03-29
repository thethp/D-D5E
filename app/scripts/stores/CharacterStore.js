import AppDispatcher from '../dispatcher/AppDispatcher';
import appConstants from '../constants/AppConstants';
var objectAssign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

var _store = {
  charname: 'Traveler',
  race: ''
}

var updateCharName = function(name) {
  _store.charname = name;
}

var updateCharRace = function(race) {
  _store.race = race;
}

const CharacterStore = objectAssign({}, EventEmitter.prototype, {
	addChangeListener: function(cb){
    this.on(CHANGE_EVENT, cb);
  },

  removeChangeListener: function(cb){
    this.removeListener(CHANGE_EVENT, cb);
  },

	getCharName: function() {

		return _store.charname;
	},

  getCharRace: function() {

    return _store.race;
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

    default:
      return true;
  }
});

export default CharacterStore;
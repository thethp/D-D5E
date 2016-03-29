import AppDispatcher from '../dispatcher/AppDispatcher.js';
import AppConstants from '../constants/AppConstants.js';

var CharacterActions = {

  updateCharName: function(name){
    AppDispatcher.handleAction({
      actionType: AppConstants.UPDATE_CHAR_NAME,
      data: name
    });
  },

  updateCharRace: function(race){
    AppDispatcher.handleAction({
      actionType: AppConstants.UPDATE_CHAR_RACE,
      data: race
    });
  }
}

export default CharacterActions;
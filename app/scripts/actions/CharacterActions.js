import AppDispatcher from '../dispatcher/AppDispatcher.js';
import AppConstants from '../constants/AppConstants.js';

var CharacterActions = {
  updateCharName: function(name){
    AppDispatcher.handleAction({
      actionType: AppConstants.UPDATE_CHAR_NAME,
      data: name
    });
  }
};

export default CharacterActions;
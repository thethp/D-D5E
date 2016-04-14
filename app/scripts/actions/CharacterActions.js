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
  },

  updateCharLevel: function(level){
    AppDispatcher.handleAction({
      actionType: AppConstants.UPDATE_CHAR_LEVEL,
      data: level
    });
  },

  updateBaseHP: function(hp){
    AppDispatcher.handleAction({
      actionType: AppConstants.UPDATE_BASE_HP,
      data: hp
    });
  },

  updateBaseStrength: function(strength){
    AppDispatcher.handleAction({
      actionType: AppConstants.UPDATE_BASE_STRENGTH,
      data: strength
    });
  },

  updateBaseDexterity: function(dexterity){
    AppDispatcher.handleAction({
      actionType: AppConstants.UPDATE_DEXTERITY,
      data: dexterity
    });
  },

  updateBaseConstitution: function(constitution){
    AppDispatcher.handleAction({
      actionType: AppConstants.UPDATE_CONSTITUTION,
      data: constitution
    });
  },

  updateBaseIntelligence: function(intelligence){
    AppDispatcher.handleAction({
      actionType: AppConstants.UPDATE_INTELLIGENCE,
      data: intelligence
    });
  },

  updateBaseWisdom: function(wisdom){
    AppDispatcher.handleAction({
      actionType: AppConstants.UPDATE_WISDOM,
      data: wisdom
    });
  },

  updateBaseCharisma: function(charisma){
    AppDispatcher.handleAction({
      actionType: AppConstants.UPDATE_CHARISMA,
      data: charisma
    });
  }

}

export default CharacterActions;
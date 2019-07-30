import * as actionTypes from '../Actions/actionTypes';

export default (state = [], action) => {
    switch (action.type){
      case actionTypes.CREATE_NEW_PERSON:
      return [
        ...state,
        Object.assign({}, action.person)
      ];
      case actionTypes.REMOVE_PERSON:
      return state.filter((data, i) => i !== action.id);
      default:
            return state;
    }
  };
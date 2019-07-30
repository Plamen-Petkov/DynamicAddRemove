import * as actionTypes from './actionTypes';

export const createPerson = (person) => {
    return {
      type: actionTypes.CREATE_NEW_PERSON,
      person: person
    }
  };

export const deletePerson = (id) => {
    return {
        type: actionTypes.REMOVE_PERSON,
        id: id
    }
}
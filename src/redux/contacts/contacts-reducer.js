import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import shortid from 'shortid';
import actions from './contacts-actions';

const items = createReducer([], {
  [actions.addContact]: (state, { payload }) => {
    state.find(
      contact => payload.name.toLowerCase() === contact.name.toLowerCase(),
    )
      ? alert(`${payload.name} is alredy in contacts`)
      : state.push({
          id: shortid.generate(),
          name: payload.name,
          number: payload.number,
        });
  },
  [actions.deleteContacts]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});
const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});

import { combineReducers } from 'redux';
import actions from './contact-actions';
import { createReducer } from '@reduxjs/toolkit';

const initialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactsReducer = createReducer([...initialState], {
  [actions.addContact]: (state, { payload }) => {
    const isInContacts = state.some(contact => contact.name === payload.name);
    if (!isInContacts) {
      return [...state, payload];
    }
    alert(`${payload.name} is already in contacts`);
    return state;
  },
  [actions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
  [actions.test]: (state, { payload }) => {
    console.log('привет еще чуть чуть осталось:', payload);
  },
});

const filterReducer = createReducer('', {
  [actions.filterContacts]: (_, { payload }) => payload,
});

const reducer = combineReducers({
  items: contactsReducer,
  filter: filterReducer,
});

export default reducer;

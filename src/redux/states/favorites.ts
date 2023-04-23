import {LocalStorageTypes, Person} from '@/models';
import {getLocalStorage, setLocalStorage} from '@/utilities';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState: Person[] = [];

const getInitialState = () => {
  const state = getLocalStorage(LocalStorageTypes.FAVORITES);
  return state ? JSON.parse(state as string) as Person[] : initialState;
}

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: getInitialState(),
  reducers: {
    addFavorite: (state, action: PayloadAction<Person>) => {
      state.push(action.payload);
      setLocalStorage(LocalStorageTypes.FAVORITES, state);
    },
    removeFavorite: (state, action: PayloadAction<Person>) => {
      const newState = state.filter(person => person.id !== action.payload.id);
      setLocalStorage(LocalStorageTypes.FAVORITES, newState);
      return newState;
    }
  }
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;

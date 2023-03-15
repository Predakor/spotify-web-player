import { createSlice } from '@reduxjs/toolkit';
import { AppState } from 'store';
import { SearchResponses } from 'types/spotifyTypes';
import { saveState } from './localStorage';

export const recentSearchSlice = createSlice({
  name: 'recentSearches',
  initialState: [] as SearchResponses[],
  reducers: {
    addSearch: (state, action: { payload: SearchResponses }) => {
      state.unshift(action.payload);
      saveState({ search: state });
    },
    removeSearch: (state, action: { payload: number }) => {
      state.splice(action.payload);
      saveState({ search: state });
    },
  },
});

export const { addSearch, removeSearch } = recentSearchSlice.actions;
export const selectRecentSearches = (state: AppState) => state.search;

export default recentSearchSlice.reducer;

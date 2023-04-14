import { createSlice } from '@reduxjs/toolkit';
import { AppState } from 'store';
import { SearchResponse } from 'types/spotifyTypes';
import { saveState } from './localStorage';

export const recentSearchSlice = createSlice({
  name: 'recentSearches',
  initialState: [] as SearchResponse[],
  reducers: {
    addSearch: (state, action: { payload: SearchResponse }) => {
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

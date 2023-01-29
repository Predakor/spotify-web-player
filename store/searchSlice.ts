import { createSlice } from '@reduxjs/toolkit';
import { AppState } from 'store';

type searchType =
  | 'album'
  | 'artist'
  | 'playlist'
  | 'track'
  | 'show'
  | 'episode';

type SearchSliceType = {
  query: string | '';
  types: searchType[] | undefined;
  data: SpotifyApi.SearchResponse | undefined;
  status: 'pending' | 'completed' | undefined;
};

const initialState = {
  query: '',
  types: undefined,
  status: undefined,
  data: undefined,
};

export const searchSlice = createSlice({
  name: 'search',
  initialState: initialState as SearchSliceType,
  reducers: {
    setQuery: (state, action: { payload: string }) => {
      state.query = action.payload;
    },
    setTypes: (state, action: { payload: searchType[] }) => {
      state.types = action.payload;
    },
    setData: (state, action: { payload: SpotifyApi.SearchResponse }) => {
      state.data = action.payload;
    },
    setStatus: (state, action: { payload: 'pending' | 'complete' }) => {
      state.query = action.payload;
    },
    startSearch: (
      state,
      action: { payload: Pick<SearchSliceType, 'query' | 'types'> }
    ) => {
      const { query, types } = action.payload;
      state.query = query;
      state.types = types;
      state.data = undefined;
      state.status = 'pending';
    },
    endSearch: (state, action: { payload: SpotifyApi.SearchResponse }) => {
      state.data = action.payload;
      state.status = 'completed';
    },
  },
});

export const {
  setData,
  setQuery,
  setStatus,
  setTypes,
  startSearch,
  endSearch,
} = searchSlice.actions;
export const selectSearch = (state: AppState) => state.search;

export default searchSlice.reducer;

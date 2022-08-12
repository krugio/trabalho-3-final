import { createSlice } from '@reduxjs/toolkit';
import { Example } from './types';

const initialState: Example = { title: '', uid: '' };

const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    create(state, action) {
      return action.payload;
    },
    clear() {
      return initialState;
    },
  },
});

export const { create, clear } = exampleSlice.actions;
export default exampleSlice.reducer;

import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { Example } from './types';

const adapter = createEntityAdapter<Example>({
  selectId: (item) => item.uid,
});

export const { selectAll, selectById } = adapter.getSelectors((state: RootState) => state.examples);

const examplesSlice = createSlice({
  name: 'examples',
  initialState: adapter.getInitialState(),
  reducers: {
    addOne: adapter.addOne,
    addMany: adapter.addMany,
    updateOne: adapter.updateOne,
  },
});

export const { addOne, addMany, updateOne } = examplesSlice.actions;
export default examplesSlice.reducer;

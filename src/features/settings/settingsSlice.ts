/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { QueryParams } from 'types';

const initialState: QueryParams = {
  amount: 10,
  difficulty: 'medium',
  questionType: 'boolean',
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    settingsSaved(state, action) {
      return action.payload;
    },
  },
});
export const { settingsSaved } = settingsSlice.actions;
export default settingsSlice.reducer;

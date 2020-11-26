/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Question, QueryParams } from 'types';
import { fetchFromApi } from 'api/questionsAPI';

type QuestionState = {
  questions: Question[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error?: string | null;
};

const initialState: QuestionState = {
  questions: [],
  status: 'idle',
  error: null,
};

export const fetchQuestions = createAsyncThunk(
  'questions/fetchQuestions',
  async (params: QueryParams) => {
    const response = await fetchFromApi(params);
    return response.results;
  },
);

const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuestions.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchQuestions.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.questions = action.payload;
      })
      .addCase(fetchQuestions.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default questionsSlice.reducer;

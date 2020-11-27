/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Question, QueryParams } from 'types';
import { fetchFromApi } from 'api/questionsAPI';
import { decode } from 'he';

type GameState = {
  questions: Question[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error?: string | null;
  currentQuestionId: Question['id'];
  correctAnswers: Question['id'][];
  wrongAnswers: Question['id'][];
  gameFinished: boolean;
  score: number;
};

const initialState: GameState = {
  questions: [],
  status: 'idle',
  error: null,
  currentQuestionId: 0,
  correctAnswers: [],
  wrongAnswers: [],
  gameFinished: false,
  score: 0,
};

export const fetchQuestions = createAsyncThunk(
  'game/fetchQuestions',
  async (params: QueryParams) => {
    const response = await fetchFromApi(params);
    return response.results;
  },
);

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    questionAnswered(state, action) {
      if (!state.gameFinished) {
        const id = state.currentQuestionId;
        let correctAnswer;
        // cast state.questions[id].correct_answer from string to boolean
        if (typeof action.payload === 'boolean') {
          correctAnswer = state.questions[id].correct_answer === 'true';
        } else {
          correctAnswer = state.questions[id].correct_answer;
        }

        if (action.payload === correctAnswer) {
          state.correctAnswers.push(id);
        } else {
          state.wrongAnswers.push(id);
        }

        state.currentQuestionId += 1;
      }
      // eslint-disable-next-line operator-linebreak
      state.gameFinished =
        state.currentQuestionId === state.questions.length - 1;
    },
    gameEnded(state) {
      state.score = state.correctAnswers.length;
    },
    gameRestarted(state) {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuestions.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(
        fetchQuestions.fulfilled,
        (state, action: PayloadAction<Question[]>) => {
          state.status = 'succeeded';
          state.questions = action.payload.map((question, index: number) => {
            return {
              ...question,
              id: index,
              correct_answer: question.correct_answer.toLowerCase(),
              question: decode(question.question),
              // answers: question.incorrect_answers.concat(question.correct_answer).sort(),
            };
          });
        },
      )
      .addCase(fetchQuestions.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { questionAnswered, gameEnded, gameRestarted } = gameSlice.actions;
export default gameSlice.reducer;

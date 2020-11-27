/* eslint-disable camelcase */
export type QueryParams = {
  amount: number;
  difficulty: 'easy' | 'medium' | 'hard';
  questionType: 'multiple' | 'boolean';
};

export type Question = {
  id: number;
  category: string;
  type: QueryParams['questionType'];
  difficulty: QueryParams['difficulty'];
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
  answers: string[]
};
export type Response = {
  response_code: number;
  results: Question[];
};

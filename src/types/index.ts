/* eslint-disable camelcase */
export type QueryParams = {
  amount: number;
  difficulty: 'easy' | 'medium' | 'hard';
  questionType: 'multiple' | 'boolean';
};

export type Question = {
  category: string;
  type: QueryParams['questionType'];
  difficulty: QueryParams['difficulty'];
  question: string;
  correct_answer: boolean;
  incorrect_answer: boolean[];
};
export type Response = {
  response_code: number;
  results: Question[];
};

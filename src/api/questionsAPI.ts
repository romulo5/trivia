import { QueryParams, Response } from 'types';

export const fetchFromApi = async ({
  amount,
  difficulty,
  questionType,
}: QueryParams) => {
  const baseUrl = 'https://opentdb.com/api.php?';
  const query = `amount=${amount}&difficulty=${difficulty}&type=${questionType}`;

  const response = await fetch(baseUrl + query);
  const result: Response = await response.json();
  return result;
};

import React from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { questionAnswered, gameEnded } from 'features/game/gameSlice';
import { QueryParams, Question } from 'types';
import { Ripple } from 'react-spinners-css';
import { decode } from 'he';

const Game = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const gameFinished: boolean = useSelector((state: RootStateOrAny) => {
    return state.game.gameFinished;
  });

  const question: Question = useSelector((state: RootStateOrAny) => {
    return state.game.questions[state.game.currentQuestionId];
  });

  const multipleAnswers: string[] = question?.incorrect_answers
    .concat(question?.correct_answer)
    .sort();

  const amount: number = useSelector((state: RootStateOrAny) => {
    return state.settings.amount;
  });

  const gameMode: QueryParams['questionType'] = useSelector(
    (state: RootStateOrAny) => {
      return state.settings.questionType;
    },
  );

  const isLoading = useSelector((state: RootStateOrAny) => {
    return state.game.status === 'loading';
  });
  const number = question?.id + 1;

  const handleClickBoolean = (answer: boolean) => {
    if (!gameFinished) {
      dispatch(questionAnswered(answer));
    } else {
      dispatch(gameEnded());
      history.push('/results');
    }
  };
  const handleClickMultiple = (answer: string) => {
    if (!gameFinished) {
      dispatch(questionAnswered(answer));
    } else {
      dispatch(gameEnded());
      history.push('/results');
    }
  };
  return (
    <>
      {isLoading ? (
        <Ripple color="gray" size={200} />
      ) : (
        <div className="flex flex-col justify-around items-center max-w-md h-60v">
          <div className="flex flex-col items-center">
            <h1 className="text-white text-2xl">{question?.category}</h1>
            <p className="text-gray-300">{`${number} of ${amount}`}</p>
          </div>

          <p className="text-white text-2xl text-center p-6 bg-gray-500 mx-2 rounded-md">
            {question?.question}
          </p>

          {gameMode === 'boolean' && (
            <div className="flex w-full justify-center">
              <button
                type="submit"
                className="p-6 bg-green-400 px-10 py-6 mt-4 mx-4 shadow-xl rounded-md "
                onClick={() => {
                  return handleClickBoolean(true);
                }}
              >
                <span className="text-2xl text-green-900">{'\u2713'} True</span>
              </button>
              <button
                type="submit"
                className="p-6 bg-red-400 px-10 py-6 mt-4 mx-4 shadow-xl rounded-md "
                onClick={() => {
                  return handleClickBoolean(false);
                }}
              >
                <span className="text-2xl text-green-900">
                  {'\u2717'} False
                </span>
              </button>
            </div>
          )}
          {gameMode === 'multiple'
            && multipleAnswers.map((answer) => {
              return (
                <div className="flex w-full justify-center">
                  <button
                    type="submit"
                    className="bg-green-400 px-4 py-4 mx-4 shadow-xl rounded-md w-full "
                    onClick={() => {
                      return handleClickMultiple(answer);
                    }}
                  >
                    <span className="text-xl text-green-900">{decode(answer)}</span>
                  </button>
                </div>
              );
            })}
        </div>
      )}
    </>
  );
};

export default Game;

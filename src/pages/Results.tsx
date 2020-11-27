import React from 'react';
import { useHistory } from 'react-router-dom';
import { RootStateOrAny, useSelector, useDispatch } from 'react-redux';
import { gameRestarted } from 'features/game/gameSlice';
import { Question } from 'types';
import Layout from 'containers/Layout';

const Results = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const score: number = useSelector((state: RootStateOrAny) => {
    return state.game.score;
  });

  const amount: number = useSelector((state: RootStateOrAny) => {
    return state.settings.amount;
  });
  const questions: Question[] = useSelector((state: RootStateOrAny) => {
    return state.game.questions;
  });
  const correct: number[] = useSelector((state: RootStateOrAny) => {
    return state.game.correctAnswers;
  });

  const restart = () => {
    dispatch(gameRestarted());
    history.push('/');
  };

  return (
    <Layout>
      <div className="flex flex-col items-center max-w-md h-90v ">
        <h1 className="text-white  text-2xl">{`You scored ${score} / ${amount}`}</h1>

        <p className="text-7xl text-gray-300 p-6">
          {`${((score / amount) * 100).toFixed(0)}%`}
        </p>

        <div className="text-left w-auto">
          <ol className="">
            {questions?.map((question) => {
              return (
                <li
                  className={`${
                    correct.includes(question.id)
                      ? 'text-white'
                      : ' text-red-300 '
                  } text-base text-justify py-2`}
                >
                  {` ${correct.includes(question.id) ? '\u2713' : '\u2717'} 
                      ${
                        question.question
                      } \u21E2 ${question.correct_answer.toLocaleUpperCase()}`}
                </li>
              );
            })}
          </ol>
        </div>
        <button
          type="submit"
          className="p-6 bg-blue-400 px-6 py-2 mt-4 shadow-xl rounded-mdv "
          onClick={() => {
            return restart();
          }}
        >
          Play Again ?
        </button>
      </div>
    </Layout>
  );
};

export default Results;

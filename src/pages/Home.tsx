import React from 'react';
import { useHistory } from 'react-router-dom';
import { RootStateOrAny, useSelector, useDispatch } from 'react-redux';
import SettingsModal from 'features/settings/SettingsModal';
import { fetchQuestions } from 'features/questions/questionsSlice';

import { QueryParams } from 'types';
import { useModal } from 'helpers/hooks';

const Home = () => {
  const { isModalOpen, toggleModal } = useModal(false);

  const settings: QueryParams = useSelector((state: RootStateOrAny) => {
    return state.settings;
  });
  const dispatch = useDispatch();

  const history = useHistory();

  const startQuiz = () => {
    dispatch(fetchQuestions(settings));
    history.push('/quiz');
  };

  return (
    <>
      {isModalOpen && <SettingsModal toggleModal={toggleModal} />}
      <div
        className={`flex flex-col justify-center items-center bg-gray-700 h-screen ${
          isModalOpen ? 'opacity-90' : ''
        }`}
      >
        <h1 className="text-white text-xl">Welcome to the Trivia Challenge</h1>
        <p className="text-gray-300 p-6">
          You be presented with True or False questions
        </p>
        <button
          className="transition  ease-in-out transform hover:scale-x-110
         text-white  font-bold  text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
          type="button"
          onClick={() => {
            return toggleModal();
          }}
        >
          quiz settings
        </button>

        <p className="text-gray-300">Can You score 100% ?</p>
        <button
          type="submit"
          className="p-6 bg-green-400 px-6 py-2 mt-4 shadow-xl rounded-mdv "
          onClick={() => {
            return startQuiz();
          }}
        >
          Begin
        </button>
      </div>
    </>
  );
};

export default Home;

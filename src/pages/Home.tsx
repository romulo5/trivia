import React from 'react';
import { useHistory } from 'react-router-dom';
import { RootStateOrAny, useSelector, useDispatch } from 'react-redux';
import SettingsModal from 'features/settings/SettingsModal';
import { fetchQuestions } from 'features/game/gameSlice';
import { QueryParams } from 'types';
import { useModal } from 'helpers/hooks';
import Layout from 'containers/Layout';

const Home = () => {
  const { isModalOpen, useToggleModal } = useModal(false);

  const toggleModal = useToggleModal;

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
      <Layout>
        <div
          className={`${
            isModalOpen ? 'opacity-10' : ''
          } flex flex-col justify-around items-center max-w-md h-60v `}
        >
          <div className="flex flex-col  items-center">
            <span className="text-9xl text-green-500">?</span>
            <h1 className="text-white text-xl">Trivia Challenge</h1>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-gray-300 text-2xl ">Can You score</p>
            <span className="text-5xl text-green-500">100%?</span>
          </div>
          <div className="flex flex-col">
            <button
              className="transition ease-in-out transform hover:scale-x-110
            text-white  text-sm mx-16 px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none "
              type="button"
              onClick={() => {
                return toggleModal();
              }}
            >
              change quiz settings
            </button>

            <button
              type="submit"
              className="p-6 text-2xl bg-green-400 px-6 py-2  text-green-900  shadow-xl rounded-md w-full"
              onClick={() => {
                return startQuiz();
              }}
            >
              Start
            </button>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;

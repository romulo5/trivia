import React, { useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { QueryParams } from 'types';
import { settingsSaved } from 'features/settings/settingsSlice';

type Props = {
  toggleModal: () => void;
};

const SettingsModal = ({ toggleModal }: Props) => {
  const settings: QueryParams = useSelector((state: RootStateOrAny) => {
    return state.settings;
  });

  const [amount, setAmount] = useState<QueryParams['amount']>(settings.amount);
  const [difficulty, setDifficulty] = useState<QueryParams['difficulty']>(
    settings.difficulty,
  );
  const [questionType, setQuestionType] = useState<QueryParams['questionType']>(
    settings.questionType,
  );

  const dispatch = useDispatch();

  const saveSettings = () => {
    dispatch(settingsSaved({ amount, difficulty, questionType }));
    toggleModal();
  };

  return (
    <div className="flex justify-center items-center fixed inset-0 z-50   ">
      <div className="flex flex-col items-start border-0 py-10 px-16 rounded-lg shadow-lg bg-gray-800  ">
        <span className="text-gray-400 text-sm border-b border-gray-400 mb-2">
          trivia options
        </span>

        <div id="questionsNumberSelector" className="flex w-full my-2">
          <label htmlFor="amount" className="flex items-center w-full">
            <span className="text-gray-300 pr-3">Number of questions</span>
            <select
              id="amount"
              className="flex-grow form-select bg-gray-900 text-white "
              value={amount}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                return setAmount(parseFloat(e.target.value));
              }}
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
            </select>
          </label>
        </div>

        <div id="difficultySelector" className="flex my-2 w-full">
          <label htmlFor="difficulty" className="flex items-center w-full   ">
            <span className="text-white pr-3 ">Difficulty</span>
            <select
              id="difficulty"
              className="flex-grow form-select bg-gray-900  text-white"
              value={difficulty}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                return setDifficulty(
                  e.target.value as QueryParams['difficulty'],
                );
              }}
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </label>
        </div>

        <div id="typeSelector" className="flex flex-col my-2">
          <div className="py-3 text-gray-300">
            <label
              htmlFor="question-boolean"
              className="inline-flex items-center "
            >
              <input
                type="radio"
                className="form-radio h-1 w-3 text-green-400"
                name="difficultyLevel"
                value="boolean"
                id="question-boolean"
                checked={questionType === 'boolean'}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  return setQuestionType(
                    e.target.value as QueryParams['questionType'],
                  );
                }}
              />
              <span className="ml-2 ">True or False</span>
            </label>
            <label
              htmlFor="question-multiple"
              className="inline-flex items-center ml-6"
            >
              <input
                type="radio"
                className="form-radio h-1 w-3 text-green-400"
                name="difficultyLevel"
                value="multiple"
                id="question-multiple"
                checked={questionType === 'multiple'}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  return setQuestionType(
                    e.target.value as QueryParams['questionType'],
                  );
                }}
              />
              <span className="ml-2">Multiple Choice</span>
            </label>
          </div>
        </div>
        <div className="flex w-full justify-end  border-t border-solid border-gray-300 rounded-b">
          <button
            className="transition duration-200 ease-in-out transform hover:scale-110
            text-white background-transparent pt-3 font-bold uppercase text-sm outline-none focus:outline-none "
            type="button"
            onClick={() => {
              return saveSettings();
            }}
          >
            save settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;

import { useEffect, useState } from 'react';

import { quiz_data } from '~/data';

const initState = {
  userType: '',
  showResult: false,
  questions: [],
  answers: [],
  previousAnswers: [],
};

const useAppState = () => {
  const [state, setState] = useState({ ...initState });

  useEffect(() => {
    const localState = JSON.parse(localStorage.getItem('state')!);

    setState((prevState) => ({
      ...prevState,
      ...localState,
      questions: localState?.questions.length ? localState.questions : quiz_data,
    }));
  }, [state.userType]);

  const handleStateChange = (newState: Question[] | boolean | string, type: string) => {
    setState((prevState) => ({
      ...prevState,
      [type]: newState,
    }));

    localStorage.setItem('state', JSON.stringify({ ...state, [type]: newState }));
  };

  return { ...state, handleStateChange };
};

export default useAppState;

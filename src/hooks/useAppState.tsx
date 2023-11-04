import { useEffect, useState } from 'react';

import { quiz_data } from '~/data';

const useAppState = () => {
  const [state, setState] = useState({
    userType: '',
    showResult: false,
    questions: [],
    answers: [],
    previousAnswers: [],
  });

  useEffect(() => {
    const localState = JSON.parse(localStorage.getItem('state')!);

    setState((prevState) => ({
      ...prevState,
      ...localState,
      questions: localState?.questions.length ? localState.questions : quiz_data,
    }));
  }, []);

  const handleUserType = (type: string) => {
    if (!type) {
      localStorage.removeItem('userType');
      setState((prevState) => ({
        ...prevState,
        userType: '',
      }));
      localStorage.setItem('state', JSON.stringify({ ...state, userType: '' }));
      return;
    }

    setState((prevState) => ({
      ...prevState,
      userType: type,
    }));

    localStorage.setItem('state', JSON.stringify({ ...state, userType: type }));
  };

  const handleStateChange = (newState: Question[] | boolean | string, type: string) => {
    setState((prevState) => ({
      ...prevState,
      [type]: newState,
    }));

    localStorage.setItem('state', JSON.stringify({ ...state, [type]: newState }));
  };

  return { ...state, handleStateChange, handleUserType };
};

export default useAppState;

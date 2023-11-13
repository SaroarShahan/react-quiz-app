import React, { useContext, useState } from 'react';

import Container from '~/components/Container';
import Button from '~/components/Button';
import Modal from '~/components/Modal';
import { AppContext } from '~/context/appContext';
import { useToggle } from '~/hooks/useToggle';
import Results from './Results';
import NoData from '~/components/NoData';
import QuestionsList from './QuestionsList';

const UserAnswers: React.FC = () => {
  const { questions, handleStateChange, showResult, userType, answers } = useContext(AppContext);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [checkedOption, setCheckedOption] = useState(0);
  const [newAnswers, setNewAnswers] = useState<Question[]>([]);
  const [modalToggle, setModalToggle] = useToggle();

  const handleQuestionNextChange = () => {
    setCurrentQuestion((prevState) => prevState + 1);
    setCheckedOption(0);
  };

  const handleQuestionSubmit = () => {
    handleStateChange(newAnswers, 'answers');
    setModalToggle();
  };

  const handleAnswerChange = (selectQuestion: Question, newAnswerId: number) => {
    const updatedAnswers = [...newAnswers];
    const existingIndex = newAnswers.findIndex((answer) => answer.id === selectQuestion.id);

    if (existingIndex !== -1) {
      updatedAnswers[existingIndex] = { ...selectQuestion, selectedAnswer: newAnswerId };
    } else {
      updatedAnswers.push({ ...selectQuestion, selectedAnswer: newAnswerId });
    }

    setCheckedOption(newAnswerId);
    setNewAnswers(updatedAnswers);
  };

  const handleShowResults = () => {
    handleStateChange(true, 'showResult');
    setModalToggle();
    setCurrentQuestion(0);
    setCheckedOption(0);
    setNewAnswers([]);
  };

  return (
    <>
      {showResult || userType === 'admin' ? (
        <Results />
      ) : (
        <Container>
          {!questions.length ? (
            <NoData title="No Data available" />
          ) : (
            <QuestionsList
              totalQuestions={questions.length}
              checkedOption={checkedOption}
              currentQuestion={currentQuestion}
              selectedCurrentQuestion={questions[currentQuestion]}
              onQuestionSubmit={handleQuestionSubmit}
              onQuestionNextChange={handleQuestionNextChange}
              onAnswerChange={handleAnswerChange}
            />
          )}
        </Container>
      )}

      <Modal isOpen={modalToggle} onClose={setModalToggle} className="max-w-md py-9 px-6">
        <Modal.Body className="flex flex-col text-center">
          <h3 className="text-4xl font-bold text-blue-500 mb-2">Done!</h3>
          <p className="text-lg mb-5">You have attempted {answers.length} questions in total.</p>
          <div>
            <Button onClick={handleShowResults}>Show Results</Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default UserAnswers;

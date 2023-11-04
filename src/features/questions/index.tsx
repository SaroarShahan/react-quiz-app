import React, { useContext, useState } from 'react';

import Container from '~/components/Container';
import { AppContext } from '~/context/appContext';
import AddQuestionFormModal from './AddQuestionFormModal';
import { useToggle } from '~/hooks/useToggle';
import QuestionCard from '~/components/QuestionCard';
import DeleteModalConfirmation from './DeleteModalConfirmation';

const AdminQuestions: React.FC = () => {
  const { questions, handleStateChange } = useContext(AppContext);
  const [toggleFormModal, setToggleFormModal] = useToggle();
  const [toggleDeleteModal, setToggleDeleteModal] = useToggle();
  const [selectedQuestion, setSelectedQuestion] = useState<Question | null>(null);
  const isUpdate = !!selectedQuestion;

  const handleUpdate = (data: Question) => {
    setSelectedQuestion(data);
    setToggleFormModal();
  };

  const handleOpenFormModal = () => {
    setToggleFormModal();
  };

  const handleCloseFormModal = () => {
    setToggleFormModal();
  };

  const handleOpenDeleteModal = (data: Question) => {
    setSelectedQuestion(data);
    setToggleDeleteModal();
  };

  const handleCloseDeleteModal = () => {
    setToggleDeleteModal();
  };

  const deleteQuestion = () => {
    const updatedQuestions = questions.filter((q) => q.id !== selectedQuestion!.id);

    handleStateChange(updatedQuestions, 'questions');
    handleCloseDeleteModal();
  };

  const handleSubmit = (data: QuestFormData) => {
    if (isUpdate) {
      console.log('dafsadf', selectedQuestion);
      const updatedQuestions = questions.map((question) => {
        if (question.id === selectedQuestion?.id) {
          return {
            ...question,
            question: data.question,
            options: data.options,
            answer: data.answer,
            selectedAnswer: data.selectedAnswer,
          };
        }

        return question;
      });

      handleStateChange(updatedQuestions, 'questions');
      handleCloseFormModal();
      setSelectedQuestion(null);
      return;
    }

    const updatedQuestion: Question = {
      id: questions.length + 1,
      question: data.question,
      options: data.options,
      answer: data.answer,
      selectedAnswer: data.selectedAnswer,
    };

    handleStateChange([...questions, updatedQuestion], 'questions');
    handleCloseFormModal();
  };

  return (
    <>
      <Container>
        <div className="flex justify-between items-center border-b border-gray-200 pb-4 mb-6">
          <h2 className="text-2xl font-bold">Admin Questions</h2>
          <button
            onClick={handleOpenFormModal}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
          >
            Add Question
          </button>
        </div>

        <div className="flex flex-col gap-4 mb-4">
          {questions.map((question, idx) => (
            <QuestionCard
              key={question.id}
              showActions
              data={question}
              idx={idx}
              onUpdate={handleUpdate}
              onDelete={handleOpenDeleteModal}
            />
          ))}
        </div>
      </Container>

      <AddQuestionFormModal
        isUpdate={isUpdate}
        isOpen={toggleFormModal}
        selectedQuestion={selectedQuestion}
        onClose={handleCloseFormModal}
        onSubmit={handleSubmit}
      />
      <DeleteModalConfirmation
        isOpen={toggleDeleteModal}
        onClose={handleCloseDeleteModal}
        onClick={deleteQuestion}
      />
    </>
  );
};

export default AdminQuestions;

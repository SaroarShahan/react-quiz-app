import React, { useContext, useState } from 'react';
import { AppContext } from '~/context/appContext';

const AdminQuestions: React.FC = () => {
  const { questions } = useContext(AppContext);
  const [newQuestions, setNewQuestions] = useState<Question[]>(questions);
  const [newQuestion, setNewQuestion] = useState<string>('');

  const addQuestion = () => {
    if (newQuestion) {
      const updatedQuestions: Question[] = [
        ...newQuestions,
        {
          id: newQuestions.length + 1,
          question: newQuestion,
          options: [],
          answer: 0,
          selectedAnswer: 0,
        },
      ];
      setNewQuestions(updatedQuestions);
      localStorage.setItem('questions', JSON.stringify(updatedQuestions));
      setNewQuestion('');
    }
  };

  const deleteQuestion = (id: number) => {
    const updatedQuestions: Question[] = newQuestions.filter((q) => q.id !== id);
    setNewQuestions(updatedQuestions);
    localStorage.setItem('questions', JSON.stringify(updatedQuestions));
  };

  return (
    <div className="admin-container max-w-md mx-auto mt-8">
      <h2 className="text-3xl font-bold mb-4">Admin Questions</h2>
      <div className="mb-4">
        <input
          type="text"
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
          placeholder="Enter a new question"
          className="border border-gray-300 rounded px-3 py-2 w-full"
        />
        <button
          onClick={addQuestion}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
        >
          Add Question
        </button>
      </div>

      <div className="mb-4">
        <ul>
          {questions.map((q) => (
            <li key={q.id} className="flex justify-between items-center mb-2">
              <span>{q.question}</span>
              <button
                onClick={() => deleteQuestion(q.id)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminQuestions;

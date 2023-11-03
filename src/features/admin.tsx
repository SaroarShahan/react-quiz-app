import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface Question {
  id: number;
  question: string;
}

const Questions: React.FC = () => {
  const initialQuestions: Question[] = [
    { id: 1, question: 'What is the capital of France?' },
    { id: 2, question: 'Who is the author of "To Kill a Mockingbird"?' },
  ];
  const [questions, setQuestions] = useState<Question[]>(
    JSON.parse(localStorage.getItem('questions')!) || initialQuestions,
  );
  const [newQuestion, setNewQuestion] = useState<string>('');

  const addQuestion = () => {
    if (newQuestion) {
      const updatedQuestions: Question[] = [
        ...questions,
        { id: questions.length + 1, question: newQuestion },
      ];
      setQuestions(updatedQuestions);
      localStorage.setItem('questions', JSON.stringify(updatedQuestions));
      setNewQuestion('');
    }
  };

  const deleteQuestion = (id: number) => {
    const updatedQuestions: Question[] = questions.filter((q) => q.id !== id);
    setQuestions(updatedQuestions);
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

export default Questions;

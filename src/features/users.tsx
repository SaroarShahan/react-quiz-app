import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface Question {
  id: number;
  question: string;
}

interface Answer {
  questionId: number;
  answer: string;
}

const Answers: React.FC = () => {
  const initialQuestions: Question[] = [
    { id: 1, question: 'What is the capital of France?' },
    { id: 2, question: 'Who is the author of "To Kill a Mockingbird"?' },
  ];
  const [questions, setQuestions] = useState<Question[]>(
    JSON.parse(localStorage.getItem('questions')!) || initialQuestions,
  );
  const [answers, setAnswers] = useState<Answer[]>([]);

  const handleAnswerChange = (id: number, newAnswer: string) => {
    const updatedAnswers: Answer[] = [...answers];
    const existingIndex = answers.findIndex((a) => a.questionId === id);
    if (existingIndex !== -1) {
      updatedAnswers[existingIndex] = { questionId: id, answer: newAnswer };
    } else {
      updatedAnswers.push({ questionId: id, answer: newAnswer });
    }
    setAnswers(updatedAnswers);
  };

  return (
    <div className="user-container max-w-md mx-auto mt-8">
      <h2 className="text-3xl font-bold mb-4">User Answers</h2>
      <div className="mb-4">
        <ul>
          {questions.map((q) => (
            <li key={q.id} className="mb-4">
              <p className="mb-2">{q.question}</p>
              <input
                type="text"
                value={answers.find((a) => a.questionId === q.id)?.answer || ''}
                onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                placeholder="Your Answer"
                className="border border-gray-300 rounded px-3 py-2 w-full"
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="previous-answers mb-4">
        <h3 className="text-lg font-bold mb-2">Previous Answers</h3>
        <ul>
          {answers.map((a, index) => (
            <li key={index} className="mb-2">
              Question {a.questionId}: {a.answer}
            </li>
          ))}
        </ul>
      </div>
      <Link to="/" className="text-blue-500 hover:underline">
        Back to Sign In
      </Link>
    </div>
  );
};

export default Answers;

import clsx from 'clsx';
import Button from '~/components/Button';

interface QuestionsListProps {
  totalQuestions: number;
  checkedOption: number;
  currentQuestion: number;
  selectedCurrentQuestion: Question;
  onQuestionSubmit: () => void;
  onQuestionNextChange: () => void;
  onAnswerChange: (selectQuestion: Question, newAnswerId: number) => void;
}

const QuestionsList = ({
  selectedCurrentQuestion,
  checkedOption,
  currentQuestion,
  totalQuestions,
  onQuestionSubmit,
  onQuestionNextChange,
  onAnswerChange,
}: QuestionsListProps) => (
  <div>
    <div className="mb-4">
      <span className="text-blue-500 font-semibold text-2xl">{currentQuestion + 1}</span>
      <span className="text-gray-400 font-semibold text-md">/{totalQuestions}</span>
    </div>

    <div className="flex mb-4 gap-x-2">
      <span id="question-txt">{selectedCurrentQuestion.question}</span>
    </div>

    <div className="w-full flex flex-wrap gap-y-2">
      {selectedCurrentQuestion.options.map((option, i) => (
        <button
          key={option}
          onClick={() => onAnswerChange(selectedCurrentQuestion, i + 1)}
          className={clsx(
            'w-full border rounded text-sm py-1',
            checkedOption === i + 1 ? 'bg-blue-50 text-blue-500 border-blue-500' : '',
          )}
        >
          {option}
        </button>
      ))}
    </div>

    <div className="flex justify-between gap-8 mt-6">
      {currentQuestion === totalQuestions - 1 ? (
        <Button
          disabled={!checkedOption}
          onClick={onQuestionSubmit}
          classNames={clsx('w-full', checkedOption === 0 ? 'opacity-50' : '')}
        >
          Submit
        </Button>
      ) : (
        <Button
          onClick={onQuestionNextChange}
          disabled={!checkedOption}
          classNames={clsx('w-full', checkedOption === 0 ? 'opacity-50' : '')}
        >
          Next
        </Button>
      )}
    </div>
  </div>
);

export default QuestionsList;

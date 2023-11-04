import clsx from 'clsx';

interface QuestionCardProps {
  answer: Question;
  idx: number;
}

const QuestionCard = ({ answer, idx }: QuestionCardProps) => {
  return (
    <div className="flex-1">
      <div className="flex mb-4 gap-x-2">
        <span className="">{idx + 1}. </span>
        <span>{answer.question}</span>
      </div>

      <div className="w-full flex flex-wrap gap-y-2">
        {answer.options.map((option, i) => (
          <button
            key={option}
            className={clsx(
              'w-full border rounded text-sm py-1',
              answer.selectedAnswer === i + 1 && answer.answer === answer.selectedAnswer
                ? 'bg-blue-50 text-blue-500 border-blue-500'
                : '',
              answer.selectedAnswer === i + 1 && answer.answer !== answer.selectedAnswer
                ? 'bg-red-50 text-red-500 border-red-500'
                : '',
            )}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;

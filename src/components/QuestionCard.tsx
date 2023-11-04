import clsx from 'clsx';
import DeleteIcon from '~/icons/DeleteIcon';

import EditIcon from '~/icons/EditIcon';

interface QuestionCardProps {
  data: Question;
  idx: number;
  showActions?: boolean;
  onUpdate?: (data: Question) => void;
  onDelete?: (data: Question) => void;
}

const QuestionCard = ({
  data,
  idx,
  showActions = false,
  onUpdate,
  onDelete,
}: QuestionCardProps) => {
  return (
    <div className="flex-1">
      <div className="flex justify-between items-center mb-4 gap-x-2">
        <div>
          <span className="">{idx + 1}. </span>
          <span>{data.question}</span>
        </div>
        {showActions && (
          <div className="flex gap-2">
            <EditIcon
              onClick={() => onUpdate?.(data)}
              className="w-4 h-4 cursor-pointer transition duration-300 ease-in-out hover:text-blue-500"
            />
            <DeleteIcon
              onClick={() => onDelete?.(data)}
              className="w-4 h-4 cursor-pointer transition duration-300 ease-in-out hover:text-red-500"
            />
          </div>
        )}
      </div>

      <div className="w-full flex flex-wrap gap-y-2">
        {data.options.map((option, i) => (
          <button
            key={option}
            className={clsx(
              'w-full border rounded text-sm py-1',
              data.selectedAnswer === i + 1 && data.answer === data.selectedAnswer
                ? 'bg-blue-50 text-blue-500 border-blue-500'
                : '',
              data.selectedAnswer === i + 1 && data.answer !== data.selectedAnswer
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

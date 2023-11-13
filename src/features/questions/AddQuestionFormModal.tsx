import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';

import Modal from '~/components/Modal';
import FormOption from './FormOption';
import Button from '~/components/Button';

interface OptionProps {
  option1: string;
  option2: string;
  option3: string;
  option4: string;
}

interface StateProps extends OptionProps {
  selectedAnswer: number;
  question: string;
  answer: string;
  options: string[];
}

interface AddQuestionFormModalProps {
  isOpen: boolean;
  isUpdate?: boolean;
  selectedQuestion: Question | null;
  onClose: () => void;
  onSubmit: (data: QuestFormData) => void;
}

const initState = {
  question: '',
  options: [],
  answer: '',
  selectedAnswer: 0,
  option1: '',
  option2: '',
  option3: '',
  option4: '',
};

const AddQuestionFormModal: React.FC<AddQuestionFormModalProps> = ({
  isOpen,
  isUpdate = false,
  selectedQuestion,
  onClose,
  onSubmit,
}: AddQuestionFormModalProps) => {
  const [state, setState] = useState<StateProps>(initState);
  const isValid =
    !!state.question &&
    !!state.answer &&
    !!state.option1 &&
    !!state.option2 &&
    !!state.option3 &&
    !!state.option4;

  useEffect(() => {
    if (selectedQuestion) {
      const { question, options, answer, selectedAnswer } = selectedQuestion;
      setState({
        question,
        options,
        answer: answer.toString(),
        selectedAnswer,
        option1: options[0],
        option2: options[1],
        option3: options[2],
        option4: options[3],
      });
    }
  }, [selectedQuestion]);

  const handleStateChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;

    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement | HTMLButtonElement>) => {
    evt.preventDefault();

    const { option1, option2, option3, option4, answer, ...restState } = state;

    onSubmit({ ...restState, answer: +answer, options: [option1, option2, option3, option4] });
    setState({ ...initState });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} className="max-w-md">
      <Modal.Header>
        <h2>{isUpdate ? 'Update' : 'Add'} Question</h2>
        <Modal.CloseIcon onClose={onClose} />
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="question">
              Question
            </label>
            <input
              className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="question"
              name="question"
              type="text"
              value={state.question}
              placeholder="Enter Question here"
              onChange={handleStateChange}
            />
          </div>

          <FormOption
            name="option1"
            label="Option 1"
            value={state.option1}
            onChange={handleStateChange}
          />
          <FormOption
            name="option2"
            label="Option 2"
            value={state.option2}
            onChange={handleStateChange}
          />
          <FormOption
            name="option3"
            label="Option 3"
            value={state.option3}
            onChange={handleStateChange}
          />
          <FormOption
            name="option4"
            label="Option 4"
            value={state.option4}
            onChange={handleStateChange}
          />
          <FormOption
            name="answer"
            label="Correct Answer"
            value={state.answer}
            onChange={handleStateChange}
          />
        </form>
      </Modal.Body>
      <Modal.Footer className="w-full flex justify-end !p-4">
        <Button type="button" onClick={handleSubmit} disabled={!isValid}>
          {isUpdate ? 'Update' : 'Add'} Question
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddQuestionFormModal;

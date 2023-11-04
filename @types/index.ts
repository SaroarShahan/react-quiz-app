type Question = {
  id: number;
  answer: number;
  selectedAnswer: number;
  question: string;
  options: string[];
};

type AppContextProps = {
  showResult: boolean;
  userType: string;
  questions: Question[];
  answers: Question[];
  previousAnswers: Question[];
  handleUserType: (type: string) => void;
  handleStateChange: (newState: Question[] | boolean | string, type: string) => void;
};

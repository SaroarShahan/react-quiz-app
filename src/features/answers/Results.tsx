import { useContext } from 'react';
import Button from '~/components/Button';

import Container from '~/components/Container';
import NoData from '~/components/NoData';
import QuestionCard from '~/components/QuestionCard';
import { AppContext } from '~/context/appContext';

const Results = () => {
  const { answers, previousAnswers, handleStateChange, userType } = useContext(AppContext);

  const handleEditSubmission = () => {
    handleStateChange(answers, 'previousAnswers');
    handleStateChange(false, 'showResult');
  };

  return (
    <>
      <h2 className="max-w-md mx-auto mb-4">Results:</h2>

      <Container>
        {!answers.length ? (
          <NoData title="No Data available" />
        ) : (
          <div>
            <div className="w-full flex flex-col gap-y-6">
              {answers.map((answer, idx) => (
                <QuestionCard key={answer.id} data={answer} idx={idx} />
              ))}
            </div>

            {userType === 'user' && (
              <Button onClick={handleEditSubmission} className="w-full mt-4">
                Edit your submission
              </Button>
            )}
          </div>
        )}
      </Container>

      {userType === 'user' && (
        <>
          <h2 className="max-w-md mx-auto mb-4 mt-8">Previous Answers:</h2>

          <Container>
            {!previousAnswers.length ? (
              <NoData title="No Data available" />
            ) : (
              <div>
                <div className="w-full flex flex-col gap-y-6">
                  {previousAnswers.map((answer, idx) => (
                    <QuestionCard key={answer.id} data={answer} idx={idx} />
                  ))}
                </div>
              </div>
            )}
          </Container>
        </>
      )}
    </>
  );
};

export default Results;

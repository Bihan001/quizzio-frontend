import TextInputField from 'components/text-input-field';

const FillBlanks = (props) => {
  const { currentQuestion, setCurrentQuestion } = props;

  return (
    <>
      <TextInputField
        fullWidth
        label='Correct Answer'
        placeholder='Type your answer here'
        required
        value={currentQuestion.correctOption}
        onChange={(e) => setCurrentQuestion((q) => ({ ...q, correctOption: e.target.value }))}
      />
    </>
  );
};

export default FillBlanks;

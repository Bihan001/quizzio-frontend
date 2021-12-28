import TextInputField from 'components/text-input-field';

const FillBlanks = (props) => {
  const { questionId, answer, handleQAnswer } = props;

  return (
    <TextInputField
      label='Answer'
      placeholder='Type your answer'
      value={answer || ''}
      onChange={(e) => handleQAnswer(questionId, e.target.value)}
    />
  );
};

export default FillBlanks;

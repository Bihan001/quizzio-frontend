
import TextInputField from 'components/text-input-field';
import { Typography } from '@mui/material/';
import { useTheme } from '@mui/styles';

const FillBlanks = (props) => {

  const { questionId, answer, handleQAnswer } = props;
  const theme = useTheme();

  return (
    <>
      <Typography variant="subtitle2" style={{ fontWeight: 'bold', color: theme.palette.primary.grey, letterSpacing: "0.6px" }}  >
        Your Answer
      </Typography>

      <TextInputField
        // label='Your Answer'
        placeholder='Type your answer'
        value={answer || ''}
        variant='standard'
        disabled={true}
        onChange={(e) => handleQAnswer(questionId, e.target.value)}
        style={{ width: "36rem" }}
      />
    </>
  );
};

export default FillBlanks;


import TextInputField from 'components/text-input-field';
import { Typography, Alert, AlertTitle } from '@mui/material/';
import { useTheme } from '@mui/styles';

const FillBlanks = (props) => {

  const { questionId, userAnswer, correctAnswer } = props;
  const theme = useTheme();

  return (
    <>
      <Typography variant="subtitle2" style={{ fontWeight: 'bold', color: theme.palette.primary.grey, letterSpacing: "0.6px" }}  >
        Your Answer
      </Typography>

      <TextInputField
        // label='Your Answer'
        placeholder='Type your answer'
        value={userAnswer || ''}
        variant='standard'
        disabled={true}
        // onChange={(e) => handleQAnswer(questionId, e.target.value)}
        style={{ width: "36rem" }}
      />

      {correctAnswer !== userAnswer &&
        (<Alert severity="success" style={{ marginTop: "2rem" }}>
          <AlertTitle> Correct Answer :  {correctAnswer} </AlertTitle>
        </Alert>
        )}
    </>
  );
};
// ffccd5
// ffb3c1
export default FillBlanks;

import TextInputField from 'components/text-input-field';
import { Typography, Alert, AlertTitle } from '@mui/material/';
import { useTheme, makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  incorrectText: {
    textFillColor: 'crimson !important',
    fontWeight: 500,
    color: 'crimson',
  },
}));

const FillBlanks = (props) => {
  const { questionId, userAnswer = '', correctAnswer } = props;

  const theme = useTheme();
  const classes = useStyles();

  const getInputTextStyle = (isCorrect) => {
    const style = { fontWeight: 500 };
    if (isCorrect) style.color = theme.palette.success.main;
    else style.color = theme.palette.error.main;
    return style;
  };

  return (
    <>
      <Typography
        variant='subtitle2'
        style={{
          fontWeight: 'bold',
          color: theme.palette.primary.grey,
          letterSpacing: '0.6px',
        }}>
        Your Answer
      </Typography>

      <TextInputField
        value={userAnswer || ''}
        // disabled
        variant='standard'
        style={{ width: '36rem' }}
        InputPropsStyle={getInputTextStyle(correctAnswer === userAnswer)}
      />

      {correctAnswer && correctAnswer !== userAnswer && (
        <Alert severity='success' style={{ marginTop: '2rem', width: '46%' }}>
          <AlertTitle> Correct Answer : {correctAnswer} </AlertTitle>
        </Alert>
      )}
    </>
  );
};
// ffccd5
// ffb3c1
export default FillBlanks;

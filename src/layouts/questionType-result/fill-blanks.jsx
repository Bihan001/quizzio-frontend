
import TextInputField from 'components/text-input-field';
import { Typography, Alert, AlertTitle } from '@mui/material/';
import { useTheme, makeStyles } from '@mui/styles';


const useStyles = makeStyles((theme) => ({
  incorrectText: {
    textFillColor: "crimson !important",
    fontWeight: 500,
    color: 'crimson',
  },
}));

const FillBlanks = (props) => {

  const { questionId, userAnswer, correctAnswer } = props;
  const theme = useTheme();
  const classes = useStyles();

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
        style={{ width: "36rem", }}
        className={classes.incorrectText}
      />

      {correctAnswer !== userAnswer &&
        (<Alert severity="success" style={{ marginTop: "2rem", width: "46%" }}>
          <AlertTitle> Correct Answer :  {correctAnswer} </AlertTitle>
        </Alert>
        )}
    </>
  );
};
// ffccd5
// ffb3c1
export default FillBlanks;

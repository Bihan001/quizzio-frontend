import { useEffect, useState } from 'react';
import { Grid, Typography } from '@mui/material';
import { makeStyles, useTheme } from '@mui/styles';
import MCQSingle from 'layouts/questionType-result/mcq-single';
import MCQMultiple from 'layouts/questionType-result/mcq-multiple';
import FillBlanks from 'layouts/questionType-result/fill-blanks';
import DomPurify from 'dompurify';
import commonStyle from './common-style';

const useStyles = makeStyles((theme) => ({}));

const Result = (props) => {
  const { ['result']: resultDetails } = props;
  const classes = useStyles();
  const classes2 = commonStyle();
  const theme = useTheme();

  if (!resultDetails) return null;

  return (
    <>
      <Typography className={classes2.heading}> RESULT </Typography>

      {resultDetails && resultDetails.length > 0 && (
        <ol style={{ paddingLeft: '2rem' }}>
          {resultDetails.map((ques, idx) => {
            return (
              <li key={idx}>
                {/* ====================     MAIN QUESTION BODY    ==================== */}
                <div style={{ marginTop: '2rem', overflowY: 'auto' }}>
                  <div
                    style={{ fontSize: '2rem !important' }}
                    dangerouslySetInnerHTML={{
                      __html: DomPurify.sanitize(ques.question),
                    }}
                  />

                  <div style={{ marginTop: '1rem' }}>
                    {ques.type === 'multipleOptions' && (
                      <MCQMultiple options={ques.options} questionId={ques.id} correctAnswer={ques.correctOption} userAnswer={ques.givenOption} />
                    )}

                    {ques.type === 'mcq' && (
                      <MCQSingle options={ques.options} correctAnswer={ques.correctOption} questionId={ques.id} userAnswer={ques.givenOption} />
                    )}

                    {ques.type === 'fillInTheBlanks' && (
                      <FillBlanks correctAnswer={ques.correctOption} questionId={ques.id} userAnswer={ques.givenOption} />
                    )}
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      )}
    </>
  );
};

export default Result;

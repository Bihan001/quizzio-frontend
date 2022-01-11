
import { useEffect, useState } from 'react';
import { Grid, Typography } from '@mui/material';
import { makeStyles, useTheme } from '@mui/styles';
import { getExamResult } from 'api/exam';
import MCQSingle from 'pages/give-exam/question-options/mcq-single';
import MCQMultiple from 'pages/give-exam/question-options/mcq-multiple';
import FillBlanks from 'pages/give-exam/question-options/fill-blanks';
import DomPurify from 'dompurify';


const useStyles = makeStyles((theme) => ({
    heading: {
        fontSize: '2.6rem',
        textAlign: 'center',
        fontWeight: '600',
        // color: theme.palette.grey[600],
        alignItems: 'center',
        justifyContent: 'center',
    },
}));

const Result = (props) => {

    const { content = '' } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [resultDetails, setResultDetails] = useState(null);
    const [answer, setAnswer] = useState({});

    const fetchResult = async () => {
        try {
            const res = await getExamResult();
            console.log(res.data);
            setResultDetails(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchResult();
    }, [])

    const getQuestionFromId = (id) => {
        return resultDetails.find((q) => q.id === id);
    };

    const getQuestionType = (q) => {
        if (q) return q.type;
        return '';
    };

    const handleQAnswer = (qId, ans) => {
        setAnswer((a) => ({ ...a, [qId]: { type: getQuestionType(getQuestionFromId(qId)), answer: ans } }));
    };



    return (
        <>
            <Typography className={classes.heading} >  RESULT  </Typography>

            {resultDetails && resultDetails.length > 0 && resultDetails.map((ques, key) => {
                return (
                    <>
                        {/* ====================     MAIN QUESTION BODY    ==================== */}
                        <div style={{ marginTop: "2rem", overflowY: 'auto' }}>
                            <div dangerouslySetInnerHTML={{ __html: DomPurify.sanitize(ques.question) }} />

                            <Typography variant="subtitle1" style={{ fontWeight: '500', letterSpacing: "0.4px", fontSize: "1.5rem" }} >
                                Type : {ques.type ? ques.type : "-"}
                            </Typography>

                            <div style={{ marginTop: '1rem' }}>
                                {ques.type === 'multipleOptions' && (
                                    <MCQMultiple
                                        options={ques.options}
                                        // handleQAnswer={handleQAnswer}
                                        questionId={ques.id}
                                        answer={ques.givenOption}
                                    />
                                )}

                                {ques.type === 'mcq' && (
                                    <MCQSingle
                                        options={ques.options}
                                        // handleQAnswer={handleQAnswer}
                                        questionId={ques.id}
                                        answer={ques.givenOption}
                                    />
                                )}

                                {ques.type === 'fillInTheBlanks' && (
                                    <FillBlanks
                                        // handleQAnswer={handleQAnswer}
                                        questionId={ques.id}
                                        answer={ques.givenOption}
                                    />
                                )}
                            </div>
                        </div>
                    </>
                )
            })}

        </>
    );
};

export default Result;
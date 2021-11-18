import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { TextField, Grid, Paper, Box, styled } from '@mui/material';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import './exam-creation.css';
import RichEditor from '../../Components/text-editor';


const useStyles = makeStyles(theme => ({
    root: {
        padding: '1.6rem',
        margin: '1rem',
        fontSize: '1.6rem',
    },
    heading: {
        fontSize: '3.2rem',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '4rem',
    },
    editor: {
        marginTop: '2rem',
        paddingTop: '2rem',
    },
    addQuestionBar: {
        paddingTop: '2rem',
        height: '2rem',
    },
    button: {
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '2.4rem',
        padding: '1.6rem',
        fontSize: '1.2rem',
        borderRadius: '.4rem',
        color: '#fff',
        // backgroundColor: '#1AB273',
        // '&:hover': {
        //   backgroundColor: '#1AB273',
        // },
    },
}));

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const ExamCreation = () => {
    const classes = useStyles();
    const history = useHistory();

    // const [value, setValue] = useState(new Date('2014-08-18T21:11:54'));
    const [add, setAdd] = useState(0);
    const [editors, setEditors] = useState([]);

    const [editorState, SetEditorState] = useState([]);
    const [text, setText] = useState('');
    const [editorHtml, seteditorHtml] = useState('');
    const [value, setValue] = useState('');

    const onEditorStateChange = () => { };

    const handleEditorChange = (value) => {
        setText({ text: value });
        console.log(value);
    };

    const handleChange = (newValue) => {
        setValue(newValue);
    };

    const AddQuestionHandler = () => {
        console.log('a');
        setEditors([...editors, 0]);
    };

    useEffect(() => {
        console.log(editors);
    }, [editors]);

    console.log(value);

    return (
        <div className={classes.root}>
            <div className={classes.heading}> University of Engineering & Management</div>

            <p style={{ fontSize: '1.89rem', fontWeight: '800' }}> Full Marks : 20 </p>
            <div>
                <TextField
                    required
                    id='standard-required'
                    label='Subject'
                    variant='standard'
                    fullWidth={true}
                    inputProps={{ style: { fontSize: '1.6rem' } }}
                    style={{ marginTop: '0.5rem', width: '22rem' }}
                // InputProps={{ fontSize: '2rem' }}
                // classes={{ fontSize: '2rem' }}
                />
            </div>

            <div style={{ marginBottom: '9rem', marginTop: '2rem', paddingTop: '1.4rem' }}>
                <Box lg={{ flexGrow: 1 }}>
                    <Grid container spacing={2} className={classes.addQuestionBar}>
                        <Grid item xs={12} lg={12} md={12}>
                            <Item
                                style={{
                                    fontSize: '2rem',
                                    backgroundColor: '#e63946',
                                    color: '#fff',
                                    fontWeight: '600',
                                }}
                                onClick={() => AddQuestionHandler()}
                            >
                                <AddToPhotosIcon fontSize='large' /> Add Question
                            </Item>
                        </Grid>
                    </Grid>
                </Box>
            </div>

            {editors.map((x, index) => {
                return <RichEditor key={index} />;
            })}

            <Grid container className={classes.button}>
                <Grid item xs={12} lg={12} md={12}>
                    <button className='custom-btn btn-9'>Save</button>
                </Grid>
            </Grid>
        </div>
    );
};

export default ExamCreation;

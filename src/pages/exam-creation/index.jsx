import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Stepper, Step, StepButton } from '@mui/material';
import Page1 from './page1';
import Page2 from './page2';
// import { makeStyles, useTheme } from '@mui/styles';

const steps = ['Exam Details', 'Questions', 'Preview'];

const ExamCreation = () => {

  // const classes = useStyles();
  const history = useHistory();

  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  return (
    <Container maxWidth='xl'>
      <Stepper nonLinear alternativeLabel sx={{ margin: '3rem auto', width: '500px' }} activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton color='inherit' onClick={handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      {activeStep === 0 && <Page1 />}
      {activeStep === 1 && <Page2 />}
      {activeStep === 2 && <p>ffff</p>}
      {/*  <Dialog open={openModal} handleClose={() => setOpenModal(false)}>
        <DialogTitle>New Modal here</DialogTitle>
        <DialogContent>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur sed natus magnam, dolore eius placeat velit, ducimus
          deserunt, laboriosam atque blanditiis! Fuga consequatur culpa quam sunt ut, esse quis possimus velit voluptatum deserunt
          fugiat sapiente unde non, repellendus aspernatur. At, accusantium corporis repudiandae perferendis eum eaque.
          Necessitatibus sapiente sit voluptas officiis repellat error repellendus sunt facere libero, assumenda sed? Ratione quas
          commodi architecto nihil voluptatum, laudantium, unde iure atque fugiat vitae perspiciatis explicabo. Neque, cum nihil
          autem pariatur illum sequi, tempore, culpa dolores tenetur corrupti veniam deserunt vel porro. Aut, minus? Beatae
          officiis, praesentium incidunt asperiores magni assumenda ea non!
          <DialogActions>
            <Button onClick={() => setOpenModal(false)}>Close</Button>
          </DialogActions>
        </DialogContent>
      </Dialog> */}

      {/* <Header title='Examination Edit/Creation' description='Create your exam here' /> */}

      {/* <SpeedDial actions={actions} /> */}
      {/* <SpeedDial grid cols={5} actions={actions} style={{ position: 'fixed', bottom: 16, right: 100 }} /> */}

      {/* <Typography className={classes.heading}>Examination Edit/Creation</Typography> */}

      {/* <Box
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          alignContent: 'center',
        }}
      >
        <Button variant='contained' onClick={(e) => setOpenModal((v) => !v)} style={{ marginRight: '2.3rem' }}>
          Open Test Modal
        </Button>

        {ButtonText.map((item, key) => {
          return (
            <>
              <Box sx={{ marginRight: '2.3rem' }}>
                <Button variant='contained'>{item.title}</Button>
              </Box>
            </>
          );
        })}
      </Box> */}

      {/* Section 1  */}
    </Container>
  );
};

export default ExamCreation;

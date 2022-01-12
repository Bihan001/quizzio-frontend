import { useDispatch } from 'react-redux';
import { showConfirmation } from 'redux/slices/confirmation-dialog';
import { Button } from '@mui/material';

const Page3 = (props) => {
  const { handleSubmitExamData } = props;
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(
      showConfirmation({
        title: 'Create Exam',
        content: 'Are you sure you want to create this exam?',
        primaryBtnText: 'Yes',
        secondaryBtnText: 'No',
        onPrimaryBtnClick: handleSubmitExamData,
        // onSecondaryBtnClick: () => console.log('do nothing'),
      })
    );
  };
  return (
    <div style={{ display: 'flex', width: 'fit-content', marginLeft: 'auto' }}>
      <Button variant='contained' style={{ marginRight: '1rem' }} onClick={() => handleSubmit()}>
        Save
      </Button>
      <Button variant='contained' color='info'>
        Print
      </Button>
    </div>
  );
};

export default Page3;

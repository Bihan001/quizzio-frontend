import { Button } from '@mui/material';

const Page3 = (props) => {
  const { handleSubmitExamData } = props;
  return (
    <div style={{ display: 'flex', width: 'fit-content', marginLeft: 'auto' }}>
      <Button variant='contained' style={{ marginRight: '1rem' }} onClick={() => handleSubmitExamData()}>
        Save
      </Button>
      <Button variant='contained' color='info'>
        Print
      </Button>
    </div>
  );
};

export default Page3;

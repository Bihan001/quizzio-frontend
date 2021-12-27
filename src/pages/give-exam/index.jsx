import { useState } from 'react';
import { Container, Typography, Button, Paper, Grid } from '@mui/material';
import Page1 from './page1';
import Page2 from './page2';

const GiveExam = () => {
  const [page, setPage] = useState(1);

  const handlePageNext = () => setPage((p) => p + 1);

  const handlePagePrev = () => setPage((p) => p - 1);

  return (
    <Container maxWidth='xl' style={{ padding: '5rem 0' }}>
      {page === 1 && <Page1 handlePageNext={handlePageNext} />}
      {page === 2 && <Page2 />}
    </Container>
  );
};

export default GiveExam;

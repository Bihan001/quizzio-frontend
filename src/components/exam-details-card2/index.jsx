import { useState, useEffect } from 'react';
import { Box, Card, CardContent, Button, Typography } from '@mui/material';
import useStyles from './styles';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const ExamDetailsCard2 = (props) => {
  const classes = useStyles();
  const { fullWidth, width, data, cardDetails, ...rest } = props;

  const [examDetails, setExamDetails] = useState(null);

  useEffect(() => {
    if (cardDetails) setExamDetails({ ...cardDetails });
  }, [cardDetails]);

  return (
    <Card
      sx={{ minWidth: fullWidth ? '100%' : width || 300, cursor: 'pointer' }}
      {...rest}
    >
      {examDetails && examDetails.tags && (
        <CardContent>
          <Box
            style={{
              width: 'fit-content',
              height: 'fit-content',
            }}
          >
            <img src={examDetails.image} className={classes.img} />
          </Box>
          <Box style={{ marginLeft: '1rem', marginBottom: '1rem' }}>
            <Typography variant="h6">
              {examDetails.name !== null ? examDetails.name : '-'}{' '}
            </Typography>
          </Box>
          <Box
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
              flexWrap: 'wrap',
              marginBottom: '2rem',
            }}
          >
            {examDetails.tags.slice(0, 3).map((tag) => (
              <Tag tag={tag} />
            ))}
          </Box>
          <Box
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}
          >
            <Box
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <AccessTimeIcon style={{ marginRight: '.5rem' }} />
              {new Date(examDetails.startTime).toDateString()}
            </Box>
          </Box>
        </CardContent>
      )}
    </Card>
  );
};
export default ExamDetailsCard2;

const Tag = ({ tag }) => {
  const classes = useStyles();
  return (
    <Box className={classes.tag}>
      <Typography variant="subtitle3">#{tag}</Typography>
    </Box>
  );
};

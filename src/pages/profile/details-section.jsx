import React, { useState, useEffect } from 'react';
import { Grid, Typography, Button, Box, TextField, Modal, Container, Paper, Tabs, Tab } from '@mui/material';
import ExamsList from './exams-list';

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;
  return (
    <div role='tabpanel' hidden={value !== index} {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const a11yProps = (index) => {
  return {
    id: `profile-tab-${index}`,
  };
};

const tabs = ['Performance', 'Exams Hosted', 'Exams Given'];

const Details = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const handleTabChange = (event, newValue) => setCurrentTab(newValue);

  return (
    <>
      <Paper elevation={2}>
        <Box>
          <Tabs value={currentTab} onChange={handleTabChange}>
            {tabs.map((x, i) => (
              <Tab key={i} label={x} {...a11yProps(i)} />
            ))}
          </Tabs>
        </Box>
        <TabPanel value={currentTab} index={0}>
          Item One
        </TabPanel>
        <TabPanel value={currentTab} index={1}>
          <ExamsList />
        </TabPanel>
        <TabPanel value={currentTab} index={2}>
          <ExamsList />
        </TabPanel>
      </Paper>
    </>
  );
};

export default Details;

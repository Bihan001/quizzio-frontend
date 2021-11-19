import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Grid, Typography, Button, Box, TextField, Modal, Container, Paper, Tabs, Tab } from '@mui/material';
import { makeStyles, useTheme } from '@mui/styles';
import ProfileSection from './profile-section';
import DetailSection from './details-section';

const User = () => {
  const history = useHistory();
  const theme = useTheme();

  return (
    <>
      <Container maxWidth='xl' style={{ paddingTop: '3rem' }}>
        <Grid container spacing={5}>
          <Grid item lg={3}>
            <ProfileSection />
          </Grid>
          <Grid item lg={9}>
            <DetailSection />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default User;

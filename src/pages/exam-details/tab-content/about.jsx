
import React, { useEffect, useState } from 'react';
import { Grid, Typography } from '@mui/material';
import { makeStyles, useTheme } from '@mui/styles';


const useStyles = makeStyles((theme) => ({
    heading: {
        fontSize: '2.6rem',
        textAlign: 'center',
        fontWeight: '600',
        color: theme.palette.grey[600],
        alignItems: 'center',
        justifyContent: 'center',
    },

}))

const About = () => {

    const classes = useStyles();
    const theme = useTheme();

    return (
        <div>
            <p className={classes.heading} >About</p>

            <p>
                Christmas Eve is the evening or entire day before Christmas Day, the festival commemorating the birth of Jesus.[4] Christmas Day is
                observed around the world, and Christmas Eve is widely observed as a full or partial holiday in anticipation of Christmas Day. Together, both days
                are considered one of the most culturally significant celebrations in Christendom and Western society.

                Christmas Eve is the evening or entire day before Christmas Day, the festival commemorating the birth of Jesus.[4] Christmas Day is
                observed around the world, and Christmas Eve is widely observed as a full or partial holiday in anticipation of Christmas Day. Together, both days
                are considered one of the most culturally significant celebrations in Christendom and Western society.
            </p>
        </div>
    )
}

export default About;

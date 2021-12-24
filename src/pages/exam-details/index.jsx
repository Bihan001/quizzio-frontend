
import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography, Box, Tab, Tabs } from '@mui/material';
import { makeStyles, useTheme } from '@mui/styles';
import PropTypes from 'prop-types';
import About from './tab-content/about';


const useStyles = makeStyles((theme) => ({
    jumbotron: {
        width: '94%',
        objectFit: 'cover',
    },
    Dp: {
        position: 'relative',
        transform: 'translate(3rem , -6rem)',
    },
    section2: {
        backgroundColor: '#f9f9f9',
        padding: "1.6rem",
    },
    subHeading: {
        fontWeight: '600',
        color: theme.palette.primary.grey,
        fontSize: '1.3rem',
        paddingTop: "1rem",
    },
    subText: {
        fontSize: '1.6rem',
        fontWeight: "500",
    },
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        height: 224,
        // width: 800,
        marginBottom: '4rem',
    },
    tabVerticalLine: {
        borderRight: `1.2px solid ${theme.palette.divider}`,
        overflow: 'visible !important',
    },
    tabStyle: {
        fontWeight: '600',
    },
}));


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const Exam_Details = () => {

    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Container maxWidth='xl'>

            <div style={{}}  >
                <img src="https://media-fastly.hackerearth.com/media/hackathon/bial-superapp-hackathon/images/7c1ad88a32-new_cover_2.png"
                    height="100%"
                    className={classes.jumbotron}
                />
            </div>

            <div className={classes.Dp} >
                <img src="https://media.istockphoto.com/photos/jolly-father-christmas-reading-letters-from-children-picture-id108353737?b=1&k=20&m=108353737&s=170667a&w=0&h=WhSAq3xVPEHRJvks0tFxun5dSHU0UbvUin60qOX-M00="
                    width="190" height="100%"
                    style={{ borderRadius: "2rem" }}
                />
            </div>


            {/*   Section - 2  */}
            <div className={classes.section2} >
                <Grid container style={{ textAlign: "center" }} >
                    <Grid item lg={3} >
                        <Typography className={classes.subHeading}>
                            STARTS ON :
                        </Typography>
                        <Typography className={classes.subText} >Oct 27, 2021 06:00 PM IST</Typography>

                        <Typography className={classes.subHeading} >
                            STARTS ON :
                        </Typography>
                        <Typography className={classes.subText} > Dec 25, 2021 06:00 AM IST     </Typography>
                    </Grid>

                    <Grid item lg={3} >
                        <Typography className={classes.subHeading} >
                            EXAM MODE  :
                        </Typography>
                        <Typography className={classes.subText} > Online  </Typography>
                    </Grid>

                    <Grid item lg={3} >
                        <Typography className={classes.subHeading} >
                            ENDS ON :
                        </Typography>
                        <Typography className={classes.subText} >Oct 27, 2021 06:00 PM IST</Typography>

                        <Typography className={classes.subHeading} >
                            ENDS ON :
                        </Typography>
                        <Typography className={classes.subText} >Oct 27, 2021 06:00 PM IST</Typography>
                    </Grid>

                    <Grid item lg={3} >
                        <Typography className={classes.subHeading} >
                            START NOW
                        </Typography>
                        <Typography className={classes.subText} >Oct 27, 2021 06:00 PM IST</Typography>
                    </Grid>

                </Grid>
            </div>


            {/*  Side Vertical Tabs  */}
            <div className={classes.root}>
                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    className={classes.tabVerticalLine}
                >
                    <Tab className={classes.tabStyle} label="About" {...a11yProps(0)} />
                    <Tab className={classes.tabStyle} label="Rules" {...a11yProps(1)} />
                    <Tab className={classes.tabStyle} label="Teams" {...a11yProps(2)} />
                    <Tab className={classes.tabStyle} label="FAQ's" {...a11yProps(3)} />
                    <Tab className={classes.tabStyle} label="Discussions" {...a11yProps(4)} />
                </Tabs>

                <TabPanel value={value} index={0}>
                    <About />
                </TabPanel>

                <TabPanel value={value} index={1}>
                    Rules
                </TabPanel>

                <TabPanel value={value} index={2}>
                    Teams
                </TabPanel>

                <TabPanel value={value} index={3}>
                    FAQ's
                </TabPanel>

                <TabPanel value={value} index={4}>
                    Discussions
                </TabPanel>
            </div>

        </Container >
    )
}

export default Exam_Details;

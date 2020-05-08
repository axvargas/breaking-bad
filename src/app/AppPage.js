import React from 'react';
import {
    createMuiTheme,
    responsiveFontSizes,
    MuiThemeProvider,
    Grid,

    Button,
    Typography

} from '@material-ui/core';

import Phrase from '../components/phrase';

import useStyles from './style';

const AppPage = ({ consultApi, phrase }) => {

    const classes = useStyles();
    let theme = createMuiTheme();
    theme = responsiveFontSizes(theme);


    return (
        <MuiThemeProvider theme={theme}>
            <Grid container justify="flex-end" spacing={2} className={classes.grid} alignItems="center">


                <Grid container justify="center" spacing={0} >

                    <Phrase phrase={phrase} />

                </Grid>



            </Grid>
            <Grid container justify="center" spacing={0} >
                <Button variant="contained" color="primary" className={classes.button} onClick={consultApi}>
                    <Typography variant="h6" className={classes.typo}><strong>Get a phrase</strong></Typography>
                </Button>
            </Grid>
        </MuiThemeProvider >
    );
}

export default AppPage;


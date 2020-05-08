import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Paper } from '@material-ui/core';

import useStyles from './style';
const Phrase = ({ phrase }) => {
    const classes = useStyles();
    const { author, quote } = phrase;
    return (
        <Paper className={classes.paper}>
            
            <Typography variant="h5" className={classes.typo}><strong>{quote}</strong></Typography>
            <Typography variant="h6" className={classes.typoP}><strong> -{author}</strong></Typography>
        </Paper>
    );
};


Phrase.propTypes = {
    phrase: PropTypes.object.isRequired,
};


export default Phrase;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
    progress: {
        margin: theme.spacing(2),
        textAlign:'center',

    },
}));

export default function CircularIndeterminate() {
    const classes = useStyles();

    return (
        <div style={{white:'100%'}}>
            <CircularProgress className={classes.progress} color="secondary" />
        </div>
    );
}
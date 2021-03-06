import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(2)
    }
}));

export default function LinkedInCard() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div class="LI-profile-badge"
                data-version="v1"
                data-size="large"
                data-locale="pt_BR"
                data-type="vertical"
                data-theme="light"
                data-vanity="tiago-albuquerque-7aa63275">
                <a class="LI-simple-link"
                    href='https://br.linkedin.com/in/tiago-albuquerque-7aa63275?trk=profile-badge'>
                    TIAGO ALBUQUERQUE
                </a>
            </div>
        </div>
    );
}
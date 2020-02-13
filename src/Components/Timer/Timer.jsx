import React from 'react';
import { red, grey } from '@material-ui/core/colors';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CountdownTimer from "../adapted-timer-component";

const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(1),
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden'
    },
    title: {
        marginTop: theme.spacing(2),
        color: grey[800]
    }
}));

export default function Timer(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.title}>
                <Typography variant="subtitle1">{props.seconds > 0 ? 'TEMPO PARA FINALIZAÇÃO DA VOTAÇÃO' : (props.error ? 'VOTAÇÃO ENCERRADA! NINGUÉM PARTICIPOU :(' : 'VOTAÇÃO ENCERRADA. VEJA O VENCEDOR:')}</Typography>
            </div>
            {props.seconds > 0 ?
                <CountdownTimer onEnd={props.endVoting} count={props.seconds} backgroundColor="transparent" color={red[600]} size={20} responsive />
                : ''}
        </div>
    );
}
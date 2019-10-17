// @flow

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import React from 'react';



type Props = {
    item:any
};
type State = {

};

class CardComonents extends React.Component<Props, State> {

    render() {
        const classes = useStyles;
        return (
            <Card >
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Nombre Vacante:{ this.props.item.nombreVacante}
                    </Typography>

                    <Typography className={classes.pos} color="textSecondary">
                        Numero Plazas:{ this.props.item.numeroPlazas}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        Genero:{ this.props.item.genero}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        Horario:{ this.props.item.horario}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        Sueld oBase:{ this.props.item.sueldoBase}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Ver</Button>
                </CardActions>
            </Card>
        )
    }
}

const useStyles = makeStyles(theme => ({
    card: {
        margin: '25px'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
}));

export default CardComonents;
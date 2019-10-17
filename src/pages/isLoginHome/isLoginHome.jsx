// @flow
import React from 'react';
import {connect} from "react-redux";
import {HomeEmpresaAction} from '../../business/actions/HomeEmpresa/HomeEmpresaAction'
import {ListVAction} from '../../business/actions/ListV/ListVAction'


import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import CardComonents from '../../componets/CardComonents'

type Props = {
    HomeEmpresaAction: (any)=>void,
    ListVAction: (any)=>void,
    dataReguistroVacante: any,
    errorReguistroVacante: any,
    dataLogin: any,
    errorLogin: any,
    dataListV:any,
    errorListV:any
};
type State = {
    nombreVacante: string,
    numeroPlazas: number,
    genero: string,
    estadoCivil:string,
    edad: number,
    experiencia: number,
    idioma: string,
    escolaridad: string,
    horario: string,
    diasLavorales: string,
    sueldoBase:number,
    prestaciones: string,
    comisiones: number,
    tipoContrato: string,
    nivelVacante: string,
    opcionViaje:number,
    conociomientos:string,
    habilidades: string,
    requisitosAdd: string,
    logoEmpresa: string,
    estado: number,
    funcion:string,
    List:any
};


class IsLoginHome extends React.Component<Props, State> {
    state = {
        nombreVacante: '',
        numeroPlazas: 0,
        genero: '',
        estadoCivil:'',
        edad: 0,
        experiencia: 0,
        idioma: '',
        escolaridad: '',
        horario: '',
        diasLavorales: '',
        sueldoBase:0,
        prestaciones: '',
        comisiones: 0,
        tipoContrato: '',
        nivelVacante: '',
        opcionViaje:0,
        conociomientos:'',
        habilidades: '',
        requisitosAdd: '',
        logoEmpresa: '',
        funcion:'',
        noDate:false,
        Cargando:false,
        isDone:false,
        TextDialgo:'',
        role:0,
        List:[]
    };

    UNSAFE_componentWillMount(): * {
            console.log('role', this.props.dataLogin.body.role)
        this.props.dataLogin.body.role.map((item)=>{
            console.log('kjkl',item.roleId)
                this.setState({
                    role:item.roleId
                });
        })

        this.props.ListVAction(this.props.dataLogin)
        console.log('LIST',this.props.dataListV)
    }

    componentWillReceiveProps(nextProps:Props) {
        const {dataReguistroVacante ,errorReguistroVacante,dataListV,errorListV} = nextProps;

        if ( dataReguistroVacante.isOk !== false) {
            console.log('Reguister Data  ', dataReguistroVacante);
            this.setState({
                Cargando :false,
                isDone:true,
                TextDialgo:'Vacante Reguistrada con exito'
            });
        }
        if (errorReguistroVacante.error && !errorReguistroVacante.isOk) {
            console.log('Reguister Error ', errorReguistroVacante);
            this.setState({
                Cargando :false,
                isDone:true,
                TextDialgo:'Error a Registrar la Vacante'
            });
        }
        if ( dataListV.isOk !== false) {
            console.log('List Data  ', dataListV);
            this.setState({
                List:dataListV.body
            });
        }

        if (errorListV.error && !errorListV.isOk) {
            console.log('List Error ', errorListV);

        }


    }


    dataReguister =()=>{
        const {
            nombreVacante,
            numeroPlazas,
            genero,
            estadoCivil,
            edad,
            experiencia,
            idioma,
            escolaridad,
            horario,
            diasLavorales,
            sueldoBase,
            prestaciones,
            comisiones,
            tipoContrato,
            nivelVacante,
            opcionViaje,
            conociomientos,
            habilidades,
            requisitosAdd,
            logoEmpresa,
            funcion,
        }= this.state
        if(nombreVacante !== ''  &&  numeroPlazas !== ''  &&  genero !== ''  &&  estadoCivil !== ''
            &&  edad !== '' &&  experiencia !== '' &&  idioma !== '' &&  idioma !== '' &&  escolaridad !== ''
            &&  horario !== '' &&  diasLavorales !== '' &&  sueldoBase !== '' &&  prestaciones !== '' &&  comisiones !== ''
            &&  tipoContrato !== '' &&  nivelVacante !== '' &&  opcionViaje !== '' &&  conociomientos !== '' &&  habilidades !== ''
            &&  requisitosAdd !== '' &&  logoEmpresa !== '' &&  funcion !== ''
        ){
            this.props.HomeEmpresaAction(this.state,this.props.dataLogin);
            this.setState({
                Cargando : true
            });
        }else {
            console.log('sate', this.state)
            this.setState({
                noDate : true
            });
        }

    }




    render() {
        return(
            <div>
                {this.state.role ===1 || this.state.role ===2 ? this.renderFor():null }
                {this.state.role ===3 || this.state.role ===2 ?this.state.List.map((item)=>{
                   return(
                       <CardComonents item={item}/>
                   )
                }): null }
            </div>
        )


    };
    renderFor =()=>{
        console.log('render', this.state.role)
            return (
                <div>
                    {this.state.Cargando ? this.isLoader() : this.renderFor()}
                </div>
            )

    }
    isLoader=()=> {
        return (
            <div className="text-center"  >

                <h1>Procesado Vacante</h1>
                <h5>Espere por Favor</h5>
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        )

    }
    renderFor =()=>{
        const classes = useStyles;
        return (
            <div>
                <div className="jumbotron text-center">
                    <h1>Registro de vacantes</h1>
                    <h5>Introduce los Datos de la Vacante</h5>
                    <Container component="main" >
                        <div className={classes.paper}>
                            <div className={classes.form} >
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <TextField
                                            variant="outlined"
                                            required
                                            fullWidth
                                            label="Nombre Vacante"
                                            onChange={(event => {
                                                this.setState({
                                                    nombreVacante:event.target.value
                                                });
                                            })}

                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            variant="outlined"
                                            required
                                            fullWidth
                                            label="Estado Civil"
                                            onChange={(event => {
                                                this.setState({
                                                    estadoCivil:event.target.value
                                                });
                                            })}
                                        />
                                    </Grid>

                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            type={'number'}
                                            variant="outlined"
                                            required
                                            fullWidth
                                            label="Numero Plazas"
                                            onChange={(event => {
                                                this.setState({
                                                    numeroPlazas:event.target.value
                                                });
                                            })}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            variant="outlined"
                                            required
                                            fullWidth
                                            label="Genero"
                                            onChange={(event => {
                                                this.setState({
                                                    genero:event.target.value
                                                });
                                            })}
                                        />
                                    </Grid>

                                    <Grid item xs={12}>
                                        <TextField
                                            variant="outlined"
                                            required
                                            fullWidth
                                            label="Escolaridad"
                                            onChange={(event => {
                                                this.setState({
                                                    escolaridad:event.target.value
                                                });
                                            })}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            variant="outlined"
                                            required
                                            fullWidth
                                            label="Sueldo Base"
                                            type={'number'}
                                            onChange={(event => {
                                                this.setState({
                                                    sueldoBase:event.target.value
                                                });
                                            })}
                                        />
                                    </Grid>

                                    <Grid item xs={12}>
                                        <TextField
                                            variant="outlined"
                                            required
                                            fullWidth
                                            label="Prestaciones"
                                            multiline
                                            rowsMax="4"
                                            onChange={(event => {
                                                this.setState({
                                                    prestaciones:event.target.value
                                                });
                                            })}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            variant="outlined"
                                            required
                                            fullWidth
                                            label="Comisiones"
                                            onChange={(event => {
                                                this.setState({
                                                    comisiones:event.target.value
                                                });
                                            })}
                                        />
                                    </Grid>


                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            type={'number'}
                                            variant="outlined"
                                            required
                                            fullWidth
                                            label="Edad"
                                            onChange={(event => {
                                                this.setState({
                                                    edad:event.target.value
                                                });
                                            })}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            variant="outlined"
                                            required
                                            type={'number'}
                                            fullWidth
                                            label="Experiencia"
                                            onChange={(event => {
                                                this.setState({
                                                    experiencia:event.target.value
                                                });
                                            })}
                                        />
                                    </Grid>

                                    <Grid item xs={12}>
                                        <TextField
                                            variant="outlined"
                                            required
                                            fullWidth
                                            label="Comisiones"
                                            multiline
                                            rowsMax="4"
                                            onChange={(event => {
                                                this.setState({
                                                    comisiones:event.target.value
                                                });
                                            })}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            variant="outlined"
                                            required
                                            fullWidth
                                            label="Tipo Contrato"
                                            onChange={(event => {
                                                this.setState({
                                                    tipoContrato:event.target.value
                                                });
                                            })}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            variant="outlined"
                                            required
                                            fullWidth
                                            label="Nivel Vacante"
                                            onChange={(event => {
                                                this.setState({
                                                    nivelVacante:event.target.value
                                                });
                                            })}

                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            variant="outlined"
                                            required
                                            fullWidth
                                            label="Opcion Viaje"
                                            onChange={(event => {
                                                this.setState({
                                                    opcionViaje:event.target.value
                                                });
                                            })}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            variant="outlined"
                                            required
                                            fullWidth
                                            label="Idioma"
                                            onChange={(event => {
                                                this.setState({
                                                    idioma:event.target.value
                                                });
                                            })}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            variant="outlined"
                                            required
                                            fullWidth
                                            label="Horario"
                                            onChange={(event => {
                                                this.setState({
                                                    horario:event.target.value
                                                });

                                            })}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            type={'number'}
                                            variant="outlined"
                                            required
                                            fullWidth
                                            label="Dias Lavorales"
                                            onChange={(event => {
                                                this.setState({
                                                    diasLavorales:event.target.value
                                                });
                                            })}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            variant="outlined"
                                            required
                                            fullWidth
                                            label="Estado"
                                            onChange={(event => {
                                                this.setState({
                                                    estado:event.target.value
                                                });
                                            })}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            variant="outlined"
                                            required
                                            fullWidth
                                            label="Habilidades"
                                            multiline
                                            rowsMax="4"
                                            onChange={(event => {
                                                this.setState({
                                                    habilidades:event.target.value
                                                });
                                            })}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            variant="outlined"
                                            required
                                            fullWidth
                                            label="Conociomientos"
                                            multiline
                                            rowsMax="4"
                                            onChange={(event => {
                                                this.setState({
                                                    conociomientos:event.target.value
                                                });
                                            })}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            variant="outlined"
                                            required
                                            fullWidth
                                            label="Logo Empresa"
                                            onChange={(event => {
                                                this.setState({
                                                    logoEmpresa:event.target.value
                                                });
                                            })}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            variant="outlined"
                                            required
                                            fullWidth
                                            label="Requisitos"
                                            multiline
                                            rowsMax="4"
                                            onChange={(event => {
                                                this.setState({
                                                    requisitosAdd:event.target.value
                                                });
                                            })}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            variant="outlined"
                                            required
                                            fullWidth
                                            label="Funcion"
                                            multiline
                                            rowsMax="4"
                                            onChange={(event => {
                                                this.setState({
                                                    funcion:event.target.value
                                                });
                                            })}
                                        />
                                    </Grid>


                                    <Grid item xs={1}>

                                    </Grid>
                                </Grid>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                    onClick={()=>{
                                        this.dataReguister()
                                    }}
                                >
                                    Sign Up
                                </Button>

                                {this.state.noDate ?<h5>Faltan Datos</h5> : null }
                                <Grid container justify="flex-end">
                                </Grid>
                            </div>
                        </div>
                    </Container>
                </div>

                <Dialog
                    open={this.state.isDone}

                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{this.state.TextDialgo}</DialogTitle>

                    <DialogActions>

                        <Button onClick={()=>{
                            this.setState({
                                isDone:false
                            });
                        }}
                                color="primary" autoFocus>
                            OK
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }



}

const useStyles = makeStyles(theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        },
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor:'white'
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));


const mapStateToProps = (state) => {
    return {
        dataLogin: state.Login.dataLogin,
        errorLogin: state.Login.errorLogin,

        dataReguistroVacante: state.HomeEmpresa.dataReguistroVacante,
        errorReguistroVacante: state.HomeEmpresa.errorReguistroVacante,

        dataListV:state.ListV.dataListV,
        errorListV:state.ListV.errorListV
    }
};
export default connect(mapStateToProps, {HomeEmpresaAction , ListVAction})(IsLoginHome);

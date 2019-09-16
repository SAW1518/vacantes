
import React, {Component} from 'react';

import {connect} from "react-redux";
import {ReguistroAction} from '../../business/actions/Reguistro/ReguistroAction'
import { Link } from 'react-router-dom'


type ReguistroProps = {
    ReguistroAction: (any)=>void,
    dataReguistro: any,
    errorReguistro: any,
};
type ReguistroState = {
    email:string,
    password:string,
    name:string,
    active: number,
    nombreEmpresa:string,
    rfc:string,
    razonSocial:string,
    calle:string,
    numeroCalle:string,
    colonia:string,
    codigoPostal:string,
    ciudad:string,
    municipio:string,
    estado:string,
    pais:string,
    paginaWeb:string,
    tamanoEmpresa:string,
    nombreContacto:string,
    apellidoPaternoContacto:string,
    apellidoMaternoContacto:string,
    cargoContacto:string,
    celularContacto:string,
    telefonoContacto:string,
    extencionTelefonoContacto:string,
    emailContacto:string,
    error:boolean,
    Cargando:boolean,
    fatalError:boolean,
    isok:boolean,
};

class Reguistro extends Component<ReguistroProps, ReguistroState> {

    state = {
        email:'',
        password:'',
        name:'',
        active: 0,
        nombreEmpresa:'',
        rfc:'',
        razonSocial:'',
        calle:'',
        numeroCalle:'',
        colonia:'',
        codigoPostal:'',
        ciudad:'',
        municipio:'',
        estado:'',
        pais:'Mexico',
        paginaWeb:'',
        tamanoEmpresa:'',
        nombreContacto:'',
        apellidoPaternoContacto:'',
        apellidoMaternoContacto:'',
        cargoContacto:'',
        celularContacto:'',
        telefonoContacto:'',
        extencionTelefonoContacto:'',
        emailContacto:'',
        errorMensaje:false,
        Cargando:false,
        fatalError:false,
        isok:false
    };

    isRegister=()=>{

        const {
            email,
            password,
            name,
            active,
            nombreEmpresa,
            rfc,
            razonSocial,
            calle,
            numeroCalle,
            colonia,
            codigoPostal,
            ciudad,
            municipio,
            estado,
            pais,
            paginaWeb,
            tamanoEmpresa,
            nombreContacto,
            apellidoPaternoContacto,
            apellidoMaternoContacto,
            cargoContacto,
            celularContacto,
            telefonoContacto,
            extencionTelefonoContacto,
            emailContacto,
        } =this.state
        if(
            email !== '' && password  !== '' && name  !== '' && nombreEmpresa  !== '' && rfc  !== '' && razonSocial  !== '' && calle && numeroCalle  !== ''
            && colonia  !== ''&& codigoPostal  !== ''&& ciudad  !== '' && municipio  !== '' && estado  !== '' && pais  !== '' && paginaWeb  !== '' && tamanoEmpresa  !== '' && nombreEmpresa  !== '' && nombreContacto  !== ''
            && apellidoPaternoContacto  !== '' &&apellidoMaternoContacto  !== '' && cargoContacto  !== '' && celularContacto  !== '' && telefonoContacto  !== '' && extencionTelefonoContacto  !== '' && emailContacto  !== ''
        ){
            this.props.ReguistroAction(this.state)
            console.log( this.state)
            this.setState({
                Cargando : true
            });
        }else {
            this.setState({
                errorMensaje:true
            });
        }
    }

    componentWillReceiveProps(nextProps: Props) {
        const {dataReguistro, errorReguistro} = nextProps;
        if (dataReguistro.body && dataReguistro.isOk !== false) {
            console.log('Data Login ', dataReguistro);
            this.setState({
                isok:true,
                fatalError:false,

            });

        }
        if (errorReguistro.error && !errorReguistro.isOk) {
            console.log('Error Login 111 ', errorReguistro);
            this.setState({
                isok:false,
                fatalError:true,

            });
        }

    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-10 mx-auto">
                        <div className="card card-signin my-5">
                            <div className="card-body">
                                <h5 className="card-title text-center">Registra tu empresa</h5>
                                {this.state.Cargando ? this.isLoader() : this.isForm()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };


    isLoader=()=> {
            return (
                <div className="text-center">
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                    {this.state.isok ?
                        <div className="alert alert-success" role="alert">
                            Registro Terminado Espere a que su Perfil Sea Aceptado
                            <Link  to="/" type="button" className="btn btn-outline-success">Ir Inicio</Link>
                        </div>
                        :
                        this.error()
                    }

                </div>
            )

    }

    error =()=>{
        return(
            <div>
                {this.state.fatalError?
                    <div className="alert alert-warning" role="alert">
                    Ocurrio un error en el reguistro
                        <Link  to="/" type="button" className="btn btn-warning">Ir Inicio</Link>
                </div>
                    :
                    null
                }

            </div>

        )
    }

    isForm = () =>{
        return(
            <form className="form-signin">
                <label>Email address</label>
                <input type="email"  className="form-control"
                       placeholder="Email address" required autoFocus
                       onChange={(event)=>{
                           this.setState({
                               email:event.target.value
                           });
                       }}

                />
                <label>Password</label>
                <input type="password" className="form-control"
                       placeholder="Password" required
                       onChange={(event)=>{
                           this.setState({
                               password:event.target.value
                           });
                       }}
                />
                <label>Nombre de ususrio</label>
                <input type="text"  className="form-control"
                       placeholder="Nombre de ususrio" required
                       onChange={(event)=>{
                           this.setState({
                               name:event.target.value
                           });
                       }}
                />
                <label>Nombre de Empresa</label>
                <input type="text" className="form-control"
                       placeholder="Nombre de Empresa" required
                       onChange={(event)=>{
                           this.setState({
                               nombreEmpresa:event.target.value
                           });
                       }}
                />
                <label >RFC</label>
                <input type="text" className="form-control"
                       placeholder="RFC" required
                       onChange={(event)=>{
                           this.setState({
                               rfc:event.target.value
                           });
                       }}
                />
                <label >Razon Social</label>
                <input type="text" className="form-control"
                       placeholder="Razon Social" required
                       onChange={(event)=>{
                           this.setState({
                               razonSocial:event.target.value
                           });
                       }}
                />
                <label>Calle </label>
                <input type="text"  className="form-control"
                       placeholder="Calle " required
                       onChange={(event)=>{
                           this.setState({
                               calle:event.target.value
                           });
                       }}
                />
                <label>Numero de calle</label>
                <input type="number"  className="form-control"
                       placeholder="Numero de calle" required
                       onChange={(event)=>{
                           this.setState({
                               numeroCalle:event.target.value
                           });
                       }}
                />
                <label>Colonia</label>
                <input type="text"  className="form-control"
                       placeholder="Colonia" required
                       onChange={(event)=>{
                           this.setState({
                               colonia:event.target.value
                           });
                       }}
                />

                <label >Codigo Postal</label>
                <input  className="form-control"
                        type={'number'}
                        placeholder="Codigo Postal" required
                        onChange={(event)=>{
                            this.setState({
                                codigoPostal:event.target.value
                            });
                        }}
                />

                <label >Eestado</label>
                <select name="estados" className="form-control"
                        placeholder="Ciudad" required
                        onChange={(event)=>{
                            this.setState({
                                estado:event.target.value
                            });
                        }}
                >
                    <option value="Todo México">Todo México</option>
                    <option value="Aguascalientes">Aguascalientes</option>
                    <option value="Baja California">Baja California</option>
                    <option value="Baja California Sur">Baja California Sur</option>
                    <option value="Campeche">Campeche</option>
                    <option value="Coahuila de Zaragoza">Coahuila de Zaragoza</option>
                    <option value="Colima">Colima</option>
                    <option value="Chiapas">Chiapas</option>
                    <option value="Chihuahua">Chihuahua</option>
                    <option value="Distrito">Distrito Federal</option>
                    <option value="Durango">Durango</option>
                    <option value="Guanajuato">Guanajuato</option>
                    <option value="Guerrero">Guerrero</option>
                    <option value="Hidalgo">Hidalgo</option>
                    <option value="Jalisco">Jalisco</option>
                    <option value="México">México</option>
                    <option value="Michoacán">Michoacán de Ocampo</option>
                    <option value="Morelos">Morelos</option>
                    <option value="Nayarit">Nayarit</option>
                    <option value="Nuevo León">Nuevo León</option>
                    <option value="Oaxaca">Oaxaca</option>
                    <option value="Puebla">Puebla</option>
                    <option value="Querétaro">Querétaro</option>
                    <option value="Quintana Roo">Quintana Roo</option>
                    <option value=">San Luis Potos">San Luis Potosí</option>
                    <option value="Sinaloa">Sinaloa</option>
                    <option value="Sonora">Sonora</option>
                    <option value="Tabasco">Tabasco</option>
                    <option value="Tamaulipas">Tamaulipas</option>
                    <option value="Tlaxcala">Tlaxcala</option>
                    <option value="Veracruz de Ignacio de la Llave">Veracruz de Ignacio de la Llave</option>
                    <option value="Yucatán">Yucatán</option>
                    <option value="Zacatecas">Zacatecas</option>


                </select>

                <label >Municipio</label>
                <input type="text" className="form-control"
                       placeholder="Municipio"
                       onChange={(event)=>{
                           this.setState({
                               municipio:event.target.value
                           });
                       }}
                />

                <label >ciudad</label>
                <input type="text"  className="form-control"
                       placeholder="Estado" required
                       onChange={(event)=>{
                           this.setState({
                               ciudad:event.target.value
                           });
                       }}
                />

                <label >Pagina Web</label>
                <input type="text"  className="form-control"
                       placeholder="Pagina Web" required
                       onChange={(event)=>{
                           this.setState({
                               paginaWeb:event.target.value
                           });
                       }}
                />

                <label >Tamano Empresa</label>
                <input type="text"className="form-control"
                       placeholder="Tamano Empresa" required
                       onChange={(event)=>{
                           this.setState({
                               tamanoEmpresa:event.target.value
                           });
                       }}
                />
                <label >Nombre Contacto</label>
                <input type="text" className="form-control"
                       placeholder="Nombre Contacto" required
                       onChange={(event)=>{
                           this.setState({
                               nombreContacto:event.target.value
                           });
                       }}
                />
                <label >Apellido Paterno Contacto</label>
                <input type="text" className="form-control"
                       placeholder="Apellido Paterno Contacto" required
                       onChange={(event)=>{
                           this.setState({
                               apellidoPaternoContacto:event.target.value
                           });
                       }}
                />

                <label>Apellido Materno Contacto</label>
                <input type="text"  className="form-control"
                       placeholder="Apellido Materno Contacto" required
                       onChange={(event)=>{
                           this.setState({
                               apellidoMaternoContacto:event.target.value
                           });
                       }}
                />

                <label>Cargo Contacto</label>
                <input type="text" className="form-control"
                       placeholder="Cargo Contacto" required
                       onChange={(event)=>{
                           this.setState({
                               cargoContacto:event.target.value
                           });
                       }}
                />

                <label >Celular Contacto</label>
                <input type="number"  className="form-control"
                       placeholder="Celular Contacto" required
                       onChange={(event)=>{
                           this.setState({
                               celularContacto:event.target.value
                           });
                       }}
                />

                <label>Telefono Contacto</label>
                <input type="number"  className="form-control"
                       placeholder="Telefono Contacto" required
                       onChange={(event)=>{
                           this.setState({
                               telefonoContacto:event.target.value
                           });
                       }}
                />

                <label>Extencion Telefono Contacto</label>
                <input type="number"  className="form-control"
                       placeholder="Extencion Telefono Contact" required
                       onChange={(event)=>{
                           this.setState({
                               extencionTelefonoContacto:event.target.value
                           });
                       }}
                />

                <label >Email Contacto</label>
                <input type="text"  className="form-control"
                       placeholder="Email Contacto" required
                       onChange={(event)=>{
                           this.setState({
                               emailContacto:event.target.value
                           });
                       }}
                />

                {this.state.errorMensaje ?
                    <div className="alert alert-primary mt-10" role="alert">
                        {'Faltan datos '}
                    </div> : null}
                <button
                    onClick={this.isRegister}
                    className="btn btn-lg btn-primary btn-block text-uppercase" >Sign in

                </button>

            </form>
        )
    }


};



const mapStateToProps = (state) => {
    return {
        dataReguistro: state.Reguistro.dataReguistro,
        errorReguistro: state.Reguistro.errorReguistro
    }
};
export default connect(mapStateToProps, {ReguistroAction})(Reguistro) ;

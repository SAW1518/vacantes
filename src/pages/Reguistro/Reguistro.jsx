// @flow
import * as React from 'react';

type Props = {};
type State = {};

class Reguistro extends React.Component<Props, State> {
    render() {
        return (
            <div className="container">

                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div className="card card-signin my-5">
                            <div className="card-body">
                                <h5 className="card-title text-center">Registra tu empresa</h5>
                                <form className="form-signin">


                                    <label htmlFor="inputEmail">Email address</label>
                                    <input type="email" id="inputEmail" className="form-control"
                                           placeholder="Email address" required autoFocus

                                    />


                                    <label htmlFor="inputPassword">Password</label>
                                    <input type="password" id="inputPassword" className="form-control"
                                           placeholder="Password" required

                                    />
                                    <label htmlFor="inputPassword">Nombre de ususrio</label>
                                    <input type="password" id="inputPassword" className="form-control"
                                           placeholder="Nombre de ususrio" required

                                    />
                                    <label htmlFor="inputPassword">Nombre de Empresa</label>
                                    <input type="password" id="inputPassword" className="form-control"
                                           placeholder="Nombre de Empresa" required

                                    />
                                    <label htmlFor="inputPassword">RFC</label>
                                    <input type="password" id="inputPassword" className="form-control"
                                           placeholder="RFC" required

                                    />
                                    <label htmlFor="inputPassword">Razon Social</label>
                                    <input type="password" id="inputPassword" className="form-control"
                                           placeholder="Razon Social" required

                                    />
                                    <label htmlFor="inputPassword">Calle </label>
                                    <input type="password" id="inputPassword" className="form-control"
                                           placeholder="Calle " required

                                    />
                                    <label htmlFor="inputPassword">Numero de calle</label>
                                    <input type="password" id="inputPassword" className="form-control"
                                           placeholder="Numero de calle" required

                                    />
                                    <label htmlFor="inputPassword">Colonia</label>
                                    <input type="password" id="inputPassword" className="form-control"
                                           placeholder="Colonia" required

                                    />

                                    <label htmlFor="inputPassword">Codigo Postal</label>
                                    <input type="password" id="inputPassword" className="form-control"
                                           placeholder="Codigo Postal" required

                                    />

                                    <label htmlFor="inputPassword">Ciudad</label>
                                    <input type="password" id="inputPassword" className="form-control"
                                           placeholder="Ciudad" required

                                    />
                                    <label htmlFor="inputPassword">Municipio</label>
                                    <input type="password" id="inputPassword" className="form-control"
                                           placeholder="Municipio" required

                                    />

                                    <label htmlFor="inputPassword">Estado</label>
                                    <input type="password" id="inputPassword" className="form-control"
                                           placeholder="Estado" required

                                    />

                                    <label htmlFor="inputPassword">Pagina Web</label>
                                    <input type="password" id="inputPassword" className="form-control"
                                           placeholder="Pagina Web" required

                                    />

                                    <label htmlFor="inputPassword">Tamano Empresa</label>
                                    <input type="password" id="inputPassword" className="form-control"
                                           placeholder="Tamano Empresa" required

                                    />
                                    <label htmlFor="inputPassword">Nombre Contacto</label>
                                    <input type="password" id="inputPassword" className="form-control"
                                           placeholder="Nombre Contacto" required

                                    />
                                    <label htmlFor="inputPassword">Apellido Paterno Contacto</label>
                                    <input type="password" id="inputPassword" className="form-control"
                                           placeholder="Apellido Paterno Contacto" required

                                    />

                                    <label htmlFor="inputPassword">Apellido Materno Contacto</label>
                                    <input type="password" id="inputPassword" className="form-control"
                                           placeholder="Apellido Materno Contacto" required

                                    />

                                    <label htmlFor="inputPassword">Cargo Contacto</label>
                                    <input type="password" id="inputPassword" className="form-control"
                                           placeholder="Cargo Contacto" required

                                    />

                                    <label htmlFor="inputPassword">Celular Contacto</label>
                                    <input type="password" id="inputPassword" className="form-control"
                                           placeholder="Celular Contacto" required

                                    />

                                    <label htmlFor="inputPassword">Telefono Contacto</label>
                                    <input type="password" id="inputPassword" className="form-control"
                                           placeholder="Telefono Contacto" required

                                    />

                                    <label htmlFor="inputPassword">Extencion Telefono Contacto</label>
                                    <input type="password" id="inputPassword" className="form-control"
                                           placeholder="Extencion Telefono Contact" required

                                    />

                                    <label htmlFor="inputPassword">Email Contacto</label>
                                    <input type="password" id="inputPassword" className="form-control"
                                           placeholder="Email Contacto" required

                                    />


                                    <button className="btn btn-lg btn-primary btn-block text-uppercase" >Sign in

                                    </button>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};
export default Reguistro;

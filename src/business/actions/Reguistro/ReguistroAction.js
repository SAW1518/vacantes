import axios from 'axios';

import {
    ROGISTRO_URL,
    ROGISTRO_SUCCESS,
    ROGISTRO_ERROR

} from '../../types';

export const ReguistroAction = ( data ) => {
    return (dispatch) => {
        console.log('ReguistroAction',data);
        axios.post(ROGISTRO_URL, {
            "email": data.email,
            "password": data.password,
            "name": data.name,
            "active": 0,
            "empresa": {
                "nombreEmpresa":data.nombreEmpresa,
                "rfc": data.rfc,
                "razonSocial": data.razonSocial,
                "calle": data.cache,
                "numeroCalle": data.numeroCalle,
                "colonia": data.colonia,
                "codigoPostal": data.codigoPostal,
                "ciudad": data.ciudad,
                "municipio": data.municipio,
                "estado": data.estado,
                "pais": data.pais,
                "paginaWeb": data.paginaWeb,
                "tamanoEmpresa": data.tamanoEmpresa,
                "contacto": {
                    "nombreContacto": data.nombreContacto,
                    "apellidoPaternoContacto": data.apellidoPaternoContacto,
                    "apellidoMaternoContacto": data.apellidoMaternoContacto,
                    "cargoContacto": data.cargoContacto,
                    "celularContacto": data.celularContacto,
                    "telefonoContacto": data.telefonoContacto,
                    "extencionTelefonoContacto": data.extencionTelefonoContacto,
                    "emailContacto": data.emailContacto
                }
            }
        })
            .then((response) => {
                if (response.status === 200) {
                    console.log('REGUITRO SUCCESS ', response);
                    const dataLogin = {
                        isOk: true,
                        body: response.data,
                        isValid: () => {
                            return true
                        }
                    };

                    dispatch({type: ROGISTRO_SUCCESS, payload: dataLogin})
                }
            }, (error) => {
                console.log('REGUITRO ERROR', error);

                const errors = {
                    isOk: false,
                    message: error,
                    error: error,
                    isValid: () => {
                        return false
                    }
                };
                dispatch({type: ROGISTRO_ERROR, payload: errors});

            })
            .catch((error) => {
                console.log('ERROR DE SERVER', error);

                const errors = {
                    isOk: false,
                    message: "error calling server",
                    error: error,
                    isValid: () => {
                        return false
                    }
                };
                dispatch({type: ROGISTRO_ERROR, payload: errors});
            });
    }
};


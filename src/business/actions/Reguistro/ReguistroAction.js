import axios from 'axios';

import {
    ROGISTRO_URL,
    ROGISTRO_SUCCESS,
    ROGISTRO_ERROR

} from '../../types';

export const ReguistroAction = ( ) => {
    return (dispatch) => {
        console.log('DATA LOGIN');
        axios.post(ROGISTRO_URL, {
            "email": "lsdsdsaldfd@lddf.com",
            "password": "1fg23",
            "name": "ljgfs",
            "active": 0,
            "empresa": {
                "nombreEmpresa": "asfgda",
                "rfc": "1231aa",
                "razonSocial": "dsasd",
                "calle": "ads",
                "numeroCalle": "1",
                "colonia": "asda",
                "codigoPostal": 123124,
                "ciudad": "sad",
                "municipio": "asd",
                "estado": "asd",
                "pais": "ads",
                "paginaWeb": "adsdad",
                "tamanoEmpresa": "asda",
                "contacto": {
                    "nombreContacto": "dsa",
                    "apellidoPaternoContacto": "asdad",
                    "apellidoMaternoContacto": "sadasd",
                    "cargoContacto": "sad",
                    "celularContacto": "223123",
                    "telefonoContacto": "1323",
                    "extencionTelefonoContacto": "123",
                    "emailContacto": "adeasd"
                }
            }
        })
            .then((response) => {
                if (response.status === 200) {
                    console.log('REGUITRO SUCCESS ', response.data);
                    const dataLogin = {
                        isOk: true,
                        body: response.data,
                        isValid: () => {
                            return true
                        }
                    };

                    //dispatch({type: ROGISTRO_SUCCESS, payload: dataLogin})
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
                //dispatch({type: ROGISTRO_ERROR, payload: errors});
            });
    }
};


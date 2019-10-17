import axios from 'axios';

import {
    REGUISTRO_VACANTE_URL,
    REGUISTRO_VACANTE_SUCCESS,
    REGUISTRO_VACANTE_ERROR

} from '../../types';


export const HomeEmpresaAction = (date,user) => {
    return (dispatch) => {
        console.log('acton sate', date,user);
        let config = {
            headers: {
                "Authorization": "Bearer " + user.body.token
            },
        }
         axios.post(REGUISTRO_VACANTE_URL, {
             "nombreVacante": date.nombreVacante,
             "numeroPlazas": date.numeroPlazas,
             "genero": date.genero,
             "estadoCivil": date.estadoCivil,
             "edad": date.edad,
             "experiencia": date.experiencia,
             "idioma": date.idioma,
             "escolaridad": date.escolaridad,
             "horario": date.horario,
             "diasLavorales": date.diasLavorales,
             "sueldoBase": date.sueldoBase,
             "prestaciones": date.prestaciones,
             "comisiones": date.comisiones,
             "tipoContrato": date.tipoContrato,
             "nivelVacante": date.nombreVacante,
             "opcionViaje": date.opcionViaje,
             "conociomientos": date.conociomientos,
             "habilidades": date.habilidades,
             "requisitosAdd": date.requisitosAdd,
             "logoEmpresa": date.logoEmpresa,
             "estado": date.estado,
             "users": {
                 "id": user.body.id
             },"carreras": [
                 {
                     "carrerasId": 1

                 },{
                     "carrerasId": 2
                 },
                     {
                         "carrerasId": 3
                     }
             ],
             "funcion": date.funcion
         },
             config,

         )
             .then((response) => {
                 if (response.status === 200) {
                     console.log('REGUISTRO VACANTE SUCCESS ', response);
                     const dataReguister = {
                         isOk: true,
                         body: response.data,
                         isValid: () => {
                             return true
                         }
                     };
                     dispatch({type: REGUISTRO_VACANTE_SUCCESS, payload: dataReguister})
                 }
             }, (error) => {
                 console.log('REGUISTRO VACANTE ERROR', error.message);

                 const errors = {
                     isOk: false,
                     message: error,
                     error: error,
                     isValid: () => {
                         return false
                     }
                 };
                 dispatch({type: REGUISTRO_VACANTE_ERROR, payload: errors});

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
                 dispatch({type: REGUISTRO_VACANTE_ERROR, payload: errors});
             });
    }
};


import {
    REGUISTRO_VACANTE_SUCCESS,
    REGUISTRO_VACANTE_ERROR
} from "../../types";

const stateReguistroVacante={
    dataReguistroVacante:{},
    errorReguistroVacante:{},
};

let HomeEmpresa;

export  default HomeEmpresa   =(state =stateReguistroVacante,action)=>{
    switch (action.type) {

        case REGUISTRO_VACANTE_SUCCESS:
            return {...state,dataReguistroVacante: action.payload};
        case REGUISTRO_VACANTE_ERROR:
            return{...state,errorReguistroVacante: action.payload};
        /*  case GET_DEBTOR_PDF_PURGE:
              return {...stateGetDebtorPDF,purgeGetDebtorPDF:action.payload};*/
    }
    return state;
}


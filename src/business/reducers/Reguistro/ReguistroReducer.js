import {
    ROGISTRO_SUCCESS,
    ROGISTRO_ERROR
} from "../../types";

const stateReguistro = {
    dataReguistro: {},
    errorReguistro: {},
};

let Reguistro;

export default Reguistro = (state = stateReguistro, action) => {
    switch (action.type) {

        case ROGISTRO_SUCCESS:
            return {...state, dataReguistro: action.payload};
        case ROGISTRO_ERROR:
            return {...state, errorReguistro: action.payload};
        /*  case GET_DEBTOR_PDF_PURGE:
              return {...stateGetDebtorPDF,purgeGetDebtorPDF:action.payload};*/
    }
    return state;
}


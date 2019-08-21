import {
    LOGIN_SUCCESS,
    LOGIN_ERROR
} from "../../types";

const stateLogin={
    dataLogin:{},
    errorLogin:{},
};

let Login;

export  default Login   =(state =stateLogin,action)=>{
    switch (action.type) {

        case LOGIN_SUCCESS:
            return {...state,dataLogin: action.payload};
        case LOGIN_ERROR:
            return{...state,errorLogin: action.payload};
      /*  case GET_DEBTOR_PDF_PURGE:
            return {...stateGetDebtorPDF,purgeGetDebtorPDF:action.payload};*/
    }
    return state;
}


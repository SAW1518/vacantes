import {
   GET_LIST_VA_ERROR,
    GET_LIST_VA_SUCCESS
} from "../../types";

const stateListV={
    dataListV:{},
    errorListV:{},
};

let ListV;

export  default ListV   =(state =stateListV,action)=>{
    switch (action.type) {

        case GET_LIST_VA_SUCCESS:
            return {...state,dataListV: action.payload};
        case GET_LIST_VA_ERROR:
            return{...state,errorListV: action.payload};
        /*  case GET_DEBTOR_PDF_PURGE:
              return {...stateGetDebtorPDF,purgeGetDebtorPDF:action.payload};*/
    }
    return state;
}


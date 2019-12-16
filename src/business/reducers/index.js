import {combineReducers} from 'redux'
import LoginReducer from './Login/LoginReducer'
import ReguistroReducer from './Reguistro/ReguistroReducer'
import HomeEmpresaReducer from './HomeEmpresa/HomeEmpresaReducer.js'
import ListVReducer from './ListV/ListVReducer'

export default  combineReducers({
    Login:LoginReducer,
    Reguistro:ReguistroReducer,
    HomeEmpresa:HomeEmpresaReducer,
    ListV:ListVReducer,

});

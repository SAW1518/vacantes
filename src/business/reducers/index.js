import {combineReducers} from 'redux'
import LoginReducer from './Login/LoginReducer'
import ReguistroReducer from './Reguistro/ReguistroReducer'
export default  combineReducers({
    Login:LoginReducer,
    Reguistro:ReguistroReducer
});

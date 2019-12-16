import axios from 'axios';

import {
    LOGIN_URL,
    LOGIN_SUCCESS,
    LOGIN_ERROR

} from '../../types';
import {Tokens} from "../../../Storage/Tokens";




export const LoginAction = (username,password ) => {
    return (dispatch) => {
        console.log('DATA LOGIN');
        axios.post(LOGIN_URL, {
            "username": username,
            "password": password
        })
            .then((response) => {
                if (response.status === 200) {
                    console.log('LOGIN SUCCESS ', response.data);
                    Tokens.setT(response.data.token);
                    const dataLogin = {
                        isOk: true,
                        body: response.data,
                        isValid: () => {
                            return true
                        }
                    };

                    dispatch({type: LOGIN_SUCCESS, payload: dataLogin})
                }
            }, (error) => {
                console.log('LOGIN ERROR', error);

                const errors = {
                    isOk: false,
                    message: error,
                    error: error,
                    isValid: () => {
                        return false
                    }
                };
                 dispatch({type: LOGIN_ERROR, payload: errors});

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
                 dispatch({type: LOGIN_ERROR, payload: errors});
            });
    }
};


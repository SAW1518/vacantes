import axios from 'axios';

import {
    GET_LIST_VA,
    GET_LIST_VA_SUCCESS,
    GET_LIST_VA_ERROR,

} from '../../types';


export const ListVAction = ( user) => {
    return (dispatch) => {
        console.log('acton sate', user);
        let config = {
            headers: {
                "Authorization": "Bearer " + user.body.token
            },
        }
         axios.get(GET_LIST_VA,
             config,

         )
             .then((response) => {
                 if (response.status === 200) {
                     console.log('LIST VACANTE SUCCESS ', response);
                     const dataLIST = {
                         isOk: true,
                         body: response.data,
                         isValid: () => {
                             return true
                         }
                     };
                     dispatch({type: GET_LIST_VA_SUCCESS, payload: dataLIST})
                 }
             }, (error) => {
                 console.log('LIST VACANTE ERROR', error.message);

                 const errors = {
                     isOk: false,
                     message: error,
                     error: error,
                     isValid: () => {
                         return false
                     }
                 };
                 dispatch({type: GET_LIST_VA_ERROR, payload: errors});

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
                 dispatch({type: GET_LIST_VA_ERROR, payload: errors});
             });
    }
};


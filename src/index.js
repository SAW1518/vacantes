import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './componets/App';
import 'bootstrap/dist/css/bootstrap.css';
import { applyMiddleware ,createStore } from 'redux'
import thunk from 'redux-thunk';

import {Provider} from 'react-redux'


import reducers from './business/reducers'
const middleware = applyMiddleware(thunk);
const store = createStore(
    reducers,//Todos Lo reducer
    {},
    middleware,//Estado Inicial
);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

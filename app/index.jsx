import React from 'react';
import ReactDOM  from 'react-dom';
import {createStore,combineReducers} from 'redux';
import {Provider} from 'react-redux';

import App from './component/app';
import css from './css/style.css';
import list from './reducers/list.reducer';
import footer from './reducers/foot.reducer';

const reducers = combineReducers({list,footer});
const store = createStore(reducers);

const div = document.createElement('div');
document.body.appendChild(div);
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
,div);
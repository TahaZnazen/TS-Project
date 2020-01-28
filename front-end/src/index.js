import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {Provider} from "react-redux"
import {createStore,combineReducers} from "redux"
import counterReducer from "./store/reducers/counter"
import itemsReducer from "./store/reducers/items"

const rootReducer = combineReducers({
    count:counterReducer,
    items:itemsReducer
})
const store= createStore(rootReducer)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));



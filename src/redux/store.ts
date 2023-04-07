
import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { categoryReducers } from './Categories/categories.reducers';
// import {loginReducers} from "./reducers";
import { getCategories } from './Categories/categories.actions';

const reducers = combineReducers({
    categories: categoryReducers
}
)
const initialState = {}

const middleware = [thunk];

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(...middleware)));

export const allActions = {
    getCategories
}
export type State = ReturnType<typeof reducers>
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

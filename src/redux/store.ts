
import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
// import {loginReducers} from "./reducers";

const reducers = combineReducers({
    // user: loginReducers
}
)
const initialState = {}

const middleware = [thunk];

export const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(...middleware)));


export type State = ReturnType<typeof reducers>
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


import {createStore, applyMiddleware, combineReducers, compose, bindActionCreators} from 'redux';
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { categoryReducers } from './Categories/categories.reducers';
// import {loginReducers} from "./reducers";
import { getCategories } from './Categories/categories.actions';
import { getImages } from './Images/images.actions';
import { imageAlbumReducer, imageDetailsReducer, imageReducers, imageUserRedeucer } from './Images/images.reducers';

const reducers = combineReducers({
    categories: categoryReducers,
    images : imageReducers,
    imageDetails : imageDetailsReducer,
    imageByAlbums : imageAlbumReducer,
    imageByUser : imageUserRedeucer
}
)
const initialState = {}

const middleware = [thunk];

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(...middleware)));

export const allActions = {
    getCategories,
    getImages
}

export type State = ReturnType<typeof reducers>
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

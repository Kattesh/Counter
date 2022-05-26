import { combineReducers, createStore } from "redux";
import {getLocalStorage, setLocalStorage} from "./localStorage";
import { counterReducer } from "./counterReducer";

const rootReducer = combineReducers({
    counter: counterReducer
})

const state = getLocalStorage()

export const store = createStore(rootReducer, state);

store.subscribe(() => {
    setLocalStorage({
        counter: store.getState().counter
    })
})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

// @ts-ignore
window.store = store;
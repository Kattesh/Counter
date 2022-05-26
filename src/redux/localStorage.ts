import {ValuesType} from "./counterReducer";

export const getLocalStorage = () => {
    try {const keyValue = localStorage.getItem('counter-options');
        if (keyValue) return JSON.parse(keyValue);
    } catch(e) {
        return undefined;
    }
};

export const setLocalStorage = (state: LocalState) => {
    try {localStorage.setItem('counter-options', JSON.stringify(state));
        //setItem(keyName, keyValue)
    } catch(e) {
        return undefined;
    }
};

type LocalState = {
    counter: {options: ValuesType}
}
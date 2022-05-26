import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Counter from './components/Counter/Counter';
import Options from './components/Options/Options';
import { AppStateType } from './redux/store';

export const App=()=> {
    const EditMode = useSelector<AppStateType, boolean>(state => state.counter.EditMode)
    const ValueError = useSelector<AppStateType, string>(state => state.counter.ValueError)
    return (
        <div className="App">
            <Options
                editMode={EditMode}
                validatorError={ValueError} />

            <Counter
                editMode={EditMode}
                validatorError={ValueError} />
        </div>
    );
}



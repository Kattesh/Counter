import React from 'react';
import CounterScreen from './CounterScreen';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../redux/store';
import {setCounterValue, ValuesType} from '../../redux/counterReducer';
import {Button} from "../Button/Button";

const Counter: React.FC<CounterPropsType> = ({editMode, validatorError}) => {

    const counterValue = useSelector<AppStateType, number>(state => state.counter.counterValue);
    const {startValue, maxValue} = useSelector<AppStateType, ValuesType>(state => state.counter.options);

    const dispatch = useDispatch();

    const inc = () => {
        if (counterValue < maxValue) {
            dispatch(setCounterValue(counterValue + 1));
        }
    }

    const reset = () => {
        dispatch(setCounterValue(startValue))
    }

    return (
        <div className="counter">
            <CounterScreen
                counterValue={counterValue}
                maxValue={maxValue}
                validatorError={validatorError}
                editMode={editMode}/>

            <div className="buttons_wrapper">
                <Button
                    onClick={inc}
                    disabled={editMode || counterValue === maxValue}
                    title="inc"/>

                <Button
                    onClick={reset}
                    disabled={editMode || counterValue === startValue}
                    title="reset"/>
            </div>
        </div>
    )
}

export default Counter;


type CounterPropsType = {
    validatorError: string
    editMode: boolean
}
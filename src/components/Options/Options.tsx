import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    setCounterOptions,
    setCounterValue,
    setOptionEditMode,
    setOptionValueError,
    ValuesType
} from '../../redux/counterReducer';
import { AppStateType } from '../../redux/store';
import {Button} from '../Button/Button';
import OptionsField from './OptionsField';
import OptionsScreen from './OptionsScreen';

const Options: React.FC<OptionsPropsType> = ({editMode, validatorError}) => {

    const counterOptions = useSelector<AppStateType, ValuesType>(state => state.counter.options);
    const dispatch = useDispatch();

    const [startFieldValue, setStartFieldValue] = useState(counterOptions.startValue);
	const [maxFieldValue, setMaxFieldValue] = useState(counterOptions.maxValue);


    const confirmNewOptions = () => {
        if (editMode && !validatorError) {

            const newOptions = {
                startValue: startFieldValue,
                maxValue: maxFieldValue
            };

            dispatch( setCounterOptions(newOptions) );
            dispatch( setCounterValue(startFieldValue) );
            dispatch( setOptionEditMode(false) );
        }
	}


    const setValidatorError = (error: string) => {
        dispatch( setOptionValueError(error) )
    }

    const onStartValueChangeHandler = (value: number) => {
        setStartFieldValue(value);
        dispatch( setOptionEditMode(true) );

        if (value < 0) return setValidatorError("Incorrect value!");
        if (value >= maxFieldValue) return setValidatorError("The max value must be greater than the start value!");

        if (maxFieldValue >= 0) setValidatorError('');
    }

    const onMaxValueChangeHandler = (value: number) => {
        setMaxFieldValue(value);
        dispatch( setOptionEditMode(true) );

        if (value < 0) return setValidatorError("Incorrect value!");
        if (value <= startFieldValue) return setValidatorError("The max value must be greater than the start value!");

        if (startFieldValue >= 0) setValidatorError('');
    }

    return (
        <div className="options" >
            <OptionsScreen>

                <OptionsField 
                    title="start value" 
                    inputValue={startFieldValue}
                    onInputChange={onStartValueChangeHandler}
                    validationError={startFieldValue >= maxFieldValue || startFieldValue < 0} />
                <OptionsField 
                    title="max value"
                    inputValue={maxFieldValue}
                    onInputChange={onMaxValueChangeHandler}
                    validationError={startFieldValue >= maxFieldValue || maxFieldValue < 0} />
                    
            </OptionsScreen>

            <div className="buttons_wrapper">
                <Button 
                    disabled={!!validatorError || !editMode}
                    onClick={confirmNewOptions}
                    title="set" />
            </div>
        </div>
    )
}

export default Options;


type OptionsPropsType = {
    editMode: boolean
    validatorError: string
}
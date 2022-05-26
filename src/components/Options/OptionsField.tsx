import React from 'react';
import s from './OptionsField.module.css';

const OptionsField: React.FC<OptionsFieldPropsType> = ({title, inputValue, validationError, onInputChange}) => {

    const onInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onInputChange(Number(e.currentTarget.value));
    }

    const fieldCN = validationError ? `${s.options_field} ${s.error}` : s.options_field;

    return (
        <label className={fieldCN}>
            <span>{title}</span>
            <input value={inputValue} onChange={onInputChangeHandler} type="number" />
        </label> 
    )
}

export default OptionsField;


type OptionsFieldPropsType = {
    title: string
    inputValue: number
    validationError: boolean
    onInputChange: (value: number) => void
}
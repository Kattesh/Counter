import React from 'react';


const CounterScreen: React.FC<ScreenPropsType> = ({validatorError, counterValue, maxValue, editMode}) => {

    const counterValueCN = (counterValue === maxValue) ? `counter_value counter_value_max` : 'counter_value';
    const counterMessage= validatorError ? <span className="error_text">{validatorError}</span> : <span>Enter values and press "set"</span>;

    return (
        <div className="screen" >
            {editMode ? counterMessage : <span className={counterValueCN}>{counterValue}</span>
            }
        </div>
    )
}

export default CounterScreen;


type ScreenPropsType = {
    counterValue: number
    maxValue: number
    validatorError: string
    editMode: boolean
}
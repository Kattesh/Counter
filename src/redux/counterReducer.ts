export type ValuesType = {
    startValue: number
    maxValue: number
}

const initialState = {
    counterValue: 0,
    options: {
        startValue: 0,
        maxValue: 5,
    } as ValuesType,

    EditMode: true,
    ValueError: '',
}

type StateType = typeof initialState

export const counterReducer = (state: StateType = initialState, action: Actions): StateType => {
    switch (action.type) {
        case 'counter/SET_COUNTER_VALUE':
            return {
                ...state,
                counterValue: action.value,
            }
        case 'counter/SET_COUNTER_OPTIONS':
            return {
                ...state,
                options: action.options,
            }
        case 'counter/SET_OPTION_EDIT_MODE':
            return {
                ...state,
                EditMode: action.editMode,
            }
        case 'counter/SET_OPTION_VALUE_ERROR':
            return {
                ...state,
                ValueError: action.message
            }
        default:
            return state;
    }
}


type Actions = ReturnType<typeof setCounterValue> |
    ReturnType<typeof setCounterOptions> |
    ReturnType<typeof setOptionEditMode> |
    ReturnType<typeof setOptionValueError>


export const setCounterValue = (value: number) => ({type: 'counter/SET_COUNTER_VALUE', value} as const);
export const setCounterOptions = (options: ValuesType) => ({type: 'counter/SET_COUNTER_OPTIONS', options} as const);
export const setOptionEditMode = (editMode: boolean) => ({type: 'counter/SET_OPTION_EDIT_MODE', editMode} as const);
export const setOptionValueError = (message: string) => ({type: 'counter/SET_OPTION_VALUE_ERROR', message} as const);

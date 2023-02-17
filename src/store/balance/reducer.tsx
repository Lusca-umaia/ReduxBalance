interface IAction {
    type: string,
    payload: any
}

const BALANCE_INITIAL_STATE = {
    balance: 0,
    balanceValue: 0,
    currentTheme: 'LIGHT'
}

const balanceReducer = (state = BALANCE_INITIAL_STATE, action: IAction) => {
    switch (action.type) {
        case 'ADD_MONEY':
            return {
                ...state,
                balance: action.payload
            }

        case 'REMOVE_MONEY':
            return {
                ...state,
                balance: action.payload
            }

        case 'SET_BALANCE_VALUE':
            return {
                ...state,
                balanceValue: action.payload
            }

        case 'SET_THEME':
            return {
                ...state,
                currentTheme: action.payload
            }

        default:
            return state;
    }
}

export default balanceReducer
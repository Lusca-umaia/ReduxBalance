export const addBalanceAction = (balance: number, balanceValue: number) => {
    return {
        type: 'ADD_MONEY',
        payload: balance += balanceValue
    }
}

export const removeBalanceAction = (balance: number, balanceValue: number) => {
    return {
        type: 'REMOVE_MONEY',
        payload: balance -= balanceValue
    }
}

export const setValueBalanceAction = (balanceValue: number) => {
    return {
        type: 'SET_BALANCE_VALUE',
        payload: balanceValue
    }
}
export const setThemeAction = (currentTheme: string) => {
    return {
        type: 'SET_THEME',
        payload: currentTheme
    }
}
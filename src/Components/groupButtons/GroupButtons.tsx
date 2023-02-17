import { useSelector } from 'react-redux/es/exports'
import store from '../../store'
import { addBalanceAction, removeBalanceAction } from '../../store/balance/actions'

import './style.scss'


export interface IState {
    balance: {
        balance: number
        balanceValue: number
        currentTheme: string
    }
}

const GroupButtons: React.FC = () => {
    const balance = useSelector((state: IState) => state.balance)

    return (
        <div className="groupButtons">
            <button
                type="button"
                className='balance'
                id={balance.currentTheme == 'DARK' ? 'buttonDark' : ''}
                disabled={balance.balanceValue > 0 ? false : true}
                onClick={() => store.dispatch(removeBalanceAction(balance.balance, balance.balanceValue))}
            >
                Sacar R$ {balance.balanceValue}
            </button>
            <button
                type="button"
                id={balance.currentTheme == 'DARK' ? 'buttonDark' : ''}
                disabled={balance.balanceValue > 0 ? false : true}
                onClick={() => store.dispatch(addBalanceAction(balance.balance, balance.balanceValue))}
            >
                Depositar R$ {balance.balanceValue}
            </button>
        </div>
    )
}

export default GroupButtons
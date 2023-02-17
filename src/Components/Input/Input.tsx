import './style.scss'

import store from "../../store"

import { useSelector } from 'react-redux/es/exports'

import { setValueBalanceAction } from "../../store/balance/actions"

import { IState } from "../groupButtons/GroupButtons"



const Input: React.FC = () => {
    const balance = useSelector((state: IState) => state.balance)

    return (
        <div className='inputContainer'>
            <input
                type={'number'}
                min={0}
                id={balance.currentTheme == 'DARK' ? 'inputDark' : ''}
                value={balance.balanceValue}
                onChange={(e) => store.dispatch(setValueBalanceAction(parseInt(e.target.value)))} />
        </div>
    )
}

export default Input
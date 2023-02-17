import './style.scss'
import store from '../../store'
import { useSelector } from 'react-redux/es/exports'
import { useState, useEffect } from 'react'
import { IState } from '../groupButtons/GroupButtons'
import { setThemeAction } from '../../store/balance/actions'
const Switch: React.FC = () => {
    const balance = useSelector((state: IState) => state.balance)
    const [valueInput, setValueInput] = useState(false)


    useEffect(() => {
        if (valueInput) {
            store.dispatch(setThemeAction('DARK'))
        }
        else {
            store.dispatch(setThemeAction('LIGHT'))
        }
    }, [valueInput])

    return (
        <section className="sectionSwitch">
            <label>
                <input
                    type="checkbox"
                    className='checkbox'
                    id='checkbox'
                    onChange={() => setValueInput(!valueInput)}
                />
                <div>
                    <div className='boxButton' />
                </div>
            </label>
        </section>
    )
}

export default Switch
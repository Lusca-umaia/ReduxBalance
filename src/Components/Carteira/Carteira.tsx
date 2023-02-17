import './style.scss'
import store from '../../store'
import { IState } from '../groupButtons/GroupButtons'
import { useSelector } from 'react-redux/es/hooks/useSelector'

const Carteira: React.FC = () => {
    const balance = useSelector((state: IState) => state.balance)

    return (
        <div className='group'>
            <section className='carteiraContainer' id={balance.currentTheme == 'DARK' ? 'carteiraDark' : 'carteiraLight'}>
                <div className='carteiraHeader'>
                    <p>
                        R$
                    </p>
                    <img
                        src='https://logosmarcas.net/wp-content/uploads/2020/09/Mastercard-Logo.png'
                    />
                </div>
                <h3>R$ {balance.balance},00</h3>
            </section>
        </div>
    )
}

export default Carteira
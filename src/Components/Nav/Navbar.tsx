import './style.scss'
import { useSelector } from 'react-redux/es/exports'
import { IState } from '../groupButtons/GroupButtons'

const Navbar: React.FC = () => {
    const balance = useSelector((state: IState) => state.balance)
    return (
        <nav className={balance.currentTheme == 'DARK' ? 'DARK' : 'LIGHT'}>
            <img
                src="https://imagensemoldes.com.br/wp-content/uploads/2020/04/pig-money-png.png"
            />
            <span>Depósitos - Online</span>
        </nav>
    )
}

export default Navbar
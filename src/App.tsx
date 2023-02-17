import Carteira from "./Components/Carteira/Carteira"
import GroupButtons from "./Components/groupButtons/GroupButtons"
import Navbar from "./Components/Nav/Navbar"
import Input from "./Components/Input/Input"
import Switch from "./Components/Switch/Switch"
import './App.scss'
import { IState } from "./Components/groupButtons/GroupButtons"
import { useSelector } from 'react-redux/es/exports'

function App() {
  const balance = useSelector((state: IState) => state.balance)

  return (
    <div className={`App ${balance.currentTheme == 'DARK' ? 'containerDark' : 'containerLight'}`}>
      <Navbar />
      <section>
        <h1 style={{ margin: '20px 0', textAlign: 'center', color: `${balance.currentTheme == 'DARK' ? '#fff' : ''}` }}>
          Olá, seja bem-vindo(a), forneça a quantidade que deseja sacar ou depositar:
        </h1>
      </section>
      <Input />
      <GroupButtons />
      <Carteira />
      <Switch />
    </div>
  )
}

export default App

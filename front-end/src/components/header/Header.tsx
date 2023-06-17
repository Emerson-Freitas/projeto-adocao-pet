import styles from './Header.module.css'
import HouseIcon from '../../assets/Casa.svg'
import SmallLogo from '../../assets/logo_white.svg'
import Messages from '../../assets/Mensagens.svg'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className={styles.header}>
        <Link to='/'><img src={SmallLogo} alt="Logo adopet" style={{marginLeft: '160px'}}/></Link> 
        <Link to='/' title='Voltar para Home'><img src={HouseIcon} alt="Icone para voltar para página home" style={{marginLeft: '48px', marginRight: '32.8px'}}/></Link>
        <img src={Messages} alt="Icone de mensagens"/>
    </div>
  )
}

export default Header
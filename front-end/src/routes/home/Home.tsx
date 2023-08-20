import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Logo from '../../assets/Logo.svg'
import Container from '../../components/container/Container'
import styles from './Home.module.css'
import Message from '../../components/message/Message'
import Button from '../../components/button/Button'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <Header/>
        <Container>
          <div className={styles.main}>
            <img className={styles.logo} src={Logo} alt="Logo Adopet" />
            <h1>Boas-vindas</h1>
            <Message
              message={"Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!"}
              colorParagraph={"#FFFFFF"}
            />
            <Link to="/sign" style={{textDecoration: 'none'}}><Button message={"Já tenho uma conta"}/></Link>
            <Link to="/register" style={{textDecoration: 'none'}}><Button message={"Quero me cadastrar"}/></Link>
          </div>
        </Container>
        <Footer/>
    </div>
  )
}

export default Home
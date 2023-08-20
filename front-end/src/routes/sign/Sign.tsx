import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import Main from "../../components/main/Main"
import Logo from '../../assets/Logo_azul.svg'
import Form from "../../components/form/Form"
import Input from "../../components/input/Input"
import Button from "../../components/button/Button"
import Container from "../../components/container/Container"
import Message from "../../components/message/Message"
import styles from './Sign.module.css'

const Sign = () => {
  return (
    <div>   
        <Header/>
        <Container>
          <div className={styles.main}>
            <img className={styles.logo} src={Logo} alt="Logo Adopet" />
            <Message
                message={"Já tem uma conta? Faça o seu login"}
                colorParagraph={"#3772FF"}
            />
            <Form
                inputs={[
                    <Input
                        labelValue={"Email"}
                        placeHolder={"Digite seu melhor email"}
                        id={"email"}
                        name={"email"}
                    />,
                    <Input
                        labelValue={"Senha"}
                        placeHolder={"Digite a sua senha"}
                        id={"senha"}
                        name={"senha"}
                        inputType="password"
                    />
                ]}
                buttonForm={<Button message={"Entrar!"}/>}
            />
          </div>
        </Container>
        <Footer/>
    </div>
  )
}

export default Sign
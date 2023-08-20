import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import Logo from '../../assets/Logo_azul.svg'
import Form from "../../components/form/Form"
import Input from "../../components/input/Input"
import Button from "../../components/button/Button"
import Container from "../../components/container/Container"
import styles from './Resgister.module.css'
import Message from "../../components/message/Message"

const Register = () => {
    return (
        <div>
            <Header/>
            <Container>
                <div className={styles.main}>
                    <img className={styles.logo} src={Logo} alt="Logo Adopet" />
                    <Message
                        message={"Ainda não tem cadastro? Então, antes de buscar seu melhor amigo, precisamos de alguns dados:"}
                        colorParagraph={"#3772FF"}
                    />
                    <Form
                        inputs={[
                            <Input
                                labelValue={"Nome"}
                                placeHolder={"Digite o seu nome"}
                                id={"nome"}
                                name={"nome"}
                            />,
                            <Input
                                labelValue={"Email"}
                                placeHolder={"Digite seu melhor email"}
                                id={"email"}
                                name={"email"}
                            />,
                            <Input
                                labelValue={"Senha"}
                                placeHolder={"Crie a sua senha"}
                                id={"senha"}
                                name={"senha"}
                                inputType="password"
                            />,
                            <Input
                                labelValue={"Confirme sua senha"}
                                placeHolder={"Repita a senha criada"}
                                id={"confirmacao"}
                                name={"confirmacao"}
                                inputType={"password"}
                            />,
                            
                        ]}
                        buttonForm={<Button message={"Cadastrar!"}/>}
                    />
                </div>
            </Container>
            <Footer/>
        </div>
      )
}

export default Register
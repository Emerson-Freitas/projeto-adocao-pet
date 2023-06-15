import Main from "../components/main/Main"
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"
import Logo from '../assets/Logo_azul.svg'
import Form from "../components/form/Form"
import Input from "../components/input/Input"
import Button from "../components/button/Button"

const Register = () => {
    return (
        <div>
            <Header/>
            <Main 
                paragraph={"Ainda não tem cadastro? Então, antes de buscar seu melhor amigo, precisamos de alguns dados:"}
                logo={Logo}
                backgroudColor="#FFFFFF"
                colorParagraph="#3772FF"
                formComponent={
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
                }
            />
            <Footer/>
        </div>
      )
}

export default Register
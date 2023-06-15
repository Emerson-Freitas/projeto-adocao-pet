import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"
import Main from "../components/main/Main"
import Logo from '../assets/Logo_azul.svg'
import Form from "../components/form/Form"
import Input from "../components/input/Input"
import Button from "../components/button/Button"

const Sign = () => {
  return (
    <div>   
        <Header/>
        <Main
            paragraph={"Já tem uma conta? Faça o seu login"}
            logo={Logo}
            colorParagraph={"#3772FF"}
            backgroudColor="#FFFFFF"
            formComponent={
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
            }
        />
        <Footer/>
    </div>
  )
}

export default Sign
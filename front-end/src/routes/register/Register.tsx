import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Logo from "../../assets/Logo_azul.svg";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import Container from "../../components/container/Container";
import styles from "./Resgister.module.css";
import stylesForm from '../../components/form/Form.module.css' 
import Message from "../../components/message/Message";
import RegisterForm from "../../components/form/RegisterForm";
import { useState } from 'react'
import IRegisterUser from "../../interfaces/IRegisterUser";
import { toast } from "react-toastify";

const Register = () => {

  const [dataUser, setDataUser] = useState<IRegisterUser>({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleInputChange = (fieldName: string, fieldValue: any) => {
    setDataUser((prevData: IRegisterUser) => ({
      ...prevData,
      [fieldName]: fieldValue
    }))
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if(dataUser.password === dataUser.confirmPassword) {
      toast.success("Cadastro realizado com sucesso!")
    }else{
      toast.error("Repita a senha")
    }
  }

  return (
    <div>
      <Header />
      <Container>
        <div className={styles.main}>
          <img className={styles.logo} src={Logo} alt="Logo Adopet" />
          <Message
            message={
              "Ainda não tem cadastro? Então, antes de buscar seu melhor amigo, precisamos de alguns dados:"
            }
            colorParagraph={"#3772FF"}
          />
          <RegisterForm>
            <form className={stylesForm.main} onSubmit={handleSubmit}>
              <Input
                labelValue={"Nome"}
                placeHolder={"Digite o seu nome"}
                id={"name"}
                value={dataUser.name}
                onChange={handleInputChange}
                name={"name"}
              />
              <Input
                labelValue={"Email"}
                placeHolder={"Digite seu melhor email"}
                id={"email"}
                value={dataUser.email}
                onChange={handleInputChange}
                name={"email"}
              />
              <Input
                labelValue={"Senha"}
                placeHolder={"Crie a sua senha"}
                id={"password"}
                name={"password"}
                value={dataUser.password}
                onChange={handleInputChange}
                inputType="password"
              />
              <Input
                labelValue={"Confirme sua senha"}
                placeHolder={"Repita a senha criada"}
                id={"confirmPassword"}
                name={"confirmPassword"}
                value={dataUser.confirmPassword}
                onChange={handleInputChange}
                inputType={"password"}
              />
              <Button message={"Cadastrar!"}/>
            </form>
          </RegisterForm>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Register;

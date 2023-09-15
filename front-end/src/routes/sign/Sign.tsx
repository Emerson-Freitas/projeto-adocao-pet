import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Logo from "../../assets/Logo_azul.svg";
import LoginForm from "../../components/form/LoginForm";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import Container from "../../components/container/Container";
import Message from "../../components/message/Message";
import styles from "./Sign.module.css";
import stylesForm from '../../components/form/Form.module.css'
import { useState } from "react";
import ILoginUser from "../../interfaces/ILoginUser";

const Sign = () => {
  const [dataUser, setDataUser] = useState<ILoginUser>({
    email: '',
    password: ''
  })

  const handleInputChange = (fieldName: string, fieldValue: any) => {
    setDataUser((prevData: ILoginUser) => ({
      ...prevData,
      [fieldName]: fieldValue
    }))
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  }
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
          <LoginForm>
            <form className={stylesForm.main} onSubmit={handleSubmit}>
              <Input
                labelValue={"Email"}
                placeHolder={"Digite seu melhor email"}
                id={"email"}
                name={"email"}
                value={dataUser.email}
                onChange={handleInputChange}
              />
              <Input
                labelValue={"Senha"}
                placeHolder={"Digite a sua senha"}
                id={"password"}
                name={"password"}
                inputType="password"
                value={dataUser.password}
                onChange={handleInputChange}
              />
              <Button message={"Entrar!"} />
            </form>
          </LoginForm>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Sign;
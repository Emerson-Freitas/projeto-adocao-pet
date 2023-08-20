import styles from './Form.module.css'
import axios from 'axios'
import React from 'react'
import { useState } from 'react'
interface Props{
    inputs: React.ReactElement<{name: string}>[]
    buttonForm: React.ReactNode;
}
const Form = ({inputs, buttonForm}: Props) => {

  const [nome, setNome] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [senha, setSenha] = useState<string>('');
  const [confirmacao, setConfirmacao] = useState<string>('');

  const register = async() => {
    const url: string | undefined = process.env.REGISTER_URL;
    try {
      if(url !== undefined) {
        const data = {
          nome,
          email, 
          senha,
          confirmacao
        }
        if(data.senha === data.confirmacao) {
          await axios.post(url, {nome, email, senha})
        }
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleNomeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNome(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSenhaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSenha(event.target.value);
  };

  const handleConfirmacaoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmacao(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    register();
  };

  return (
    <form className={styles.main} onSubmit={handleSubmit}>
        {inputs.map((input, index) => (
          <div key={index}>
            {input}
          </div>
        ))}
        {buttonForm}
    </form>
  )
}

export default Form
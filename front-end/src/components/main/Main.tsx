import styles from './Main.module.css'
import Button from '../button/Button'
import Message from '../message/Message'
import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface Props{
  paragraph: string
  title?: string
  messagesButtons?: string[]
  logo: string
  backgroudColor: string
  colorParagraph: string
  formComponent?: ReactNode
}
const Main = ({paragraph, title, messagesButtons, logo, backgroudColor, colorParagraph, formComponent}: Props) => {
  const mainStyle = {
    backgroundColor: backgroudColor
  };

  return (
    <div className={styles.main} style={mainStyle}>
      <img className={styles.logo} src={logo} alt="Logo adopet"/>
      <h1>{title}</h1>
      <Message message={paragraph} colorParagraph={colorParagraph}/>
      {messagesButtons?.length && (
        <>
          <Link to="/sign" style={{textDecoration: 'none'}}><Button message={messagesButtons[0]}/></Link> 
          <Link to="/register" style={{textDecoration: 'none'}}><Button message={messagesButtons[1]}/></Link> 
        </>
      )}
      {formComponent && (
        formComponent
      )}
    </div>
  )
}

export default Main
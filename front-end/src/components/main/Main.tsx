import styles from './Main.module.css'
import Button from '../button/Button'
import Message from '../message/Message'
import { ReactNode } from 'react'
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
          <Button message={messagesButtons[0]}/>
          <Button message={messagesButtons[1]}/>
        </>
      )}
      {formComponent && (
        formComponent
      )}
    </div>
  )
}

export default Main
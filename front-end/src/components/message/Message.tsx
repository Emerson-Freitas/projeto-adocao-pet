import styles from './Message.module.css';

interface Props{
  message: string;
  colorParagraph: string
}
const Message = ({message, colorParagraph}: Props) => {
  return (
    <div className={styles.main} style={{marginBottom: '16px'}}>
        <p className={styles.content} style={{'color': colorParagraph}}>{message}</p>
    </div>
  )
}

export default Message
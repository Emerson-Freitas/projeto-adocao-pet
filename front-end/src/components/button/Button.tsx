import styles from './Button.module.css'

interface Props{
    message: string
}

const Button = ({message}: Props) => {
  return (
    <button type="submit" className={styles.button}>{message}</button>
  )
}

export default Button
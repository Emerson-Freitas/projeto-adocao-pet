import styles from './Input.module.css'

interface Props{
  labelValue: string
  placeHolder: string
  id: string
  name: string
  inputType?: string
}
const Input = ({labelValue, placeHolder, id, name, inputType}: Props) => {
  return (
    <div className={styles.main}>
      <label htmlFor={name}>{labelValue}</label>
      <input type={inputType} id={id} name={name} placeholder={placeHolder} required/>
    </div>
  )
}

export default Input
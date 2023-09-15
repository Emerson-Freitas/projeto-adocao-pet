import styles from './Input.module.css'

interface Props{
  labelValue: string
  placeHolder: string
  id: string
  name: string
  value: string
  inputType?: string
  onChange: (name: string, valueField: any) => void
}
const Input = ({labelValue, placeHolder, value, id, name, inputType, onChange}: Props) => {
  return (
    <div className={styles.main}>
      <label htmlFor={name}>{labelValue}</label>
      <input 
        type={inputType} 
        id={id} 
        name={name} 
        placeholder={placeHolder} 
        value={value}
        onChange={(event) => onChange(name, event.target.value)}
        required
      />
    </div>
  )
}

export default Input
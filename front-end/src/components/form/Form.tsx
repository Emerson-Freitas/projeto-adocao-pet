import styles from './Form.module.css'
import { ReactNode } from "react"

interface Props{
    inputs: ReactNode[]
    buttonForm: ReactNode
}
const Form = ({inputs, buttonForm}: Props) => {
  return (
    <form className={styles.main}>
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
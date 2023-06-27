import styles from './Section.module.css'
import CardPet from '../card/CardPet'
import IPet from '../../interfaces/IPet'
import Message from '../message/Message'

interface Props{
    pets: IPet[]
    message: string
    colorParagraph: string
}
const Section = ({pets, message, colorParagraph}: Props) => {
 
  return (
    <div className={styles.main}>
      <div className={styles.title}>
        <Message message={message} colorParagraph={colorParagraph}/>
      </div>
      <div className={styles.cardSection}>
        {pets.map((pet: IPet) => (
            <CardPet key={pet._id} pet={pet}/>
        ))}
      </div>
    </div>
  )
}

export default Section
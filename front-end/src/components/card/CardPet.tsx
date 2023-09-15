import IPet from '../../interfaces/IPet'
import styles from './CardPet.module.css'
import { useState, useEffect } from 'react'
import avatar from 'animal-avatar-generator'

interface Props{
    pet: IPet
}
const CardPet = ({pet}: Props) => {

  const [avatarSvg, setAvatarSvg] = useState<string>('');

  const randomAvatar = () => {
    const avatars: string[] = [
      'Temeka Lynam',
      'Kim Moodie',
      'Faith Hardy',
      'Jacob Texeira',
      'Natashia Harrold',
      'Sol Langston',
      'Nickie Tortora',
      'Zandra Spano',
      'Maritza Linden',
      'Katharina Franks',
      'Willis Higgins',
      'Douglas Bodine',
      'Nobuko Frary',
      'Pansy Emmert',
      'Kanesha Brazee',
      'Shera Reece',
      'Onita Esperanza',
      'Nicole Kelley',
      'Kaye Lanclos',
      'Velda Bronstein',
      'Faye Webster',
      'Deanna Mathis',
      'Ruth Ferguson',
      'Grace Dean'
    ];
    const index = Math.floor(Math.random() * avatars.length)
    return avatars[index]
  }

  useEffect(() => {
    const avatarName = randomAvatar();
    const svg = avatar(avatarName, {size: 150, blackout: false})
    setAvatarSvg(svg)
  }, [])

  return (
    <div className={styles.card}>
      <div className={styles.petAvatar}>
        <div dangerouslySetInnerHTML={{ __html: avatarSvg }} />
      </div>
      <div className={styles.petData}>
        <p id={styles.petName}>{pet.name}</p>
        <p>{pet.age}</p>
        <p>Grande</p>
        <p>{pet.characteristics}</p>
      </div>
    </div>
  )
}

export default CardPet
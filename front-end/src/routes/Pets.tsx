import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import axios from 'axios'
import { useState, useEffect } from 'react';
import Section from '../components/section/Section';
import IPet from '../interfaces/IPet';

const Pets = () => {
  const [pets, setPets] = useState<IPet[]>([]);

  useEffect(() => {
      const url: string | undefined = "http://localhost:3000/pets"
      const getListPets = async() => {
      try {
        if(url !== undefined) {
          const res = await axios.get(url);
          setPets(res.data)
          console.log(res.data)
          return res.data
        }
      } catch (error) {
        console.log(error);
      }
    }
    getListPets();
  }, []);

  return (
    <div>
        <Header/>
        <Section
          pets={pets}
          message={"Olá! Veja os amigos disponíveis para adoção!"}
          colorParagraph='#3772FF'
        />
        <Footer/>
    </div>
  )
}

export default Pets
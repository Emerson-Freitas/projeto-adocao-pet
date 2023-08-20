import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import axios from 'axios'
import { useState, useEffect } from 'react';
import Section from '../../components/section/Section';
import IPet from '../../interfaces/IPet';
import Container from '../../components/container/Container';

const Pets = () => {
  const [pets, setPets] = useState<IPet[]>([]);

  useEffect(() => {
      const url: string = import.meta.env.VITE_BASE_URL
      const getListPets = async() => {
        try {
            const res = await axios.get(`${url}/pets`);
            console.log('res.data:::', res.data)
            setPets(res.data)
            console.log(res.data)
            return res.data
        } catch (error) {
          console.log(error);
        }
    }
    getListPets();
  }, []);

  useEffect(() => {
    console.log('pets:::', pets) 
  }, [pets])

  return (
    <div>
        <Header/>
        <Container>
          <Section
            pets={pets}
            message={"Olá! Veja os amigos disponíveis para adoção!"}
            colorParagraph='#3772FF'
          />
        </Container>
        <Footer/>
    </div>
  )
}

export default Pets
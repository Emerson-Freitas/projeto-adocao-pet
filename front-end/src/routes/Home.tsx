import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import Main from '../components/main/Main'
import Logo from '../assets/Logo.svg'

const Home = () => {
    
  return (
    <div>
        <Header/>
        <Main 
            paragraph={"Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!"}
            title={"Boas-vindas"}
            messagesButtons={["Já tenho uma conta", "Quero me cadastrar"]}
            logo={Logo}
            backgroudColor="#3772FF"
            colorParagraph="#FFFFFF"
        />
        <Footer/>
    </div>
  )
}

export default Home
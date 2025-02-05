import SocialNetworks from "./SocialNetworks"
import InformationContainer from "./InformationContainer"
import Avatar from "../img/foto-perfil.jpg"
import '../styles/components/sidebar.sass'



const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Humberto Ribeiro" />
      <p className='title'>Desenvolvedor</p>
      <SocialNetworks />
      <InformationContainer />
      <a href="" className='btn'>Dowloand currículo</a>
    </aside>
  )
}

export default Sidebar
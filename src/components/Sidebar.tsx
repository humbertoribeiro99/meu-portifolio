import Avatar from "../img/foto-perfil.jpg"
import '../styles/components/sidebar.sass'

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Humberto Ribeiro" />
      <p className='title'>Desenvolvedor</p>
      <p>redes sociais</p>
      <p>informações de contato</p>
      <a href="" className='btn'>Dowloand currículo</a>
    </aside>
  )
}

export default Sidebar
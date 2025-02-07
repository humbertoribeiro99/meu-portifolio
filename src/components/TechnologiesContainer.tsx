import {
  DiNodejsSmall,
  DiMysql,
  DiReact,
  DiPython,
  DiGithub,
  DiLinux,
  DiDocker,
  DiAws
} from 'react-icons/di'

import '../styles/components/technologiescontainer.sass'

const techonologies = [
  {id: "react", name: "React", icon: <DiReact/>},
  {id: "node", name: "Node.js", icon: <DiNodejsSmall/>},
  {id: "mysql", name: "MySQL", icon: <DiMysql/>},
  {id: "python", name: "Python", icon: <DiPython/>},
  {id: "github", name: "GitHub", icon: <DiGithub/>},
  {id: "linux", name: "Linux", icon: <DiLinux/>},
  {id: "docker", name: "Docker", icon: <DiDocker/>},
  {id: "aws", name: "Aws", icon: <DiAws/>}

]

const TechnologiesContainer = () => {
  return (
   <section className="technologies-container">
    <h2>Tecnologias</h2>
    <div className="technologies-grid">
      {techonologies.map((tech) => (
        <div className="technology-card" id={tech.id} key={tech.id}>
          {tech.icon}
          <div className="technology-info">
            <h3>{tech.name}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      ))}
    </div>
   </section>
  )
}

export default TechnologiesContainer
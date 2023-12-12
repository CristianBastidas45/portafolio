import { useTranslation } from 'react-i18next'
import './styles/CardProjects.css'

const CardProjects = ({ project }) => {

  const {t} = useTranslation()


  return (
    <article className='cardprojects-container'>
      <div className='cardprojects__img' style={{ "backgroundImage": `url('./${project.img}')` }}>
      </div>
      <section className='cardprojects__info'>
        <h3 className='cardprojects__info__title'>{t(`projects.${project.title}.titulo`)}</h3>
        <p className='cardprojects__info__p'>{t(`projects.${project.title}.descripcion`)}</p>
        <ul className='cardprojects__info__list'>
          {
            project.techs.map(tech => (
              <li className='cardprojects__info__list-li' key={tech.id}>{tech.tech} </li>
            ))
          }
        </ul>
        <nav className='cardprojects__info__nav'>
          <a href={project.web} target="_blank"><i className='bx bx-world cardprojects__info__nav-a'></i></a>
          <a href={project.github} target="_blank"><i className='bx bxl-github cardprojects__info__nav-a' ></i></a>
        </nav>
      </section>
    </article>
  )
}

export default CardProjects
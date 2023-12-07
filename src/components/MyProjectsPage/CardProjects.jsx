import './styles/CardProjects.css'

const CardProjects = ({ project }) => {


  return (
    <article className='cardprojects-container'>
      <div className='cardprojects__img' style={{ "backgroundImage": `url('./${project.img}')` }}>
        <section className='cardprojects__info'>
          <h3 className='cardprojects__info__title'>{project.title}</h3>
          <p className='cardprojects__info__p'>{project.description}</p>
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
      </div>
    </article>
  )
}

export default CardProjects
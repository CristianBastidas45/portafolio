import { useState } from "react"
import CardProjects from "../components/MyProjectsPage/CardProjects"
import projects from "../utils/projects.json"
import './styles/MyProjectsPage.css'

const MyProjectsPage = () => {


  const [projectSlider, setProjectSlider] = useState(0)
  const step = 100/projects.length

  const handleChangeMinus = () => {
      setProjectSlider(projectSlider-1)
  }
  const handleChangePlus = () => {
      setProjectSlider(projectSlider+1)
  }
  const handleChange = e =>{
    setProjectSlider(projects.length-e.target.id);
  }

  return (
    <article className="myprojects-container">
      <section className="myprojects__slider" style={{transform: `translateX(-${projectSlider*step}%)`}}>
        {
          projects.map(project => (
            <CardProjects
              key={project.id}
              project={project}
            />
          ))
        }
      </section>
      <section className="myprojects__dots">
        {
          projectSlider>0?(
            <i onClick={handleChangeMinus} className='bx bxs-caret-left-circle myprojects__dot' ></i>
          ):<i className='bx bx-x'></i>
        }
        <ul className="myprojects__dots__list">
          {
            projects.map(project => (
              <li
                key={project.id}
              ><i onClick={handleChange} className={`bx bxs-circle myprojects__dot ${ projectSlider==(projects.length-project.id)&&'dot-active'}`} id={project.id}></i></li>
            ))
          }
        </ul>
        {
          projectSlider!==(projects.length-1)?(
            <i onClick={handleChangePlus} className='bx bxs-caret-right-circle myprojects__dot' ></i>
          ):<i className='bx bx-x'></i>
        }
      </section>
    </article>
  )
}

export default MyProjectsPage
import { useState } from "react"
import CardInfo from "../components/AboutPage/CardInfo"
import information from '../utils/info.json'
import './styles/AboutPage.css'
import { useTranslation } from "react-i18next"

const AboutPage = () => {

  const { t } = useTranslation()

  const [infoEduJob, setInfoEduJob] = useState(information.filter(info => info.Mood === 'education'))

  const handleChangeInfo = e => {
    if (e.target.id == 1) {
      setInfoEduJob(information.filter(info => info.Mood === 'education'))
    } else {
      setInfoEduJob(information.filter(info => info.Mood === 'job'))
    }
  }

  return (
    <article className="about-container">
      <h2 className="about__title">{t('about.titulo')}</h2>
      <p className="about__description"> {t('about.descripcionUno')} <span className="about__description__p">Cristian Bastidas,</span> {t('about.descripcionDos')} </p>
      <div className="about__abilities">
        <article className="about__abilities__card">
          <h3 className="about__abilities__card__title">Front-End</h3>

          <div className="about__abilities__card__items">
            <section className="about__abilities__card__item">
              <img className="about__abilities__img" src="./html.png" alt="html" />
              <p>HTML5</p>
            </section>
            <section className="about__abilities__card__item">
              <img className="about__abilities__img" src="./css.png" alt="css" />
              <p>CSS</p>
            </section>
            <section className="about__abilities__card__item">
              <img className="about__abilities__img" src="./js.png" alt="js" />
              <p>JavaScript</p>
            </section>
            <section className="about__abilities__card__item">
              <img className="about__abilities__img" src="./ts.png" alt="ts" />
              <p>TypeScript</p>
            </section>
            <section className="about__abilities__card__item">
              <img className="about__abilities__img" src="./react.png" alt="react" />
              <p>React</p>
            </section>
            <section className="about__abilities__card__item">
              <img className="about__abilities__img" src="./git.png" alt="git" />
              <p>Git</p>
            </section>

          </div>
        </article>

        <article className="about__abilities__card">
          <h3 className="about__abilities__card__title">Back-end</h3>
          <div className="about__abilities__card__items">

            <section className="about__abilities__card__item">
              <img className="about__abilities__img" src="./node.png" alt="node" />
              <p>Node Js</p>
            </section>
            <section className="about__abilities__card__item">
              <img className="about__abilities__img" src="./cpp.png" alt="cpp" />
              <p>C++</p>
            </section>
            <section className="about__abilities__card__item">
              <img className="about__abilities__img" src="./postgres.png" alt="postgres" />
              <p>PostgreSQL</p>
            </section>
            <section className="about__abilities__card__item">
              <img className="about__abilities__img" src="./postman.png" alt="postman" />
              <p>Postman</p>
            </section>
            <section className="about__abilities__card__item">
              <img className="about__abilities__img" src="./sql.png" alt="sql" />
              <p>SQL</p>
            </section>
            <section className="about__abilities__card__item">
              <img className="about__abilities__img" src="./python.png" alt="python" />
              <p>Python</p>
            </section>
          </div>

        </article>

      </div>
      <section className="about__edu-job">
        <button className={`about__edu-job__btn ${(infoEduJob[0].Mood === 'education') && 'btn__active'}`} onClick={handleChangeInfo} id="1">{t('about.educacion')}</button>
        <button className={`about__edu-job__btn ${(infoEduJob[0].Mood === 'job') && 'btn__active'}`} onClick={handleChangeInfo} id="2">{t('about.trabajo')}</button>
      </section>
      {
        infoEduJob.map(info => (
          <CardInfo
            key={info.title}
            info={info}
          />
        ))
      }
    </article>
  )
}

export default AboutPage
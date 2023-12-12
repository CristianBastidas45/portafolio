import { useState } from "react"
import CardInfo from "../components/AboutPage/CardInfo"
import information from '../utils/info.json'
import './styles/AboutPage.css'
import { useTranslation } from "react-i18next"

const AboutPage = () => {

  const {t}=useTranslation()

  const [infoEduJob, setInfoEduJob] = useState(information.filter(info => info.Mood==='education'))

  const handleChangeInfo = e => {
    if(e.target.id==1){
      setInfoEduJob(information.filter(info => info.Mood==='education'))
    }else{
      setInfoEduJob(information.filter(info => info.Mood==='job'))
    }
  }

  return (
    <article className="about-container">
      <h2 className="about__title">{t('about.titulo')}</h2>
      <p className="about__description"> {t('about.descripcionUno')} <span className="about__description__p">Cristian Bastidas,</span> {t('about.descripcionDos')} </p>
      <div className="about__abilities">
        <img className="about__abilities__img" src="./html.png" alt="html" />
        <img className="about__abilities__img" src="./css.png" alt="css" />
        <img className="about__abilities__img" src="./js.png" alt="js" />
        <img className="about__abilities__img" src="./react.png" alt="react" />
        <img className="about__abilities__img" src="./cpp.png" alt="cpp" />
        <img className="about__abilities__img" src="./arduino.png" alt="arduino" />
      </div>
      <section className="about__edu-job">
        <button className={`about__edu-job__btn ${(infoEduJob[0].Mood==='education')&&'btn__active'}`} onClick={handleChangeInfo} id="1">{t('about.educacion')}</button>
        <button className={`about__edu-job__btn ${(infoEduJob[0].Mood==='job')&&'btn__active'}`} onClick={handleChangeInfo} id="2">{t('about.trabajo')}</button>
      </section>
      {
        infoEduJob.map( info => (
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
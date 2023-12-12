import { useState } from 'react';
import './styles/HomePage.css'
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const HomePage = () => {


  const [time, setTime] = useState(new Date())
  const dia = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Vierenes', 'Sabado']

  const {t,i18n} = useTranslation()

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date())
    }, 1000)
    return () => clearInterval(intervalId)
  }, [])

  const getRotationStyle = (degree) => {
    return {
      transform: `rotate(${degree}deg)`,
    }
  }

  const secondDeg = (time.getSeconds() / 60) * 360
  const minutedDeg = (time.getMinutes() / 60) * 360
  const hourDeg = ((time.getHours() - 12) / 12) * 360



  return (
    <article className="home-container">
      <h1 className="home__title" >{t('home.titulo')}</h1>
      <h2 className="home__title home__name" >{t('home.subtitulo')}</h2>
      <a  className='home__download' href="./CV_Cristian_Bastidas.pdf" download>Descargar CV</a>
      <section className="home__center">
        <img className="home__center__logo" src='./LogoUp.svg' alt="Logoup" />
        <p className="home__center__p">{t('home.frase')} <span className="home__center__p__span">Robert C. Martin</span> </p>
      </section>
      <h2 className="home__subtitle">Software Developer <span className="home__subtitle__cursor">|</span></h2>
      <section className="home__redes">
        <a className="home__redes__btn github" href="https://github.com/CristianBastidas45" target="_blank"><i className='bx bxl-github'></i></a>
        <a className="home__redes__btn linkedin" href="https://co.linkedin.com/in/cristian-bastidas-85988b253" target="_blank"><i className='bx bxl-linkedin'></i></a>
      </section>
      <div className='clock'>
        <div>
          <div className='info date'>{time.getFullYear() + '/' + time.getMonth() + '/' + time.getDate()}</div>
          <div className='info day'>{dia[time.getDay()]}</div>
        </div>
        <div className='dot'></div>
        <div>
          <div className='hour__hand' style={getRotationStyle(hourDeg)}></div>
          <div className='minute__hand' style={getRotationStyle(minutedDeg)}></div>
          <div className='second__hand' style={getRotationStyle(secondDeg)}></div>
        </div>
        <div>
          <span className='clock__span h3'>3</span>
          <span className='clock__span h6'>6</span>
          <span className='clock__span h9'>9</span>
          <span className='clock__span h12'>12</span>
        </div>
        <div className='diallines'></div>
      </div>
      <span className="home__vanilla">{t('home.reloj')}</span>
    </article>
  );
};

export default HomePage;
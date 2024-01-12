import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './styles/ContactPage.css'
import { useTranslation } from 'react-i18next';
import EarthMoon from '../components/ContactPage/EarthMoon';

const ContactPage = () => {

  const [emailSend, setEmailSend] = useState(false)
  const [requiredCamps, setRequiredCamps] = useState(false)

  const form = useRef();
  const {t} = useTranslation()

  const sendEmail = (e) => {
    e.preventDefault();
    if (form.current[0].value.trim() && form.current[1].value.trim() && form.current[2].value.trim()) {
      // console.log(form.current[0].value);
      // emailjs.sendForm('service_jx9urrw', 'template_6s0jt19', form.current, 'urFBdqHJqes6fI-9-')
      //   .then((result) => {
      //     console.log(result.text);
      //   }, (error) => {
      //     console.log(error.text);
      //   });
      setRequiredCamps(false)
      setEmailSend(true)
      form.current[0].value =''
      form.current[1].value =''
      form.current[2].value =''
    } else {
      setEmailSend(false)
      setRequiredCamps(true)
    }
  };


  return (
    <article className='contactpage-container'>
      <section className='contacpage__formulario'>
        <label className='contactpage__formulario__info' ><span className='color__span'>*</span>{t("contact.campo")} </label>
        <form className='contactpage__formulario__form' ref={form} onSubmit={sendEmail}>
          <label className='contactpage__formulario__form__l'>{t("contact.nombre")}<span className='color__span'>*</span></label>
          <input className='contactpage__formulario__form__i' type="text" name="user_name" />
          <label className='contactpage__formulario__form__l'>Email<span className='color__span'>*</span></label>
          <input className='contactpage__formulario__form__i' type="email" name="user_email" />
          <label className='contactpage__formulario__form__l'>{t("contact.mensaje")}<span className='color__span'>*</span></label>
          <textarea className='contactpage__formulario__form__i form__textarea' name="message" style={{ "resize": "none" }} />
          <input className='contactpage__formulario__form__btn' type="submit" value="Enviar" />
          {
            emailSend ? (
              <span className='contactpage__formulario__form__msg'>{t("contact.enviado")}</span>
            ) : ''
          }
          {
            requiredCamps ? (
              <span className='contactpage__formulario__form__msg'>{t("contact.error")}</span>
            ) : ''
          }
        </form>
      </section>
      <div className='contacpage__mensaje'>
        <h2 className='contacpage__mensaje__title'>{t("contact.titulo")}</h2>
        <p className='contacpage__mensaje__p'>{t("contact.descripcion")} <span>cbastidas929@gmail.com</span></p>
        <img className='contacpage__mensaje__img' src='./LogoUp.svg' alt="LogoUp" />
      </div>
      <EarthMoon />
      {/* <footer className='contacpage__footer'>
        
          <pre className='maquina__escribir'>
            &lt;p className='{t("contact.mensaje_despedida")}'&gt; <br/>
            {t("contact.gracias")} 😉<br/>
            &lt;/p&gt;<br/>
            .{t("contact.mensaje_despedida")}&#123;<br/>
            color: #ff2d75;<br />
            font-size: 1.2rem;<br />
            text-align: center;<br />
            font-weight: 600;<br />
            &#125;
          </pre>
      </footer> */}
    </article>
  );
}

export default ContactPage
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './styles/ContactPage.css'

const ContactPage = () => {

  const [emailSend, setEmailSend] = useState(true)

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    if (form.current[0].value.trim() && form.current[1].value.trim() && form.current[2].value.trim()) {
      console.log(form.current[0].value);
      emailjs.sendForm('service_jx9urrw', 'template_6s0jt19', form.current, 'urFBdqHJqes6fI-9-')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
      setEmailSend(true)
    } else {
      setEmailSend(false)
    }
  };


  return (
    <article className='contactpage-container'>
      <section className='contacpage__formulario'>
        <label className='contactpage__formulario__info' ><span className='color__span'>*</span> Campo requerido</label>
        <form className='contactpage__formulario__form' ref={form} onSubmit={sendEmail}>
          <label className='contactpage__formulario__form__l'>Nombre<span className='color__span'>*</span></label>
          <input className='contactpage__formulario__form__i' type="text" name="user_name" />
          <label className='contactpage__formulario__form__l'>Email<span className='color__span'>*</span></label>
          <input className='contactpage__formulario__form__i' type="email" name="user_email" />
          <label className='contactpage__formulario__form__l'>Mensaje<span className='color__span'>*</span></label>
          <textarea className='contactpage__formulario__form__i form__textarea' name="message" style={{ "resize": "none" }} />
          <input className='contactpage__formulario__form__btn' type="submit" value="Enviar" />
          {
            emailSend ? '' : (
              <span>Todos los campos son requeridos</span>
            )
          }
        </form>
      </section>
      <div className='contacpage__mensaje'>
        <h2 className='contacpage__mensaje__title'>Un placer conocerte</h2>
        <p className='contacpage__mensaje__p'>puedes enviarme cualquier mensaje o contactarte conmigo con mi correo <span>cbastidas929@gmail.com</span></p>
        <img className='contacpage__mensaje__img' src='./LogoUp.svg' alt="LogoUp" />
      </div>
      <footer className='contacpage__footer'>
        
          <pre className='maquina__escribir'>
            &lt;p className='mensaje__despedida'&gt; <br/>
            Gracias por visitar mi pagina 😉<br/>
            &lt;/p&gt;<br/>
            .mensaje__despedida&#123;<br/>
            color: #ff2d75;<br />
            font-size: 1.2rem;<br />
            text-align: center;<br />
            font-weight: 600;<br />
            &#125;
          </pre>
        
      </footer>
    </article>
  );
}

export default ContactPage
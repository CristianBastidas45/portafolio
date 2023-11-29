import { useState } from "react"
import { Link } from "react-router-dom"
import './NavBar.css'

const NavBar = () => {

  const [isDark, setIsDark] = useState(false)
  const [linkSelected, setLinkSelected] = useState(1)



  const handleModo = () => {
    setIsDark(!isDark)
    if (isDark) {
      document.body.style.background = "var(--color-blanco)";
      document.body.style.color = "var(--color-negro)";
    } else {
      document.body.style.background = "var(--color-negro)";
      document.body.style.color = "var(--color-blanco)";
    }
  }

  const handleSelected = e =>{
    setLinkSelected(+e.target.id)
  }
  return (
    <header className="navbar-container">
      <span className="navbar__d-l" onClick={handleModo}>
        {
          isDark ?
            <i className='bx bxs-sun navbar__dark'></i>
            :
            <i className='bx bxs-moon navbar__dark'></i>
        }
      </span>
      <nav>
        <ul className="navbar__list">
          <li className="navbar__li">
            <Link
              className={`navbar__link ${linkSelected === 1 && "link-active"}`}
              to='/'
              onClick={handleSelected}
              id="1"
            >Inicio</Link>
          </li>
          <li className="navbar__li">
            <Link
              className={`navbar__link ${linkSelected === 2 && "link-active"}`}
              to='/about'
              onClick={handleSelected}
              id="2"
            >Sobre mi</Link>
          </li>
          <li className="navbar__li">
            <Link
              className={`navbar__link ${linkSelected === 3 && "link-active"}`}
              to='/projects'
              onClick={handleSelected}
              id="3"
            >Mis Proyectos</Link>
          </li>
          <li className="navbar__li">
            <Link
              className={`navbar__link ${linkSelected === 4 && "link-active"}`}
              to='/contact'
              onClick={handleSelected}
              id="4"
            >Contacto</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default NavBar
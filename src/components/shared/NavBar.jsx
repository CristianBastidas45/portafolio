import { useState } from "react"
import { Link } from "react-router-dom"
import './NavBar.css'
import { useTranslation } from "react-i18next"

const NavBar = () => {

  const [isDark, setIsDark] = useState(true)
  const [isEnglish, setIsEnglish] = useState(false)
  const [linkSelected, setLinkSelected] = useState(1)
  const [isMenuShowed, setIsMenuShowed] = useState(false)
  const [isConfigShowed, setIsConfigShowed] = useState(false)

  const { t, i18n } = useTranslation()

  const handleModo = () => {
    setIsDark(!isDark)
    if (isDark) {
      // document.body.style.background = "var(--color-blanco)";
      document.body.style.background = "linear-gradient(to bottom left,var(--color-blanco), 85%, var(--color-morado))";
      document.body.style.color = "var(--color-negro)";
    } else {
      // document.body.style.background = "var(--color-negro)";
      document.body.style.background = "linear-gradient(to bottom left,var(--color-negro), 85%, var(--color-morado))";
      document.body.style.color = "var(--color-blanco)";
    }
  }

  const handleIdioma = () => {
    if (i18n.language == 'es') {
      i18n.changeLanguage('en')
    } else {
      i18n.changeLanguage('es')
    }
    setIsEnglish(!isEnglish)
  }

  const handleSelected = e => {
    setIsMenuShowed(false)
    setLinkSelected(+e.target.id)
  }

  const handleMenu = () => {
    setIsMenuShowed(!isMenuShowed)
  }

  const handleConfig = () => {
    setIsConfigShowed(!isConfigShowed)
  }

  return (
    <header className="navbar-container">
      <div className="navbar__config">
        <i onClick={handleConfig} className='bx bxs-color navbar__config__icon'></i>
        <div className={`navbar__config__items ${isConfigShowed && 'active__config'}`}>
          <span className="navbar__d-l" onClick={handleModo}>
            {
              isDark ?
                <i className='bx bxs-sun navbar__dark'></i>
                :
                <i className='bx bxs-moon navbar__dark'></i>
            }
          </span>
          <span className="navbar__d-l" onClick={handleIdioma}>
            {
              isEnglish ?
                <img className="navbar__idiom__img" src="./espanish.png" alt="espanish" />
                :
                <img className="navbar__idiom__img" src="./english.png" alt="english" />
            }
          </span>
        </div>
      </div>
      <nav>
        <ul className={`navbar__list ${isMenuShowed && "list-active"}`}>
          <li className="navbar__li">
            <Link
              className={`navbar__link ${linkSelected === 1 && "link-active"}`}
              to='/'
              onClick={handleSelected}
              id="1"
            >{t("navbar.inicio")}</Link>
          </li>
          <li className="navbar__li">
            <Link
              className={`navbar__link ${linkSelected === 2 && "link-active"}`}
              to='/about'
              onClick={handleSelected}
              id="2"
            >{t("navbar.sobre")}</Link>
          </li>
          <li className="navbar__li">
            <Link
              className={`navbar__link ${linkSelected === 3 && "link-active"}`}
              to='/projects'
              onClick={handleSelected}
              id="3"
            >{t("navbar.proyectos")}</Link>
          </li>
          <li className="navbar__li">
            <Link
              className={`navbar__link ${linkSelected === 4 && "link-active"}`}
              to='/contact'
              onClick={handleSelected}
              id="4"
            >{t("navbar.contacto")}</Link>
          </li>
        </ul>
      </nav>
      <div className="navbar__menu">
        <i onClick={handleMenu} className='bx bx-menu-alt-right'></i>
      </div>
    </header>
  )
}
export default NavBar
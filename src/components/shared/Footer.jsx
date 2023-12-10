import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer__data">
                <span className="footer__data__span">
                    <i className='bx bxs-phone footer__data__icon' ></i>
                    <p>+57 3163814603</p>
                </span>
                <span className="footer__data__span">
                    <i className='bx bx-envelope footer__data__icon'></i>
                    <p>cbastidas929@gmail.com</p>
                </span>
                <span className="footer__data__span">
                    <i className='bx bx-map footer__data__icon' ></i>
                    <p>Pasto (Nariño) - Colombia</p>
                </span>
            </div>
            <div className="footer__redes">
                <a className='footer__redes__git' href="https://github.com/CristianBastidas45" target="_blank"> <i className='bx bxl-github'></i></a>
                <a className='footer__redes__link' href="https://co.linkedin.com/in/cristian-bastidas-85988b253" target="_blank"><i className='bx bxl-linkedin-square' ></i></a>
                <a className='footer__redes__wsp' href="https://wa.link/hl5taz" target="_blank"><i className='bx bxl-whatsapp'></i></a>
            </div>
        </footer>
    )
}

export default Footer
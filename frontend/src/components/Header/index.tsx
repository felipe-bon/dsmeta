import logo from '../../assets/img/logo.svg'
import './styles.css'

function Header() {
  return(
    <header>
        <div className="dsmeta-logo-container">
            <img src={logo} alt="DSMetaLogo"/>
            <h1>DSMeta</h1>
            <p>Desenvolvido por
                <a href="https://www.instagram.com/bonetti_felipe/">@bonetti_felipe</a>
            </p>
        </div>
    </header>
  )
}

export default Header

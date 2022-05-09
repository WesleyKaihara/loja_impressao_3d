import style from './style.module.scss';
import Logo from '../../images/logo-default.png'

export default function Header() {
  return (
    <header className={style.header}>
      <img src={Logo} alt="Logo_Empresa" className={style.Logo} />
      <nav className={style.navMenu}>
        <ul>
          <li><a href='/' >Home</a></li>
          <li><a href='/Catalogo' >Catálogo</a></li>
          <li><a href='/Contato'>Contato</a></li>
          <li><a href="/Login">Entrar/Cadastrar</a></li>
        </ul>

      </nav>
    </header>
  )
}
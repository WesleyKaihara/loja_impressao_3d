import style from './style.module.scss';
import Logo from '../../images/logo-default.png'

import HomeIcon from '@mui/icons-material/Home';
import ContactsIcon from '@mui/icons-material/Contacts';
export default function Header() {
  return (
    <header className={style.header}>
      <img src={Logo} alt="Logo_Empresa" className={style.Logo} />
      <nav className={style.navMenu}>
        <ul>
          <li><a href='/' ><HomeIcon /> Home</a></li>
          <li><a href='/Catalogo' >Catálogo</a></li>
          <li><a href='/Contato'><ContactsIcon /> Contato</a></li>
          <li className={style.btn}><a href="/Login">Entrar/Cadastrar</a></li>
        </ul>

      </nav>
    </header>
  )
}
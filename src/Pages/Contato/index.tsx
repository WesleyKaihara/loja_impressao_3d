import style from './style.module.scss';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

import imgEmpresa from '../../images/defaultItem.png';

export default function Contato() {
  return (
    <section className={style.Contato}>
      <h1 className={style.title}>Entre em Contato</h1>
      <div className={style.container}>
        <h2 className={style.subTitle}>Email</h2>
        <p className={style.Contato_info}>NomeEmpresa@email.com</p>
        <h2 className={style.subTitle}>Telefone</h2>
        <p className={style.Contato_info}>(00)0000-0000</p>
        <div className={style.redeSociais}>
          <a href="../Home"><p className={style.Contato_info}><InstagramIcon />Instagram</p></a>
          <a href="../Home"><p className={style.Contato_info}><FacebookIcon />Facebook</p></a>
        </div>
      </div>
      <img src={imgEmpresa} alt="Empresa" className={style.imgEmpresa} />
    </section>
  )
}
import style from './style.module.scss';

import Header from '../../Components/Header';
import Banner from '../../images/banner.jpg';

export default function Home() {

  return (
    <div >
      <Header />
      <figure className={style.banner}>
        <img src={Banner} alt="Banner_Empresa" />
        <h1 className={style.banner_text1}>Criação de Modelos Únicos</h1>
        <h1 className={style.banner_text2}>Materiais Premium</h1>
      </figure>
    </div>
  );
}



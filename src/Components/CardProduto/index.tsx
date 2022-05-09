import style from './style.module.scss';

import Img from '../../images/defaultItem.png'

export default function CardProduto() {
  return (
    <div className={style.CardProduto}>
      <img src={Img} alt="Produto" />
    </div>
  )
}
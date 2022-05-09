import style from './style.module.scss';

import Img from '../../images/defaultItem.png'

import { Button, Modal } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import ArticleIcon from '@mui/icons-material/Article';


export default function Produto() {

  const [fretes, setFretes] = useState([{
    empresa: "NomeEmpresa",
    valor: 0,
    dias: 0
  }]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    setFretes([
      {
        empresa: "SEDEX",
        valor: 25,
        dias: 5
      },
      {
        empresa: "PAC",
        valor: 30,
        dias: 3
      },
      {
        empresa: "JADLOG",
        valor: 35,
        dias: 2
      }]);
  }, [])

  return (
    <section className={style.produtos}>
      <div className={style.container}>
        <div className={style.produtos_img}>
          <img src={Img} alt="Produto" className={style.img} />
          <img src={Img} alt="Produto" className={style.avaliacao} />
        </div>
        <div className={style.produtos_info}>
          <h1 className={style.produto_name}>Nome Produto</h1>

          <h3 className={style.valorAntigo}>R$1200,00</h3>
          <h2 className={style.valorNovo}>R$999,99</h2>
          <div className={style.quantContainer}>
            <label htmlFor="quantidade">Quantidade</label>
            <input
              type="number"
              name="quantidade"
              id="quantidade"
              min={1}
              defaultValue={1}
              className={style.quantidade} /><span>Unid</span>
            <button className={style.btn}>Adicionar ao Carrinho</button>
          </div>

          <div className={style.freteContainer}>
            <button className={style.btn} onClick={handleShow}>Calcular Frete</button>
          </div>
          <div className={style.produtos_desc}>
            <h1><ArticleIcon />Descrição do Produto</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo magni natus corporis officia voluptatibus voluptatem cupiditate, quibusdam cumque eius quasi, quisquam aspernatur? Delectus quas excepturi facere necessitatibus modi. Atque, quisquam.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo magni natus corporis officia voluptatibus voluptatem cupiditate, quibusdam cumque eius quasi, quisquam aspernatur? Delectus quas excepturi facere necessitatibus modi. Atque, quisquam.</p>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>Calculo de Frete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className={style.Cep}>
            <label htmlFor="cep">Cep</label>
            <input
              type="text"
              name="cep"
              id="cep"
              placeholder='Digite seu CEP'
            />
            <section className={style.valorEntregas}>

              {
                fretes.map((values) => (
                  <div key={values.empresa} className={style.Valores}>
                    <p>{values.empresa}</p>
                    <p>R$ {values.valor}</p>
                    <p>{values.dias} dias</p>
                  </div>
                ))
              }
            </section>

          </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Calcular Frete
          </Button>
        </Modal.Footer>
      </Modal >

    </section >
  )

}
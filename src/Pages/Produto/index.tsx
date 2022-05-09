import style from './style.module.scss';

import Img from '../../images/defaultItem.png'

import { Button, Modal } from 'react-bootstrap';
import { useEffect, useState } from 'react';



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
        </div>
        <div className={style.produtos_info}>
          <h1 className={style.produto_name}>Nome Produto</h1>
          <input
            type="number"
            name="quantidade"
            id="quantidade"
            min={1}
            defaultValue={1}
            className={style.quantidade} />
          <Button variant="primary" onClick={handleShow}>
            Calcular Frete
          </Button>
        </div>
      </div>

      {/* Modal */}
      <Modal show={show} onHide={handleClose}>
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
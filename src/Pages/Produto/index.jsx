import style from './style.module.scss';

import Img from '../../images/defaultItem.png'

import { Button, Modal } from 'react-bootstrap';
import { useState } from 'react';
import ArticleIcon from '@mui/icons-material/Article';
import StarIcon from '@mui/icons-material/Star';

const { calcularPrecoPrazo } = require('correios-brasil');



export default function Produto() {
  const [cep, setCep] = useState('');
  const [dadosCorreios, setDadosCorreios] = useState({});
  const [valoresEnvio] = useState([]);
  const [disabled, setDisabled] = useState(true);


  let args = {
    sCepOrigem: cep,
    sCepDestino: '02340010',
    nVlPeso: '1',
    nCdFormato: '1',
    nVlComprimento: '20',
    nVlAltura: '20',
    nVlLargura: '20',
    nCdServico: ['04014', '04510'],
    nVlDiametro: '0',
  };

  //Evento do Modal 
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //Verifica Cep
  function PegaCep(e: string) {
    let value = e.target.value;
    setCep(value);
    if (value.length >= 8) {
      setDisabled(false);
    }
    if (e.keyCode === 13) {
      CalcValor(value);
    }
  }

  //devolve valores do calculo de frete
  function getValores(res, quant) {
    if (valoresEnvio.length < quant) {
      valoresEnvio.push(res);
    }
  }


  async function CalcValor(args) {
    await calcularPrecoPrazo(args).then((response) => {
      setDadosCorreios(response);
    });
  }

  function CodigoCorreio(codigoCorreios) {
    if (codigoCorreios === '04014') {
      return "SEDEX";
    } else if (codigoCorreios === '04510') {
      return "PAC";
    }
  }

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
          <h4 className={style.desconto}>À vista no PIX com até <b>10% OFF</b></h4>
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

        <div className={style.produtos_desc}>
          <h1><StarIcon />Avaliações dos Usuários</h1>
          <div className={style.avaliacaoProduto}>
            <h2>Nome Cliente</h2>
            <h3>Bom <time>(11/05/2022)</time></h3>
            <p><b>Opnião Geral: </b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo magni natus corporis officia voluptatibus voluptatem cupiditate, quibusdam cumque eius quasi, quisquam aspernatur? Delectus quas excepturi facere necessitatibus modi. Atque, quisquam.</p>
          </div>
          <div className={style.avaliacaoProduto}>
            <h2>Nome Cliente</h2>
            <h3>Bom <time>(11/05/2022)</time></h3>
            <p><b>Opnião Geral: </b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo magni natus corporis officia voluptatibus voluptatem cupiditate, quibusdam cumque eius quasi, quisquam aspernatur? Delectus quas excepturi facere necessitatibus modi. Atque, quisquam.</p>
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
              onKeyUp={(e) => PegaCep(e)}
            />
            <section className={style.valorEntregas}>
              <table>
                <thead>
                  <tr className={style.Valores}>
                    <th>Empresa</th>
                    <th>Valor</th>
                    <th>Dias</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    Object.keys(dadosCorreios).forEach(function (item) {
                      getValores(dadosCorreios[item], dadosCorreios.length);
                    })
                  }
                  {
                    valoresEnvio.map(e => (
                      <tr key={e.Codigo} className={style.Valores}>
                        <td>{CodigoCorreio(e.Codigo)}</td>
                        <td>R$ {e.Valor}</td>
                        <td>{e.PrazoEntrega} dias</td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </section>

          </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="primary" onClick={() => {
            CalcValor(args);
          }} disabled={disabled}>
            Calcular Frete
          </Button>
        </Modal.Footer>
      </Modal >

    </section >
  )

}
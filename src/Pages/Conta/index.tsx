import style from './style.module.scss';

import { useState } from 'react';

export default function Login() {

  const [logradouro, setLogradouro] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState("");

  function getCep(cep: string) {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(response => {
        response.json()
          .then(data => {
            console.log(data);
            setCidade(data.localidade);
            setBairro(data.bairro);
            setLogradouro(data.logradouro);
          });
      });
  }


  return (
    <div className={style.Conta}>
      <section className={style.ContaCard}>
        <h1 className={style.title}>Dados da Conta</h1>
        <div className={style.conta_info}>

          <form>
            <label htmlFor="Nome">Nome Completo *</label>
            <input
              className={style.campoDados}
              placeholder="Nome Sobrenome"
              type="text"
              name="nome"
              id="nome"
              required
            />

            <label htmlFor="email">Email *</label>
            <input
              className={style.campoDados}
              placeholder="nome@email.com"
              type="email"
              name="email"
              id="email"
              required
            />

            <label htmlFor="senha">Senha *</label>
            <input
              className={style.campoDados}
              placeholder="Ex: 12345678"
              type="password"
              name="senha"
              id="senha"
              required />

            <label htmlFor="nascimento">Data de nascimento *</label>
            <input
              className={style.campoDados}
              type="date"
              name="nascimento"
              id="nascimento"
              required />
          </form>
        </div>
        <div className={style.conta_info}>
          <h2 className={style.subTitle}>Endereços</h2>
          <div className={style.endereco}>
            <form >
              <label htmlFor="cep">CEP</label>
              <input type="text" name="cep" id="cep" className={style.campoDados} placeholder="XXXXXXXX"
                onBlurCapture={value => getCep(value.target.value)} />
              <label htmlFor="logradouro">Logradouro</label>
              <input type="text" name="logradouro" id="logradouro" className={style.campoDados} placeholder="Rua/Avenida" value={logradouro} />
              <label htmlFor="numero">Número</label>
              <input type="text" name="numero" id="numero" className={style.campoDados} placeholder="Ex: 1234" />
              <label htmlFor="bairro">Bairro</label>
              <input type="text" name="bairro" id="bairro" className={style.campoDados} placeholder="Ex: Centro" value={bairro} />
              <label htmlFor="cidade">Cidade</label>
              <input
                type="text"
                name="cidade"
                id="cidade"
                className={style.campoDados}
                placeholder="Nome da Cidade"
                value={cidade} />
            </form>
          </div>

        </div>
        <div className={style.btn}>
          <button type="submit" className={style.enviar}>Salvar</button>
        </div>
      </section >
    </div >

  )
}
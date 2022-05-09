import style from './style.module.scss';

export default function Login() {

  return (
    <div className={style.Cadastrar}>
      <section className={style.CadastrarCard}>
        <h1 className={style.title}>Criar Conta</h1>
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

          <div className={style.btn}>
            <button type="submit" className={style.enviar}>Cadastrar</button>
          </div>
        </form>
      </section >
    </div >

  )
}
import style from './style.module.scss';

export default function Login() {

  return (
    <div className={style.Login}>
      <section className={style.LoginCard}>
        <h1 className={style.title}>Criar Conta</h1>
        <form>
          <label htmlFor="email">Email</label>
          <input
            className={style.campoDados}
            type="email"
            name="email"
            id="email"
            required
          />
          {/* <label htmlFor="senha">Senha</label>
          <input
            className={style.campoDados}
            type="password"
            name="senha"
            id="senha"
            required /> */}

          <label htmlFor="cep">CEP</label>
          <input
            className={style.campoDados}
            type="number"
            name="cep"
            id="cep" />


          <div className={style.btn}>
            <button type="submit" className={style.enviar}>Entrar</button>
          </div>
        </form>
        <a href='/'><p className={style.recuperarSenha}>Esqueci minha senha</p></a>
      </section>
    </div>

  )
}
import style from './style.module.scss';

export default function Login() {

  let cadastrado = true;

  return (
    <div className={style.Login}>
      <section className={style.LoginCard}>
        <h1 className={style.title}>Login</h1>
        <form>
          <label htmlFor="email">Email</label>
          <input
            className={style.campoDados}
            type="email"
            name="email"
            id="email"
            required
          />
          <label htmlFor="senha">Senha</label>
          <input
            className={style.campoDados}
            type="password"
            name="senha"
            id="senha"
            required />

          <div className={style.btn}>
            <button type="submit" className={style.enviar}>Entrar</button>
            <a href='../Cadastrar'><button type="button" className={style.enviar}>Não tenho cadastro</button></a>
          </div>

        </form>
        <a href='/'><p className={style.recuperarSenha}>Esqueci minha senha</p></a>
      </section>
    </div>

  )
}
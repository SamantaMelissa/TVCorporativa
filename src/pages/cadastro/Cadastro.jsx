import logo from "../../assets/img/logo.svg"
import Botao from "../../components/botao/Botao";

const Cadastro = () => {
    return (
        <>
            <header>
                <img className="logo_cadastro" src={logo} />
            </header>
            <main className="main_cadastro">
                <form action="">
                    <div className="campo_cadastro">
                        <label htmlFor="">Nome Completo:</label>
                        <input type="text" />
                    </div>
                    <div className="campo_cadastro">
                        <label htmlFor="">Email:</label>
                        <input type="email" />
                    </div>
                    <div className="campo_cadastro">
                        <label htmlFor="">Senha:</label>
                        <input type="password" />
                    </div>
                    {/* <Botao/> */}
                </form>
            </main>


        </>
    )
}

export default Cadastro;
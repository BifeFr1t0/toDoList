import './login.css'
import logo from './foto.png'

function Login(){
    return (
        <>
        <div className="container">
            <header>
                <div className="logo">
                    <img src={logo} alt="logo da lista de afazeres"/>
                    <h2>TO DO LIST</h2>
                </div>
                <div className="login">
                    <a className="entrar" href='../../Login.tsx'>
                        Entrar
                    </a>
                </div>
            </header>
        </div>
        </>
    )
}

export default Login
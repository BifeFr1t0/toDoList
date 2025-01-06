import './login.css'
import logo from './foto.png'
import Button from '@mui/material/Button';

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
                    <Button variant='text' className='entrar'>
                        Entrar
                    </Button>
                </div>
            </header>
        </div>
        </>
    )
}

export default Login
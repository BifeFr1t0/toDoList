import './login.css'
import logo from './foto.png'
import Button from '@mui/material/Button'
import LoginIcon from '@mui/icons-material/Login'
import {styled} from '@mui/system';
import { Link } from 'react-router';

const CustomButton = styled(Button)({borderRadius:'14px 14px', padding:'0.9vw 1.2vw'})

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
                <CustomButton color="secondary" aria-label="Log in" size='medium' variant='contained'>
                    <Link to="/login" className='link'>
                    Entrar
                    <LoginIcon/>
                    </Link>
                </CustomButton>
                </div>
            </header>
        </div>
        </>
    )
}

export default Login
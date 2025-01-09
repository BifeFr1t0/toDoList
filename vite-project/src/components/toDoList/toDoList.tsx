import './toDoList.css'
import Button from '@mui/material/Button'
import { styled } from '@mui/system';
import SendIcon from '@mui/icons-material/Send';

const CustomButton = styled(Button)({ borderRadius:'0px 20px 20px 0px', fontFamily: 'Helvetica'});


function ToDoList(){
    return (
        <>
            <main>
               <section className='input'>
                    <input type="text" />
                    <CustomButton variant='contained' size='large' color='success' className='enviar'>
                        <h4>Enviar &nbsp;</h4>
                        <SendIcon/>
                    </CustomButton>
                </section>
                <section className='list'>
                        <div className="toDo"> 
                            <h2>A fazer</h2>
                            <h4></h4>
                        </div>
                        <div className="doing">
                            <h2>Fazendo</h2>
                            <h4></h4>
                        </div>
                        <div className="finished">
                            <h2>Finalizado</h2>
                            <h4></h4>
                        </div>

                    
                </section>
            </main>
        </>
    )
}

export default ToDoList;
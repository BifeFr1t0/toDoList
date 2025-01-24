import './toDoList.css';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';
import TaskComponent from './Tasks.tsx';  

const CustomButton = styled(Button)({
  borderRadius: '0px 20px 20px 0px',
  fontFamily: 'Helvetica',
});


interface Task {
  id: number;
  todo: string;
  completed: boolean;
}

function ToDoList() {
  const [newTask, setNewTask] = useState(''); 
  const [tasks, setTasks] = useState<Task[]>([]); 

  // Função para adicionar a nova tarefa
  const addTask = () => {
    if (newTask.trim() !== '') {
      const newTaskObj: Task = {
        id: tasks.length + 1,  // Gera um id único
        todo: newTask,
        completed: false,  // A nova tarefa começa como não concluída
      };
      setTasks([...tasks, newTaskObj]);  // Adiciona a nova tarefa na lista
      setNewTask('');  // Limpa o input após adicionar a tarefa
    }
  };

  return (
    <>
      <main>
        <section className='input'>
          {/* Campo de input para digitar a nova tarefa */}
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}  // Atualiza o valor no estado
            placeholder="Digite uma nova tarefa"
          />
          {/* Botão para adicionar a nova tarefa */}
          <CustomButton
            variant='contained'
            size='large'
            color='success'
            className='enviar'
            onClick={addTask}  // Chama a função addTask ao clicar
          >
            <h4>Enviar &nbsp;</h4>
            <SendIcon />
          </CustomButton>
        </section>

        <section className='list'>
          <h2>A fazer</h2>
          <h4>
            {/* Passando as tarefas para o componente de lista */}
            <TaskComponent tasks={tasks} setTasks={setTasks} />
          </h4>
        </section>
      </main>
    </>
  );
}

export default ToDoList;

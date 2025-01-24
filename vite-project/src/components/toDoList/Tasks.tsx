import { Dispatch, SetStateAction } from 'react';
import './Tasks.css'

// Definindo o tipo de uma tarefa
interface Task {
  id: number;
  todo: string;
  completed: boolean;
}

// Definindo o tipo para as props do componente
interface TaskComponentProps {
  tasks: Task[];  // A lista de tarefas
  setTasks: Dispatch<SetStateAction<Task[]>>;  // Função para atualizar as tarefas
}

const TaskComponent = ({ tasks, setTasks }: TaskComponentProps) => {
  // Função para alternar o status "completed" de uma tarefa
  const toggleCompleted = (index: number) => {
    const updatedTasks = [...tasks];  // Cria uma cópia das tarefas
    updatedTasks[index].completed = !updatedTasks[index].completed;  // Alterna o status
    setTasks(updatedTasks);  // Atualiza o estado com a nova lista
  };

  return (
    <ul>
      {tasks.map((task, index) => (
        <li
          key={task.id}
          style={{
            textDecoration: task.completed ? 'line-through' : 'none',
            cursor: 'pointer',
          }}
          onClick={() => toggleCompleted(index)}  // Alterna o status ao clicar
        >
          {task.todo}
        </li>
      ))}
    </ul>
  );
};

export default TaskComponent;
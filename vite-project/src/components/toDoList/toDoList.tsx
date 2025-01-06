import './toDoList.css'

function ToDoList(){
    return (
        <>
            <main>
               <section className='input'>
                    <input type="text" />
                    <button>Enviar</button>
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
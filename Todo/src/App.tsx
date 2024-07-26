import React,{FC} from 'react'
import './App.css'
import { useState } from 'react'
import { TodoType } from './Apptypes'

const App: FC = () => {




  const [task, setTask] = useState<string>('');
  const [workDay, setWorkDay] = useState<number>(0);
  const [todoList , setTodoList] = useState<TodoType[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {

    if(event.target.name === "task")
    {
      setTask(event.target.value)
    }
    else
    {
      setWorkDay(parseInt(event.target.value))
    }
    console.log(task);
    console.log(workDay);
  }

  return (
    <div className="App">
     <input type="text" 
     value={task} 
     name="task"
     placeholder="Taskınızı Giriniz" 
     onChange={handleChange}
     />

     <input type="number" 
     value={workDay}
     name="workDay"
     placeholder="Kaç günde tamamlamalısınız"
     onChange={handleChange}
     />
     <button>Yeni Task Ekle</button>

    </div>
  )
}

export default App

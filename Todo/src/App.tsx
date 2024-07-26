import React, { ChangeEvent, FC } from 'react';
import { useState } from 'react';
import { TodoType } from './Apptypes';

import './App.css';

const App: FC = () => {
  const [task, setTask] = useState<string>('');
  const [workDay, setWorkDay] = useState<number>(0);
  const [todoList, setTodoList] = useState<TodoType[]>([]);

  console.log(todoList);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === 'task') 
    {
      setTask(event.target.value);
    } 
    else
    {
      setWorkDay(Number(event.target.value));
    }

};

  const addNewTask = ():void => {
    const newTask = { taskName: task, workDay: workDay };
    setTodoList([...todoList, newTask]);
    setTask('');
    setWorkDay(0);

  };

  return (
    <div className="App">
      <div>
        <input
          type="text"
          value={task}
          name="task"
          placeholder="Taskınızı giriniz..."
          onChange={handleChange}
        />
        <input
          type="number"
          value={workDay}
          name="workDay"
          placeholder="Kaç günde tamamlamamlısınız"
          onChange={handleChange}
        />
        <button onClick={addNewTask}>Yeni Task Ekle</button>
      </div>
      <div>
        {
        todoList.map((task:TodoType , index:number) => {
           return <TodoItem key={index} task={task} />;
          }
      </div>
    </div>

  );

};

export default App;

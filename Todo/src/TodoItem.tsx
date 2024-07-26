import React from 'react';
import { TodoType } from './Apptypes';

type PropsType = {
  task: TodoType;
  deleteTask(nameToDelete: string): void;
};

function TodoItem({ task, deleteTask }: PropsType) {
  return (
    <div className="card">
      <div>
        <p>{task.taskName}</p>
        <p>{task.workDay}</p>
        <button onClick={() => deleteTask(task.taskName)}>Sil</button>
      </div>
    </div>
  );
}

export default TodoItem;

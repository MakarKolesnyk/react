import Task from "../Task/Task";
import { useState, useEffect } from "react";
import tasks from "./data";

function TasksList() {
  const [dataTasks, setDataTasks] = useState(tasks);
  const [archiv, setArchiv] = useState([]);
  const setDoneTask = (id) => {
    let archivTask;
    const newTasks = dataTasks.map((task) => {
      if (task.id === id) {
        archivTask = { id: task.id, text: task.text };
        return { ...task, isDone: true };
      }
      return task;
    });
    setDataTasks(newTasks);
    const newArchiv = [...archiv, archivTask];
    setArchiv(newArchiv);
  };
  const setNotDoneTask = (id) => {
    const newTasks = dataTasks.map((task) => {
      if (task.id === id) {
        return { ...task, isDone: false };
      }
      return task;
    });
    setDataTasks(newTasks);
  };
  useEffect(() => {
    if (archiv.length === 0) {
      const saveArchiv = JSON.parse(localStorage.getItem("saveArchiv"));
      setArchiv(saveArchiv);
    }
  }, [archiv.length]);
  useEffect(() => {
    localStorage.setItem("saveArchiv", JSON.stringify(archiv));
  }, [archiv]);

  return (
    <>
      {dataTasks.map((task) => (
        <Task
          key={task.id}
          dataTask={task}
          setDoneTask={setDoneTask}
          setNotDoneTask={setNotDoneTask}
        />
      ))}
      <hr />
      <h3>Done task</h3>
      {archiv.map((task) => (
        <p key={task.id}>{task.text}</p>
      ))}
    </>
  );
}

export default TasksList;

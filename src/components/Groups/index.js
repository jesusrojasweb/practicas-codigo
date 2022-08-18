import { useContext, useEffect, useState } from "react";
import Context from "../../context/TaskContext";
import CreateTask from "../CreateTask";
import Task from "../Task";

function Groups({ groupName }) {
  const { tasks, setTasks } = useContext(Context);
  const [taskToEdit, setTaskToEdit] = useState({
    id: "",
    name: "",
    isEditable: false,
    groupName,
  });

  const deleteTask = (id) => {
    const tasksCopy = tasks;
    const tasksNoDeleted = tasksCopy.filter((task) => task.id !== id);
    setTasks(tasksNoDeleted);
  };

  return (
    <section>
      <h2>{groupName}</h2>
      <CreateTask groupName={groupName} taskToEdit={taskToEdit} />
      {tasks[0] !== undefined &&
        tasks.map((task) => (
          <Task
            key={task.id}
            {...task}
            group={groupName}
            deleteTask={deleteTask}
            setTaskToEdit={setTaskToEdit}
          />
        ))}
    </section>
  );
}

export default Groups;

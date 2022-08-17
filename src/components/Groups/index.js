import { useContext, useEffect, useState } from "react";
import Context from "../../context/TaskContext";
import CreateTask from "../CreateTask";

function Groups({ groupName }) {
  const { tasks, setTasks } = useContext(Context);
  const [taskToEdit, setTaskToEdit] = useState({});

  useEffect(() => {
    const defaultTaskValues = {
      name: "",
      isEditable: false,
      groupName,
    };
    setTaskToEdit(defaultTaskValues);
  }, []);

  console.log("tasks", tasks);

  return (
    <section>
      <h2>{groupName}</h2>
      <CreateTask groupName={groupName} taskToEdit={taskToEdit} />
      {tasks[0] !== undefined &&
        tasks.map((task) => <li key={task.name}>{task.name}</li>)}
    </section>
  );
}

export default Groups;

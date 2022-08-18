import { useContext, useEffect, useState } from "react";
import Context from "../../context/TaskContext";
import CreateTask from "../CreateTask";
import Task from "../Task";

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
  }, [groupName]);

  return (
    <section>
      <h2>{groupName}</h2>
      <CreateTask groupName={groupName} taskToEdit={taskToEdit} />
      {tasks[0] !== undefined && tasks.map((task) => <Task key={task.name} />)}
    </section>
  );
}

export default Groups;

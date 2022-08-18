import { useCallback, useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Context from "../../context/TaskContext";

import "./CreateTask.css";

function CreateTask({ groupName, taskToEdit }) {
  const [taskValues, setTaskValues] = useState({});
  const { tasks, setTasks } = useContext(Context);

  useEffect(() => {
    setTaskValues(taskToEdit);
  }, [taskToEdit]);

  const handleChange = useCallback(
    (evt) => {
      const target = evt.target;
      const value = target.type === "checkbox" ? target.checked : target.value;
      const name = target.name;

      setTaskValues({
        ...taskValues,
        [name]: value,
      });
    },
    [taskValues]
  );

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (taskToEdit.id === "") {
      createTask();
    } else {
      editTask();
    }

    setTaskValues({
      id: "",
      name: "",
      isEditable: false,
      groupName,
    });
  };

  const createTask = () => {
    const newTask = {
      ...taskValues,
      groupName,
      id: uuidv4(),
    };
    setTasks([...tasks, newTask]);
  };

  const editTask = () => {
    const otherTasks = [...tasks];
    const todo = otherTasks.find((todo) => todo.id === taskValues.id);
    todo.name = taskValues.name;
    todo.isEditable = taskValues.isEditable;
    setTasks(otherTasks);
  };

  return (
    <form onSubmit={handleSubmit} className="CreateTask">
      <input
        type="text"
        placeholder="Nombre de la tarea"
        name="name"
        value={taskValues.name}
        onChange={handleChange}
        className="CreateTask-input"
      />
      <label className="CreateTask-label">
        Permiso de edicion
        <input
          type="checkbox"
          name="isEditable"
          checked={taskValues.isEditable}
          onChange={handleChange}
          className="CreateTask-checkbox"
        />
      </label>
      <button className="CreateTask-button" type="submit">
        Agregar
      </button>
    </form>
  );
}

export default CreateTask;

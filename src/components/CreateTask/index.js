import { useCallback, useContext, useState } from "react";
import Context from "../../context/TaskContext";

function CreateTask({ groupName, taskToEdit }) {
  const [taskValues, setTaskValues] = useState(taskToEdit);
  const { tasks, setTasks } = useContext(Context);

  const handleChange = useCallback(
    (evt) => {
      let value;

      if (evt.target.checked) {
        value = evt.target.checked;
      } else {
        value = evt.target.value;
      }

      setTaskValues({
        ...taskValues,
        [evt.target.name]: value,
      });
    },
    [taskValues]
  );

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setTasks([...tasks, taskValues]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre de la tarea"
        name="name"
        value={taskValues.name}
        onChange={handleChange}
      />
      <label>
        Permiso de edicion
        <input
          type="checkbox"
          name="isEditable"
          checked={taskValues.isEditable}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Agregar</button>
    </form>
  );
}

export default CreateTask;

import { FaTrashAlt, FaPencilAlt } from "react-icons/fa";

import "./Task.css";

function Task(props) {
  const { id, name, groupName, isEditable, deleteTask, group, setTaskToEdit } =
    props;
  const handleDelete = () => {
    deleteTask(id);
  };

  const handleToEdit = () => {
    const task = {
      id,
      name,
      isEditable,
      groupName,
    };
    setTaskToEdit(task);
  };

  return (
    <li className="Task">
      {name}
      {(group === groupName || isEditable) && (
        <span>
          <button onClick={handleToEdit} className="Task-button">
            <FaPencilAlt />
          </button>
          <button onClick={handleDelete} className="Task-button">
            <FaTrashAlt />
          </button>
        </span>
      )}
    </li>
  );
}

export default Task;

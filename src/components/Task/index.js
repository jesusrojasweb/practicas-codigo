function Task({ name, groupName, isEditable }) {
  return (
    <li>
      {name}
      {isEditable && (
        <>
          <button>Editar</button>
          <button>Borrar</button>
        </>
      )}
    </li>
  );
}

export default Task;

export const getRealState = () => {
  return fetch("http://localhost:3001/realStates").then((res) => res.json());
};

export const searchRealState = (query) => {
  return fetch(`http://localhost:3001/realStates/?q=${query}`).then((res) =>
    res.json()
  );
};

export const editRealState = (data) => {
  return fetch(`http://localhost:3001/realStates/${data.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then((res) => getRealState());
};

export const deleteRealState = (id) => {
  return fetch(`http://localhost:3001/realStates/${id}`, {
    method: "DELETE",
  }).then((res) => getRealState());
};

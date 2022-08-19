export const getRealState = () => {
  return fetch("http://localhost:3001/realStates").then((res) => res.json());
};

export const searchRealState = (query) => {
  return fetch(`http://localhost:3001/realStates/?q=${query}`).then((res) =>
    res.json()
  );
};

export const deleteRealState = (id) => {
  return fetch(`http://localhost:3001/realStates/${id}`, {
    method: "DELETE",
  }).then((res) => getRealState());
};

import { useContext, useState } from "react";
import { RealStateContext } from "../../context/RealStateContext";
import usePermissions from "../../hooks/usePermissions";
import { getRealState, searchRealState } from "../../services/realStateService";

function SearchHouse({ handleClose }) {
  const [search, setSearch] = useState("");
  const { setRealStates } = useContext(RealStateContext);
  const { hasCreate } = usePermissions();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.trim() !== "") {
      searchRealState(search).then((data) => {
        setRealStates(data);
      });
    } else {
      getRealState().then((data) => {
        setRealStates(data);
      });
    }
  };

  return (
    <form className="SearchHouse" onSubmit={handleSubmit}>
      <input
        type="text"
        name="search"
        placeholder="Buscar"
        className="SearchHouse__input"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit" className="SearchHouse__button">
        Buscar
      </button>
      {hasCreate && <button onClick={handleClose}>Crear</button>}
    </form>
  );
}

export default SearchHouse;

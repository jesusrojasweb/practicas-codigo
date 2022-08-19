import { useContext } from "react";
import { RealStateContext } from "../../context/RealStateContext";
import usePermissions from "../../hooks/usePermissions";
import { deleteRealState } from "../../services/realStateService";

function DetailsRealState({ house, onClose }) {
  const { id, price, name, located, type, availability, image } = house;
  const { setRealStates } = useContext(RealStateContext);

  const { hasUpdate, hasDelete, hasPermissions } = usePermissions();

  const availabilityMessage = availability ? "Disponible" : "No Disponible";

  const deleteHouse = () => {
    let isAgree = window.confirm("Estas seguro de borrar?");

    alert(isAgree);

    if (isAgree) {
      deleteRealState(id).then((data) => {
        onClose();
        setRealStates(data);
      });
    }
  };

  return (
    <article className="DetailsRealState">
      <figure className="DetailsRealState__figure">
        <img src={image} alt={name} />
      </figure>
      <aside className="DetailsRealState">
        <h2 className="DetailsRealState">{name}</h2>
        <h3 className="DetailsRealState">{located}</h3>

        <ul className="DetailsRealState">
          <li className="DetailsRealState">Tipo {type}</li>
          <li className="DetailsRealState">Tipo {availabilityMessage}</li>
        </ul>
        <p className="DetailsRealState">{price}</p>
        {hasPermissions && (
          <>
            {hasUpdate && (
              <button className="DetailsRealState DetailsRealState--edit">
                Editar
              </button>
            )}
            {hasDelete && (
              <button
                onClick={deleteHouse}
                className="DetailsRealState DetailsRealState--delete"
              >
                Eliminar
              </button>
            )}
          </>
        )}
      </aside>
    </article>
  );
}

export default DetailsRealState;

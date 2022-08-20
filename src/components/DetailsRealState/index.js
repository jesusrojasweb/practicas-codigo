import { useContext } from "react";
import { RealStateContext } from "../../context/RealStateContext";
import usePermissions from "../../hooks/usePermissions";
import { deleteRealState } from "../../services/realStateService";

import "./DetailsRealState.css";

function DetailsRealState({ house, onClose, handleEditting }) {
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
        <img src={image} alt={name} className="DetailsRealState__image" />
      </figure>
      <aside className="DetailsRealState__details">
        <header className="DetailsRealState__header">
          <h2 className="DetailsRealState__name">{name}</h2>
          <h3 className="DetailsRealState__located">{located}</h3>
        </header>

        <ul className="DetailsRealState__categories">
          <li className="DetailsRealState__type DetailsRealState__list">
            Tipo <strong>{type}</strong>
          </li>
          <li className="DetailsRealState__availability DetailsRealState__list">
            Disponibilidad <strong>{availabilityMessage}</strong>
          </li>
          <p className="DetailsRealState__price">${price}</p>
        </ul>
        <footer className="DetailsRealState__footer">
          {hasPermissions && (
            <div className="DetailsRealState__buttonContainer">
              {hasUpdate && (
                <button
                  className="DetailsRealState__button DetailsRealState__button--edit"
                  onClick={handleEditting}
                >
                  Editar
                </button>
              )}
              {hasDelete && (
                <button
                  onClick={deleteHouse}
                  className="DetailsRealState__button DetailsRealState__button--delete"
                >
                  Eliminar
                </button>
              )}
            </div>
          )}
        </footer>
      </aside>
    </article>
  );
}

export default DetailsRealState;

import { useContext, useId, useState } from "react";
import { v4 as uuid } from "uuid";
import { RealStateContext } from "../../context/RealStateContext";
import {
  createRealState,
  editRealState,
} from "../../services/realStateService";

import "./HouseForm.css";

function HouseForm({ house = {}, handleEditting, onClose }) {
  const [formValues, setFormValues] = useState(house);
  const { setRealStates } = useContext(RealStateContext);

  const handleChange = (evt) => {
    const target = evt.target;
    const name = target.name;
    const value = target.value;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (handleEditting) {
      editRealState(formValues).then((data) => {
        setRealStates(data);
        handleEditting();
      });
    } else {
      const availability = Boolean(formValues.availability);
      const price = +formValues.price;
      const newHouse = {
        ...formValues,
        price,
        availability,
        id: uuid(),
      };

      createRealState(newHouse).then((data) => {
        setRealStates(data);
        onClose();
      });
    }
  };

  return (
    <form className="HouseForm" onSubmit={handleSubmit}>
      <div className="HouseForm__group">
        <input
          name="name"
          type="text"
          placeholder="Nombre"
          onChange={handleChange}
          value={formValues.name}
          className="HouseForm__name HouseForm__input"
        />
        <input
          name="price"
          type="number"
          placeholder="Precio"
          onChange={handleChange}
          value={formValues.price}
          className="HouseForm__price HouseForm__input"
        />
        <input
          name="located"
          type="text"
          placeholder="Ubicacion"
          onChange={handleChange}
          value={formValues.located}
          className="HouseForm__located HouseForm__input"
        />
        <input
          name="image"
          type="url"
          placeholder="Url de la imagen"
          onChange={handleChange}
          value={formValues.image}
          className="HouseForm__image HouseForm__input"
        />
        <select
          name="type"
          onChange={handleChange}
          value={formValues.type}
          className="HouseForm__type HouseForm__input"
        >
          <option>Apartamento</option>
          <option>Casa</option>
          <option>Renta</option>
        </select>
        <select
          name="availability"
          onChange={handleChange}
          value={formValues.availability}
          className="HouseForm__availability HouseForm__input"
        >
          <option value="true">Disponible</option>
          <option value="false">No Disponible</option>
        </select>
      </div>
      <button type="submit" className="HouseForm__button">
        {handleEditting ? "Editar" : "Crear"}
      </button>
    </form>
  );
}

export default HouseForm;

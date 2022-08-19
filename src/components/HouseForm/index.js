import { useContext, useId, useState } from "react";
import { v4 as uuid } from "uuid";
import { RealStateContext } from "../../context/RealStateContext";
import {
  createRealState,
  editRealState,
} from "../../services/realStateService";

function HouseForm({ house = {}, handleEditting, onClose }) {
  const [formValues, setFormValues] = useState(house);
  const { setRealStates } = useContext(RealStateContext);
  const houseId = useId();

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
    <form className="Houseform" onSubmit={handleSubmit}>
      <input
        name="name"
        type="text"
        placeholder="Nombre"
        onChange={handleChange}
        value={formValues.name}
      />
      <input
        name="price"
        type="number"
        placeholder="Precio"
        onChange={handleChange}
        value={formValues.price}
      />
      <input
        name="located"
        type="text"
        placeholder="Ubicacion"
        onChange={handleChange}
        value={formValues.located}
      />
      <input
        name="image"
        type="url"
        placeholder="Url de la imagen"
        onChange={handleChange}
        value={formValues.image}
      />
      <select name="type" onChange={handleChange} value={formValues.type}>
        <option>Apartamento</option>
        <option>Casa</option>
        <option>Renta</option>
      </select>
      <select
        name="availability"
        onChange={handleChange}
        value={formValues.availability}
      >
        <option value="true">Disponible</option>
        <option value="false">No Disponible</option>
      </select>
      <button type="submit">{handleEditting ? "Editar" : "Crear"}</button>
    </form>
  );
}

export default HouseForm;

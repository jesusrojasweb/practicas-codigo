import { useContext, useState } from "react";
import { RealStateContext } from "../../context/RealStateContext";
import { editRealState } from "../../services/realStateService";

function HouseForm({ house = {}, handleEditting }) {
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
    editRealState(formValues).then((data) => {
      setRealStates(data);
      handleEditting();
    });
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
      <button type="submit">Editar</button>
    </form>
  );
}

export default HouseForm;

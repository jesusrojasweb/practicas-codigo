import { useState } from "react";

function HouseForm({ house = {} }) {
  const [formValues, setFormValues] = useState(house);

  return (
    <form className="Houseform">
      <input name="name" type="text" placeholder="Nombre" />
      <input name="price" type="number" placeholder="Precio" />
      <input name="located" type="text" placeholder="Ubicacion" />
      <input name="image" type="url" placeholder="Url de la imagen" />
      <select name="type">
        <option>Apartamento</option>
        <option>Casa</option>
        <option>Renta</option>
      </select>
      <select name="availability">
        <option>Disponible</option>
        <option>No Disponible</option>
      </select>
    </form>
  );
}

export default HouseForm;

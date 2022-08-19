import { useState } from "react";
import DetailsModal from "../DetailsModal.js";

import "./RealState.css";

function RealState(props) {
  const { price, name, located, image } = props;
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <article className="RealState" onClick={handleClose}>
        <figure className="RealState__figure">
          <img src={image} alt={name} className="RealState__image" />
          <p className="RealState__price">${price}</p>
        </figure>
        <h3 className="RealState__name">{name}</h3>
        <p className="RealState__located">{located}</p>
      </article>
      {isOpen && <DetailsModal onClose={handleClose} house={props} />}
    </>
  );
}

export default RealState;

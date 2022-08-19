import { useState } from "react";
import DetailsRealState from "../DetailsRealState";
import HouseForm from "../HouseForm";
import Modal from "../Modal";

function DetailsModal({ house, onClose }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditting = () => {
    setIsEditing(!isEditing);
  };

  return (
    <Modal onClose={onClose}>
      {!isEditing && (
        <DetailsRealState
          house={house}
          onClose={onClose}
          handleEditting={handleEditting}
        />
      )}
      {isEditing && <HouseForm house={house} handleEditting={handleEditting} />}
    </Modal>
  );
}

export default DetailsModal;

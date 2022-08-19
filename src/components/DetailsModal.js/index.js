import DetailsRealState from "../DetailsRealState";
import HouseForm from "../HouseForm";
import Modal from "../Modal";

function DetailsModal({ house, onClose }) {
  return (
    <Modal onClose={onClose}>
      <DetailsRealState house={house} onClose={onClose} />
      <HouseForm />
    </Modal>
  );
}

export default DetailsModal;

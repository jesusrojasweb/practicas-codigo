import HouseForm from "../HouseForm";
import Modal from "../Modal";

const HOUSE_DEFAULT = {
  price: 0,
  name: "",
  located: "",
  image:
    "https://cdn.pixabay.com/photo/2017/04/10/22/28/residence-2219972_960_720.jpg",
  type: "",
  availability: true,
};

function FormModal({ onClose }) {
  return (
    <Modal onClose={onClose}>
      <HouseForm house={HOUSE_DEFAULT} onClose={onClose} />
    </Modal>
  );
}

export default FormModal;

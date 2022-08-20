import { createPortal } from "react-dom";
import { FaTimes } from "react-icons/fa";

import "./Modal.css";

export function ModalContent({ children, onClose }) {
  return (
    <section className="Modal">
      <div className="Modal__container">
        <header className="Modal__top">
          <button className="Modal__button" onClick={onClose}>
            <FaTimes />
          </button>
        </header>
        <div className="Moda__content">{children}</div>
      </div>
    </section>
  );
}

export default function Modal({ children, onClose }) {
  return createPortal(
    <ModalContent onClose={onClose}>{children}</ModalContent>,
    document.getElementById("modal")
  );
}

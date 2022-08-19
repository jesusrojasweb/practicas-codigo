import { createPortal } from "react-dom";

import "./Modal.css";

export function ModalContent({ children, onClose }) {
  return (
    <section className="Modal">
      <div className="Modal__container">
        <header className="Modal__top">
          <button className="Modal__button" onClick={onClose}>
            Cerrar
          </button>
        </header>
        {children}
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

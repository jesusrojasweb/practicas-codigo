import { useContext, useState } from "react";
import { TurnContext } from "../../context/TurnContext";
import "./Message.css";

function Message() {
  const { isStarting, setIsStarting } = useContext(TurnContext);
  const [show, setShow] = useState(isStarting);
  return (
    <>
      {show && (
        <section className="Message">
          <h2 className="Message-title">
            Agreguen sus botes. Hagan click en finalizar cuando esten listos.
          </h2>
          <button
            className="Message-button"
            onClick={() => {
              setIsStarting(false);
              setShow(false);
            }}
          >
            Finalizar
          </button>
        </section>
      )}
    </>
  );
}

export default Message;

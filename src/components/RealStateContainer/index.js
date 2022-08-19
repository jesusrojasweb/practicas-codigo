import { useContext, useEffect } from "react";
import { RealStateContext } from "../../context/RealStateContext";
import { getRealState } from "../../services/realStateService";
import RealState from "../RealState";

import "./RealStateContainer.css";

function RealStateContainer() {
  const { realStates, setRealStates, setUser } = useContext(RealStateContext);

  useEffect(() => {
    getRealState().then((data) => {
      console.log(data);
      setRealStates(data);
    });

    const user = {
      id: 1,
      name: "Jesus",
      email: "correo@jesus.com",
      permissions: ["update", "create", "delete"],
    };

    setUser(user);
  }, [setRealStates, setUser]);
  return (
    <section className="RealStateContainer">
      {realStates.map((house) => (
        <RealState key={house.id} {...house} />
      ))}
    </section>
  );
}

export default RealStateContainer;

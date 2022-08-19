import { useState } from "react";
import usePermissions from "../../hooks/usePermissions";
import FormModal from "../FormModal";
import SearchHouse from "../SearchHouse";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { hasPermissions } = usePermissions();

  const handleClose = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="App-header">
      <h1>Real State</h1>
      <SearchHouse handleClose={handleClose} />
      {hasPermissions && isOpen && <FormModal onClose={handleClose} />}
    </header>
  );
}

export default Header;

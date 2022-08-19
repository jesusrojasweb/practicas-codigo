import { useContext, useMemo } from "react";
import { RealStateContext } from "../context/RealStateContext";

export const getPermissions = (user, permission) => {
  return user.permissions?.includes(permission);
};

export const verifyPermissions = (user) => {
  return user.permissions !== undefined;
};

const usePermissions = () => {
  const { user } = useContext(RealStateContext);
  const hasCreate = useMemo(() => getPermissions(user, "create"), [user]);
  const hasUpdate = useMemo(() => getPermissions(user, "update"), [user]);
  const hasDelete = useMemo(() => getPermissions(user, "delete"), [user]);
  const hasPermissions = useMemo(() => verifyPermissions(user), [user]);

  return { hasUpdate, hasDelete, hasPermissions, hasCreate };
};

export default usePermissions;

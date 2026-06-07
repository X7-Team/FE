import type { ReactNode } from "react";
import { useAuthStore } from "../../stores/useAuthStore";
import { Navigate } from "react-router";
import { roleNavigate } from "../../constants/roleNavigate";

const LoggedProtected = ({ children }: { children: ReactNode }) => {
  const loginState = useAuthStore((state) => state.isAuthenticate);
  const userRole = useAuthStore((state) => state.user?.role);
  if (loginState && userRole)
    return (
      <Navigate
        replace
        to={roleNavigate[userRole]}
        state={{ message: "Đăng nhập thành công" }}
      />
    );
  return children;
};

export default LoggedProtected;

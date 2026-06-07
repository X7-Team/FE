import type { ReactNode } from "react";
import { useAuthStore } from "../../stores/useAuthStore";
import { Navigate } from "react-router";

const MainProtected = ({ children }: { children: ReactNode }) => {
  const loginState = useAuthStore((state) => state.isAuthenticate);
  if (!loginState) return <Navigate to={"/auth/login"} />;
  return children;
};

export default MainProtected;

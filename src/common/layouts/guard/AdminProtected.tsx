import type { ReactNode } from "react";
import { useAuthStore } from "../../stores/useAuthStore";
import { Navigate } from "react-router";

const AdminProtected = ({ children }: { children: ReactNode }) => {
  const loginState = useAuthStore((state) => state.isAuthenticate);
  const role = useAuthStore((state) => state.user?.role);
  if (!loginState) return <Navigate to={"/auth/login"} />;
  if (role !== "admin") return <Navigate to={"/"} />;
  return children;
};

export default AdminProtected;

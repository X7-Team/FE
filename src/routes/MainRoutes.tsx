import type { RouteObject } from "react-router";
import AuthLayout from "../common/layouts/AuthLayout";
import LoggedProtected from "../common/layouts/guard/LoggedProtected";
import MainProtected from "../common/layouts/guard/MainProtected";
import MainLayout from "../common/layouts/MainLayout";
import LoginPage from "../pages/client/auth/LoginPage";
import RegisterRequestPage from "../pages/client/auth/RegisterRequestPage";
import HomePage from "../pages/client/home/HomePage";

export const MainRoutes: RouteObject[] = [
  {
    path: "",
    element: (
      <MainProtected>
        <MainLayout />
      </MainProtected>
    ),
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
  {
    path: "auth",
    element: (
      <LoggedProtected>
        <AuthLayout />
      </LoggedProtected>
    ),
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register-request",
        element: <RegisterRequestPage />,
      },
    ],
  },
];

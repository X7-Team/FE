import { Navigate, type RouteObject } from "react-router";
import Dashboard from "../pages/admin/dashboard/Dashboard";
import ListUser from "../pages/admin/user/ListUser";
import RatioCalculatorPage from "../pages/common/calc/ratio/RatioCalculatorPage";
import AdminProtected from "../common/layouts/guard/AdminProtected";
import AdminLayout from "../common/layouts/AdminLayout";
import PortingCalculatorPage from "../pages/common/calc/porting/PortingCalculatorPage";

export const AdminRoutes: RouteObject[] = [
  {
    path: "admin",
    element: (
      <AdminProtected>
        <AdminLayout />
      </AdminProtected>
    ),
    children: [
      {
        index: true,
        element: <Navigate to="dashboard" replace />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "user",
        element: <ListUser />,
      },
      {
        path: "calculator",
        children: [
          { path: "ratio", element: <RatioCalculatorPage /> },
          { path: "porting", element: <PortingCalculatorPage /> },
        ],
      },
    ],
  },
];

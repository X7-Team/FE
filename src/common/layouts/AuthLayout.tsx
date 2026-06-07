import { App, ConfigProvider, theme } from "antd";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <>
      <ConfigProvider
        theme={{
          algorithm: theme.darkAlgorithm,
          token: {
            colorBgContainer: "#10141b",
            colorPrimary: "#ef4444",
          },
          components: {
            Modal: {
              contentBg: "transparent",
              headerBg: "transparent",
              footerBg: "transparent",
            },
          },
        }}
      >
        <App>
          <main className="min-h-screen bg-linear-to-b from-gray-700 via-bg to-bg">
            <div className="max-w-4xl">
              <Outlet />
            </div>
          </main>
        </App>
      </ConfigProvider>
    </>
  );
};

export default AuthLayout;

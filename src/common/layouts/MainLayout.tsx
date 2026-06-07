import { App, ConfigProvider, theme } from "antd";
import { Outlet } from "react-router";
import { RouteMessageListener } from "../../components/common/RouteMessageListener";
import RootHeader from "./components/header/RootHeader";

const MainLayout = () => {
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
          <RouteMessageListener />
          <div className="bg-bg min-w-screen min-h-screen">
            <RootHeader />
            <main>
              <Outlet />
            </main>
          </div>
        </App>
      </ConfigProvider>
    </>
  );
};

export default MainLayout;

import { App } from "antd";
import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router";

type MessageType = "success" | "error" | "warning" | "info";

export const RouteMessageListener = () => {
  const { message } = App.useApp();
  const location = useLocation();
  const navigate = useNavigate();
  const isMessage = useRef(false);
  useEffect(() => {
    const toast =
      location.state?.message ||
      location.state?.toast ||
      location.state?.content;
    const type = (location.state?.type ?? "success") as MessageType;
    if (!toast) return;

    if (!isMessage.current) {
      message[type](toast);
      isMessage.current = true;
      navigate(location.pathname, {
        replace: true,
        state: {},
      });
    }
  }, []);

  return null;
};

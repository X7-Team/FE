import { EditOutlined, LogoutOutlined, RightOutlined } from "@ant-design/icons";
import { Drawer } from "antd";
import React, { useEffect, useState, type ReactElement } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { navMenu } from "../../../constants/navMenu";
import { useAuthSelector } from "../../../stores/useAuthStore";
import ModalEditProfile from "../../../../components/common/ModalEditProfile";

const NavMenu = ({ children }: { children: ReactElement }) => {
  const [open, setOpen] = useState(false);
  const [openMenus, setOpenMenus] = useState<string>("");
  const location = useLocation();
  const user = useAuthSelector((state) => state.user);
  const { logout } = useAuthSelector((state) => state);
  const nav = useNavigate();
  const toggleMenu = (path: string) => {
    setOpenMenus((prev) => (prev === path ? "" : path));
  };
  useEffect(() => {
    const activeMenu = navMenu(user?.role as string).find((item) =>
      item.children?.some((child) => location.pathname.startsWith(child.path)),
    );

    setOpenMenus(activeMenu?.path ?? "");
  }, [location.pathname, user?.role]);
  return (
    <>
      {React.cloneElement(children, {
        onClick: () => setOpen(true),
      } as { onClick: () => void })}

      <Drawer
        title="Thanh điều hướng"
        open={open}
        onClose={() => setOpen(false)}
      >
        <div className="flex flex-col justify-between h-full">
          <ul className="space-y-2">
            {navMenu(user?.role as string).map((item) => {
              const isOpen = openMenus.includes(item.path);

              return (
                <li key={item.path}>
                  {item.children ? (
                    <>
                      <button
                        type="button"
                        onClick={() => toggleMenu(item.path)}
                        className="flex w-full items-center hover:opacity-75 cursor-pointer justify-between rounded-lg  py-2 "
                      >
                        <Link
                          className={` text-sm ${
                            location.pathname === item.path ||
                            item.children?.some(
                              (child) => child.path === location.pathname,
                            )
                              ? "text-primary!"
                              : "text-white!"
                          }`}
                          to={item.path}
                        >
                          {item.label}
                        </Link>
                        <span
                          className={`transition-transform ${
                            isOpen ? "rotate-90" : ""
                          }`}
                        >
                          <RightOutlined />
                        </span>
                      </button>

                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          isOpen ? "max-h-96 mt-2" : "max-h-0"
                        }`}
                      >
                        <ul className="ml-4 space-y-1  pl-3">
                          {item.children.map((child) => (
                            <li key={child.path}>
                              <Link
                                to={child.path}
                                onClick={() => setOpen(false)}
                                className={`block hover:opacity-75 rounded-lg py-2 text-sm ${
                                  location.pathname === child.path
                                    ? "text-primary!"
                                    : "text-white!"
                                }`}
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={() => setOpen(false)}
                      className={`block rounded-lg hover:opacity-75  py-2 ${
                        location.pathname === item.path
                          ? " text-primary!"
                          : "text-white!"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
          {user ? (
            <div className="mt-4  ">
              <ModalEditProfile setOpenDraw={setOpen}>
                <p
                  className="font-semibold cursor-pointer hover:opacity-75 flex gap-2 items-center"
                  onClick={() => setOpen(false)}
                >
                  {user?.name} <EditOutlined />
                </p>
              </ModalEditProfile>
              <button
                onClick={() => {
                  nav("/");
                  setOpen(false);
                  logout();
                }}
                className="mt-2 flex items-center gap-2 hover:opacity-75 cursor-pointer hover:text-primary duration-300"
              >
                <LogoutOutlined /> Đăng xuất
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <Link
                to={"/auth/login"}
                className="mt-2! flex items-center! gap-2! hover:opacity-75! cursor-pointer! bg-primary! px-2! py-2! rounded-md! duration-300! text-white!"
              >
                Đăng nhập
              </Link>
              <Link
                to={"/auth/request-register"}
                className="mt-2! flex items-center! gap-2! hover:opacity-75! cursor-pointer! bg-bg! px-2! py-2! rounded-md! duration-300! text-white!"
              >
                Đăng ký
              </Link>
            </div>
          )}
        </div>
      </Drawer>
    </>
  );
};

export default NavMenu;

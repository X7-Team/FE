interface INavItem {
  label: string;
  path: string;
  children?: INavItem[];
}
export const navMenu = (role: string) => {
  const nav: INavItem[] = [
    {
      label: "Trang chủ",
      path: "/",
    },
    ...(role === "admin"
      ? [
          {
            label: "Tổng quan hệ thống",
            path: `/${role}/dashboard`,
          },
          {
            label: `Quản lý người dùng`,
            path: `/${role}/user`,
          },
        ]
      : []),
    ...(role === "admin" || role === "staff"
      ? [
          {
            label: "Cấu hình máy",
            path: `/${role}/setup-engine`,
            children: [
              { label: "Thêm cấu hình", path: `/${role}/setup-engine/create` },
            ],
          },
          {
            label: `Quản lý danh sách đồ`,
            path: `/${role}/path`,
            children: [
              {
                label: `Thêm mới`,
                path: `/${role}/path/create`,
              },
            ],
          },
          {
            label: `Công thức`,
            path: `/${role}/calculator/ratio`,
            children: [
              {
                label: `Tỷ số nén`,
                path: `/${role}/calculator/ratio`,
              },
              {
                label: `Kê chân lò xo`,
                path: `/${role}/calculator/spring`,
              },
              {
                label: `Porting val nạp xả`,
                path: `/${role}/calculator/porting`,
              },
            ],
          },
        ]
      : []),
  ];
  return nav;
};

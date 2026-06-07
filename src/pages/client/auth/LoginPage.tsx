import { Checkbox, Form, Input } from "antd";
import { useState } from "react";
import { GoogleOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router";
import { useMutation } from "@tanstack/react-query";
import { loginApi } from "../../../common/services/auth.service";
import type { ILoginPayload } from "../../../common/types/auth";
import { useMessage } from "../../../common/hooks/useMessage";
import { useAuthStore } from "../../../common/stores/useAuthStore";
import { roleNavigate } from "../../../common/constants/roleNavigate";

const LoginPage = () => {
  const [rememberState, setRememberState] = useState(true);
  const { login } = useAuthStore((state) => state);
  const { handleError } = useMessage();
  const nav = useNavigate();
  const { mutate } = useMutation({
    mutationFn: (payload: ILoginPayload) => loginApi(payload),
    onError: (error) => {
      handleError(error);
    },
    onSuccess: (res) => {
      const { accessToken, ...rest } = res.data;
      const role = rest.role;
      nav(roleNavigate[role], {
        state: {
          type: "success",
          toast: res.message,
        },
      });
      login(accessToken, rest);
    },
  });
  const onFinish = (value: any) => {
    mutate({ ...value, remember: rememberState });
  };
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="bg-black rounded-md p-6 text-white w-[90%] lg:w-[40%] xl:w-[30%]">
        <div className="flex items-center justify-center flex-col">
          <img
            src="https://res.cloudinary.com/dpplfiyki/image/upload/v1780587815/logo_x7_k4a6hq.png"
            className="w-42 "
            alt=""
          />
        </div>
        <Form
          onFinish={onFinish}
          name="basic"
          autoComplete="off"
          layout="vertical"
        >
          <Form.Item
            label="Tài khoản Email"
            name="email"
            required
            rules={[
              { required: true, message: "Vui lòng nhập tài khoản email!" },
              { type: "email", message: "Vui lòng nhập đúng định dạng email!" },
            ]}
          >
            <Input
              placeholder="Nhập tài khoản email của bạn"
              className="h-10"
            />
          </Form.Item>
          <Form.Item
            label="Mật khẩu"
            name="password"
            required
            rules={[
              { required: true, message: "Vui lòng nhập mật khẩu!" },
              { min: 6, message: "Mật khẩu cần tối thiểu 6 ký tự" },
            ]}
          >
            <Input.Password
              placeholder="Nhập mật khẩu của bạn"
              className="h-10"
            />
          </Form.Item>
          <Checkbox
            checked={rememberState}
            onChange={() => setRememberState(!rememberState)}
          >
            {" "}
            Ghi nhớ nhớ đăng nhập
          </Checkbox>
          <Form.Item label={null}>
            <button className="bg-primary duration-300 hover:opacity-75 cursor-pointer mt-4 w-full h-10 rounded-md">
              Đăng nhập
            </button>
          </Form.Item>
        </Form>
        <p className="text-center text-white/50 text-xs">Hoặc</p>
        <div className="mt-4">
          <button className="flex m-0! items-center gap-3 justify-center border-white duration-300 hover:border-primary border cursor-pointer mt-4 w-full h-10 rounded-md">
            <GoogleOutlined />
            <span className="text-xs">Đăng nhập bằng google</span>
          </button>
        </div>
        <div className="flex flex-col items-center text-xs gap-1 mt-4">
          <p className="text-xs text-center">Bạn không có tài khoản? </p>
          <Link
            to={"/auth/register-request"}
            className="text-primary! hover:underline"
          >
            Yêu cầu xác nhận tài khoản
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

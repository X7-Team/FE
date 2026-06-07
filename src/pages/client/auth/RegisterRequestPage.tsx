import { useMutation } from "@tanstack/react-query";
import { Form, Input } from "antd";
import { Link, useNavigate } from "react-router";
import type { IRequestRegisterPayload } from "../../../common/types/auth";
import { requestRegisterApi } from "../../../common/services/auth.service";
import { useMessage } from "../../../common/hooks/useMessage";

const RegisterRequestPage = () => {
  const { antdMessage, handleError } = useMessage();
  const nav = useNavigate();
  const { mutate } = useMutation({
    mutationFn: (payload: IRequestRegisterPayload) =>
      requestRegisterApi(payload),
    onError: (error) => {
      handleError(error);
    },
    onSuccess: (res) => {
      antdMessage.success(res.message);
      nav("/auth/login");
    },
  });
  const onFinish = (value: any) => {
    mutate(value);
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
            label="Họ và tên"
            name="name"
            required
            rules={[
              { required: true, message: "Vui lòng nhập họ và tên!" },
              { min: 6, message: "Họ và tên yêu cầu tối thiểu 6 ký tự!" },
              { max: 30, message: "Họ và tên tối đa 30 ký tự!" },
            ]}
          >
            <Input
              placeholder="Nhập tài khoản email của bạn"
              className="h-10"
            />
          </Form.Item>
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
          <Form.Item label={null}>
            <button className="bg-primary duration-300 hover:opacity-75 cursor-pointer mt-4 w-full h-10 rounded-md">
              Gửi yêu cầu
            </button>
          </Form.Item>
        </Form>
        <div className="flex flex-col items-center text-xs gap-1 mt-4">
          <p className="text-xs text-center">Bạn có tài khoản? </p>
          <Link to={"/auth/login"} className="text-primary! hover:underline">
            Đăng nhập tại đây
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterRequestPage;

import { Form, Input, Modal } from "antd";
import React, { useState, type ReactElement } from "react";
import { useAuthSelector } from "../../common/stores/useAuthStore";
import UploadImage from "./UploadImage";

const ModalEditProfile = ({
  children,
  setOpenDraw,
}: {
  children: ReactElement;
  setOpenDraw: (status: boolean) => void;
}) => {
  const [open, setOpen] = useState(false);
  const user = useAuthSelector((state) => state.user);
  return (
    <>
      {React.cloneElement(children, {
        onClick: () => {
          setOpen(true);
          setOpenDraw(false);
        },
      } as { onClick: () => void })}
      <Modal
        onCancel={() => setOpen(false)}
        afterClose={() => setOpenDraw(true)}
        open={open}
        width={600}
        className="rounded-xl border border-white/10  backdrop-blur-md"
        style={{
          background: `hsl(222.2 84% 4.9%)`,
        }}
        title={
          <p className="text-lg font-semibold text-white/90 tracking-wide">
            Chỉnh sửa thông tin
          </p>
        }
        footer={
          <div className="flex gap-2 items-center justify-end">
            <button
              onClick={() => setOpen(false)}
              className="bg-white text-black rounded-md px-2 py-2 hover:opacity-75 duration-300"
            >
              Hủy bỏ
            </button>
            <button className="border border-primary rounded-md px-2 py-2 hover:opacity-75 duration-300">
              Đổi mật khẩu
            </button>
            <button className="bg-primary rounded-md px-2 py-2 hover:opacity-75 duration-300">
              Cập nhật
            </button>
          </div>
        }
      >
        <Form
          layout="vertical"
          initialValues={{
            name: user?.name,
          }}
        >
          <Form.Item
            label="Avatar"
            required
            name={"avatar"}
            valuePropName="value"
            getValueFromEvent={(e) => e}
            rules={[{ required: true, message: "Vui lòng tải ảnh lên!" }]}
          >
            <UploadImage width={100} height={100} />
          </Form.Item>
          <Form.Item
            label="Họ và tên"
            name={"name"}
            required
            rules={[
              { required: true, message: "Vui lòng nhập họ và tên!" },
              { min: 6, message: "Họ và tên yêu cầu tối thiểu 6 ký tự!" },
              { max: 30, message: "Họ và tên tối đa 30 ký tự!" },
            ]}
          >
            <Input placeholder="Nhập họ và tên" className={"h-10"} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default ModalEditProfile;

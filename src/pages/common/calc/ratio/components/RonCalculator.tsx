import { Form, InputNumber } from "antd";
import { useEffect, useState } from "react";

const RonCalculator = () => {
  const [form] = Form.useForm();

  const piston = Form.useWatch("piston", form);
  const widthRon = Form.useWatch("widthRon", form);

  const [miliWater, setMiliWater] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (piston && widthRon) {
        const miliWaterCalc = (piston * piston * 0.785 * widthRon) / 1000;
        setMiliWater(miliWaterCalc);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [piston, widthRon]);

  return (
    <Form form={form} layout="vertical">
      <Form.Item
        name="piston"
        label="Đường kính piston"
        rules={[{ required: true }]}
      >
        <InputNumber
          className="w-full!"
          placeholder="Nhập đường kính piston (mm)"
          controls={false}
          decimalSeparator=","
        />
      </Form.Item>
      <Form.Item
        name="widthRon"
        label="Độ dày của gioăng"
        rules={[{ required: true }]}
      >
        <InputNumber
          className="w-full!"
          placeholder="Nhập độ dày của gioăng (mm)"
          controls={false}
          decimalSeparator=","
        />
      </Form.Item>
      <p className="text-primary/80 mb-4">Kết quả thông số</p>
      <Form.Item label="Mili nước" className="flex-1">
        <p className="border h-8 rounded-md flex items-center px-2 border-white/20">
          {miliWater}
        </p>
      </Form.Item>
    </Form>
  );
};

export default RonCalculator;

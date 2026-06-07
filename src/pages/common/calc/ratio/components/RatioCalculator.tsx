import { Form, InputNumber } from "antd";
import { useEffect, useState } from "react";

const RatioCalculator = () => {
  const [form] = Form.useForm();

  const piston = Form.useWatch("piston", form);
  const stroke = Form.useWatch("stroke", form);
  const chamber = Form.useWatch("chamber", form);

  const [ratio, setRatio] = useState(0);
  const [cubicCapacity, setCubicCapacity] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (piston && stroke) {
        const cubicCapacityCalc = (piston * piston * 0.785 * stroke) / 1000;
        setCubicCapacity(cubicCapacityCalc);
      }
      if (piston && stroke && chamber) {
        const cubicCalc = (piston * piston * 0.785 * stroke) / 1000;
        const ratioCalc = (cubicCalc + chamber) / chamber;
        setRatio(ratioCalc);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [piston, stroke, chamber]);

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
        name="stroke"
        label="Hành trình dên"
        rules={[{ required: true }]}
      >
        <InputNumber
          className="w-full!"
          placeholder="Nhập hành trình dên (mm)"
          controls={false}
          decimalSeparator=","
        />
      </Form.Item>

      <Form.Item
        name="chamber"
        label="Thể tích nước trong buồng đốt (ml)"
        rules={[{ required: true }]}
      >
        <InputNumber
          className="w-full!"
          placeholder="Nhập thể tích nước trong buồng đốt"
          controls={false}
          decimalSeparator=","
        />
      </Form.Item>
      <p className="text-primary/80 mb-4">Kết quả thông số</p>
      <div className="flex items-center justify-between gap-5">
        <Form.Item label="Dung tích xy lanh" className="flex-1">
          <p className="border h-8 rounded-md flex items-center px-2 border-white/20">
            {cubicCapacity.toFixed(3)}
          </p>
        </Form.Item>
        <Form.Item label="Tỷ số nén" className="flex-1">
          <p className="border h-8 rounded-md flex items-center px-2 border-white/20">
            {ratio.toFixed(3)}
          </p>
        </Form.Item>
      </div>
    </Form>
  );
};

export default RatioCalculator;

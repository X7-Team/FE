import { Form, InputNumber } from "antd";
import { useEffect, useState } from "react";
import {
  calculateNormalFourValve,
  calculateTouringFourValve,
} from "../utils/CalculatorFourValve";

const PortingCalculatorFourValve = ({
  valveType,
  portType,
}: {
  valveType: number;
  portType: number;
}) => {
  const [form] = Form.useForm();
  const intakeValue = Form.useWatch("intake", form);
  const exhaustValve = Form.useWatch("exhaust", form);
  const [result, setResult] = useState({
    intakeHole: 0,
    intakeSeat: 0,
    exhaustHole: 0,
    exhaustSeat: 0,
  });
  useEffect(() => {
    const timer = setTimeout(() => {
      if (valveType === 4) {
        if (portType === 3) {
          const result = calculateTouringFourValve(intakeValue, exhaustValve);
          setResult(result);
        }
        if (portType === 2) {
          const result = calculateNormalFourValve(intakeValue, exhaustValve);
          setResult(result);
        }
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [intakeValue, exhaustValve, portType]);
  return (
    <div>
      <Form form={form} layout="vertical">
        <Form.Item name="exhaust" label="Kích thước val xả" required>
          <InputNumber
            className="w-full!"
            placeholder="Nhập kích thước val xả"
            controls={false}
            decimalSeparator=","
          />
        </Form.Item>
        <Form.Item name="intake" label="Kích thước val nạp" required>
          <InputNumber
            className="w-full!"
            placeholder="Nhập kích thước val nạp"
            controls={false}
            decimalSeparator=","
          />
        </Form.Item>
        <p className="text-primary/80 mb-4">Kết quả thông số</p>
        <div className="flex items-center justify-between gap-5">
          <div className="flex-1">
            <Form.Item label="Móc lỗ xả" className="flex-1">
              <p className="border h-8 rounded-md flex items-center px-2 border-white/20">
                {result.exhaustHole || 0}
              </p>
            </Form.Item>
            <Form.Item label="Móc miệng lỗ xả" className="flex-1">
              <p className="border h-8 rounded-md flex items-center px-2 border-white/20">
                {result.exhaustSeat || 0}
              </p>
            </Form.Item>
          </div>
          <div className="flex-1">
            <Form.Item label="Móc lỗ nạp" className="flex-1">
              <p className="border h-8 rounded-md flex items-center px-2 border-white/20">
                {result.intakeHole || 0}
              </p>
            </Form.Item>
            <Form.Item label="Móc miệng lỗ nạp" className="flex-1">
              <p className="border h-8 rounded-md flex items-center px-2 border-white/20">
                {result.intakeSeat || 0}
              </p>
            </Form.Item>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default PortingCalculatorFourValve;

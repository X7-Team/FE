import { Radio } from "antd";
import Container from "../../../../components/common/Container";
import PortingCalculatorFourValve from "./components/PortingCalculatorFourValve";
import { useState } from "react";

const PortingCalculatorPage = () => {
  const [valveType, setValveType] = useState(0);
  const [portType, setPortType] = useState(0);
  return (
    <Container>
      <h2 className="text-2xl font-semibold">Móc hút xả (porting) là gì?</h2>
      <p className="mt-2">
        Móc hút xả (porting) là quá trình sửa đổi lỗ hút và lỗ xả trên đầu bò
        quilat với mục đích chính là tăng lượng khí nạp và xả. Móc hút xả
        (porting) là quá trình quan trọng cần phải thực hiện khi độ, nâng cấp
        công suất động cơ..
      </p>
      <h3 className="mt-2 text-xl font-medium">
        Công cụ lấy thông số móc hút xả (porting)
      </h3>

      <div className="mt-4 space-y-4">
        <div>
          <p className="mb-2 text-sm text-white/70">Loại đầu quy lát</p>
          <Radio.Group
            value={valveType}
            onChange={(e) => setValveType(e.target.value)}
          >
            <Radio value={4}>4 Valve</Radio>
            <Radio value={2}>2 Valve</Radio>
          </Radio.Group>
        </div>

        <div>
          <p className="mb-2 text-sm text-white/70">Kiểu đường hút/xả</p>
          <Radio.Group
            value={portType}
            onChange={(e) => setPortType(e.target.value)}
          >
            <Radio value={1}>Đường ngắn</Radio>
            <Radio value={2}>Đường vừa</Radio>
            <Radio value={3}>Đường dài</Radio>
          </Radio.Group>
        </div>

        <PortingCalculatorFourValve valveType={valveType} portType={portType} />

        <p className="text-white/50">Creating By Lương Chính Quốc.</p>
      </div>
    </Container>
  );
};

export default PortingCalculatorPage;

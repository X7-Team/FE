import Container from "../../../../components/common/Container";
import RatioCalculator from "./components/RatioCalculator";
import RonCalculator from "./components/RonCalculator";

const RatioCalculatorPage = () => {
  return (
    <Container>
      <h2 className="text-2xl font-semibold">1. Tỷ số nén</h2>
      <p className="mt-2">
        Tỉ số nén là một trong những yếu tố quan trọng khi xây dựng, nâng cấp,
        độ động cơ. Tỉ số nén ảnh hưởng đến khả năng hoạt động của động cơ, tỉ
        số nén càng cao thì động cơ hoạt động càng hiệu quả, tuy nhiên phải có
        giới hạn vì những ràng buộc trong thiết kế buồng đốt và quan trọng nhất
        là khả năng chống kích nổ của xăng (chỉ số octan).
      </p>
      <h3 className="mt-2 text-xl font-medium">Công cụ tính tỷ số nén</h3>
      <div className="mt-4">
        <RatioCalculator />
      </div>
      <h3 className="mt-2 text-xl font-medium">Công thức tính gioăng</h3>
      <div className="mt-4">
        <RonCalculator />
      </div>
      <p className="text-white/50 w-full pb-4">Creating By Lương Chính Quốc.</p>
    </Container>
  );
};

export default RatioCalculatorPage;

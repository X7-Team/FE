import { useMessage } from "../../../common/hooks/useMessage";
import { useAuthStore } from "../../../common/stores/useAuthStore";

const HomePage = () => {
  const { logout } = useAuthStore((state) => state);
  const { antdMessage } = useMessage();
  return (
    <div className="bg-bg ">
      <button onClick={() => logout()}>test</button>
      <button onClick={() => antdMessage.success("hihi")}>test</button>
    </div>
  );
};

export default HomePage;

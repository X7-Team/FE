import { MenuOutlined } from "@ant-design/icons";
import { Link } from "react-router";
import NavMenu from "./NavMenu";

const RootHeader = () => {
  return (
    <header className=" sticky top-0 bg-bg z-999">
      <div className="max-w-[1536px] flex items-center justify-between 2xl:mx-auto  mx-4">
        <div>
          <Link to={`/`}>
            <img
              src="https://res.cloudinary.com/dpplfiyki/image/upload/v1780587815/logo_x7_k4a6hq.png"
              className="w-16 md:w-24"
              alt=""
            />
          </Link>
        </div>
        <NavMenu>
          <button className="hover:opacity-75 cursor-pointer text-xl">
            <MenuOutlined />
          </button>
        </NavMenu>
      </div>
    </header>
  );
};

export default RootHeader;

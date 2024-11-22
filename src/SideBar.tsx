import { NavLink } from "react-router-dom";
import logo from "./assets/logo.png";
import { FaUser } from "react-icons/fa";
import { MdSubscriptions } from "react-icons/md";

type SideBarProps = {
  handleCallNav: (data: boolean) => void;
};

const SideBar: React.FC<SideBarProps> = ({ handleCallNav }) => {
  return (
    <div className="p-5 py-16 bg-white sm:border-r min-h-screen h-full flex flex-col gap-5">
      <img src={logo} alt="logo" className="w-16" />
      <div className="w-full">
        <NavLink
          onClick={() => handleCallNav(false)}
          to={"/dashboard"}
          className="w-full text-gray-700 rounded-md p-2 px-3 flex items-center justify-start gap-3"
        >
          <FaUser /> <span className="font-semibold">User</span>
        </NavLink>
        <NavLink
          onClick={() => handleCallNav(false)}
          to={"/recordings"}
          className="w-full text-gray-700 rounded-md p-2 px-3 flex items-center justify-start gap-3"
        >
          <MdSubscriptions /> <span className="font-semibold">Recordings</span>
        </NavLink>
      </div>
    </div>
  );
};

export default SideBar;

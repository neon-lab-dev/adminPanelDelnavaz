import { RxCross2 } from "react-icons/rx";
import SideBar from "../components/Sidebar/SideBar";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";

const DashboardLayout = () => {
    const [CallNav, setCallNav] = useState<boolean>(false);

  const handleCallNav = (data: boolean): void => {
    setCallNav(data);
  };
    return (
        <div className="w-full flex relative bg-gray-100 min-h-screen">
      <div
        className={`w-full ${
          CallNav ? "left-0" : "-left-[100%]"
        } sm:min-w-[240px] absolute sm:static sm:max-w-[245px]`}
      >
        <div
          onClick={() => setCallNav(false)}
          className="p-2 border sm:hidden rounded-md absolute top-2 right-2"
        >
          <RxCross2 />
        </div>
        <SideBar handleCallNav={handleCallNav} />
      </div>
      <div className="w-full">
        <Navbar/>
        <Outlet />
      </div>
    </div>
    );
};

export default DashboardLayout;
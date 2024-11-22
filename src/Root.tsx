import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaChevronDown } from "react-icons/fa";

export default function Root() {
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
        <div className="h-[64px] flex justify-between items-center p-2 px-5 bg-white">
          <div
            onClick={() => setCallNav(true)}
            className="p-2 rounded-md border sm:border-0 sm:p-0"
          >
            <span></span>
            <GiHamburgerMenu className="sm:hidden" />
          </div>
          <div className="rounded-md w-[190px] border p-1 h-[44px] flex justify-between gap-3 items-center px-2">
            <div className="flex cursor-pointer gap-2 justify-center items-center">
              <div className="rounded-full text-[13px] bg-gray-200 w-[32px] h-[32px] font-semibold flex justify-center items-center">
                SA
              </div>
              <h3 className="font-medium text-[13px] text-gray-800">
                Salman Ahmed
              </h3>
            </div>
            <FaChevronDown />
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
}

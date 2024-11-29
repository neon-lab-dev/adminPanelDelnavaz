import { useState, useRef, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="h-[64px] flex justify-between items-center p-2 px-5 bg-white relative">
      {/* Dropdown menu container */}
      <div
        ref={dropdownRef}
        className="relative rounded-md w-[190px] border p-1 h-[44px] flex justify-between gap-3 items-center px-2 cursor-pointer ml-auto"
        onClick={() => setIsDropdownOpen((prev) => !prev)}
      >
        <div className="flex gap-2 justify-center items-center">
          <div className="rounded-full text-[13px] bg-gray-200 w-[32px] h-[32px] font-semibold flex justify-center items-center">
            SA
          </div>
          <h3 className="font-medium text-[13px] text-gray-800">
            Salman Ahmed
          </h3>
        </div>
        <FaChevronDown />

        {/* Dropdown menu */}
        {isDropdownOpen && (
          <div className="absolute top-[110%] right-0 w-[180px] bg-white shadow-lg rounded-md border mt-1">
            <ul className="text-[14px] text-gray-700">
              <li className="p-2 hover:bg-gray-100 cursor-pointer">
                Profile
              </li>
              <li className="p-2 hover:bg-gray-100 cursor-pointer">
                Settings
              </li>
              <li className="p-2 hover:bg-gray-100 cursor-pointer">
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

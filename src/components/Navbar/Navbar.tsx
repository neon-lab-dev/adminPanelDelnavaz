import { useState, useRef, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';

type TUser = {
  name : string;
  email : string;
  _id : string;
}
const Navbar = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [user, setUser] = useState<TUser | null>(null);
  const [initials, setInitials] = useState<string>("");

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      const parsedUser = JSON.parse(userData);
      setUser(parsedUser);

      // Extract initials into a variable
      const extractedInitials = (() => {
        const name = parsedUser?.name || "";
        const nameParts = name.split(" ");
        return nameParts.length > 1
          ? nameParts[0][0] + nameParts[1][0]
          : nameParts[0]?.[0] || "";
      })();

      setInitials(extractedInitials.toUpperCase());
    }
  }, []);

  const handleLogout = () => {
    Cookies.remove("authToken");
    localStorage.removeItem("user");
    navigate("/");
    window.location.reload();
  }

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
            {initials}
          </div>
          <h3 className="font-medium text-[13px] text-gray-800">
            {user?.name}
          </h3>
        </div>
        <FaChevronDown />

        {/* Dropdown menu */}
        {isDropdownOpen && (
          <div className="absolute top-[110%] right-0 w-[180px] bg-white shadow-lg rounded-md border mt-1">
            <ul className="text-[14px] text-gray-700 flex flex-col p-1">
              <Link to={"/dashboard/users"} className="p-2 hover:bg-gray-100 cursor-pointer">
                Users
              </Link>
              <Link to={"/dashboard/recordings"} className="p-2 hover:bg-gray-100 cursor-pointer">
                Recordings
              </Link>
              <button onClick={handleLogout} className="p-2 hover:bg-gray-100 cursor-pointer text-start">
                Logout
              </button>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

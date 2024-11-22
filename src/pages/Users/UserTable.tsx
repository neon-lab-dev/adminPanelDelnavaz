import React from "react";
import { FaCheckCircle, FaTimesCircle, FaEllipsisH } from "react-icons/fa";

type UserData = {
  username: string;
  email: string;
  phoneNumber: string;
  isActive: boolean;
};

const UserTable: React.FC = () => {
  const data: UserData[] = [
    {
      username: "Salmaan Ahmed",
      email: "salmenbhoi@gmail.com",
      phoneNumber: "+91 91234 56789",
      isActive: true,
    },
    {
      username: "Salmaan Ahmed",
      email: "salmenbhoi@gmail.com",
      phoneNumber: "+91 91234 56789",
      isActive: false,
    },
    {
      username: "Salmaan Ahmed",
      email: "salmenbhoi@gmail.com",
      phoneNumber: "+91 91234 56789",
      isActive: false,
    },
    {
      username: "Salmaan Ahmed",
      email: "salmenbhoi@gmail.com",
      phoneNumber: "+91 91234 56789",
      isActive: true,
    },
    {
      username: "Salmaan Ahmed",
      email: "salmenbhoi@gmail.com",
      phoneNumber: "+91 91234 56789",
      isActive: true,
    },
    {
      username: "Salmaan Ahmed",
      email: "salmenbhoi@gmail.com",
      phoneNumber: "+91 91234 56789",
      isActive: true,
    },
  ];

  return (
    <div className="w-full  mx-auto bg-gray-100 overflow-auto">
      <table className="w-full border-collapse bg-white rounded-lg ">
        <thead>
          <tr className="bg-gray-200 text-gray-700 text-left">
            <th className="p-3 font-semibold">Username</th>
            <th className="p-3 font-semibold">Email</th>
            <th className="p-3 font-semibold">Phone Number</th>
            <th className="p-3 font-semibold">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, index) => (
            <tr key={index} className="border-b last:border-none">
              <td className="p-3 text-gray-700">{user.username}</td>
              <td className="p-3 text-gray-700">{user.email}</td>
              <td className="p-3 text-gray-700">{user.phoneNumber}</td>
              <td className="p-3 flex items-center gap-3">
                {user.isActive ? (
                  <FaCheckCircle className="text-green-500" />
                ) : (
                  <FaEllipsisH className="text-gray-500" />
                )}
                <FaTimesCircle className="text-red-500" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;

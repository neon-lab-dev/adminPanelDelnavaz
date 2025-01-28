/* eslint-disable @typescript-eslint/no-explicit-any */

// import { FaCheckCircle, FaTimesCircle, FaEllipsisH } from "react-icons/fa";


// type UserData = {
//   username: string;
//   email: string;
//   phoneNumber: string;
//   isActive: boolean;
// };

type TUserTable = {
  data : any;
  loading : boolean;
  error : string | null;
}

const UserTable: React.FC<TUserTable> = ({data, loading, error}) => {
  console.log(data);
  
  if (loading) {
    return <div className="text-center py-5">Loading users...</div>;
  }

  if (error) {
    return <div className="text-center py-5 text-red-500">{error}</div>;
  }

  return (
    <div className="w-full  mx-auto bg-gray-100 overflow-auto">
      <table className="w-full border-collapse bg-white rounded-lg ">
        <thead>
          <tr className="bg-gray-200 text-gray-700 text-left">
            <th className="p-3 font-semibold">User ID</th>
            <th className="p-3 font-semibold">Username</th>
            <th className="p-3 font-semibold">Email</th>
            <th className="p-3 font-semibold">Phone Number</th>
            {/* <th className="p-3 font-semibold">Action</th> */}
          </tr>
        </thead>
        <tbody>
          {data?.map((user:any, index:number) => (
            <tr key={index} className="border-b last:border-none text-gray-700">
              <td className="p-3 capitalize">{user?._id}</td>
              <td className="p-3 capitalize">{user?.name}</td>
              <td className="p-3 ">{user?.email}</td>
              <td className="p-3 ">{user?.phone}</td>
              {/* <td className="p-3 flex items-center gap-3">
                {user.isActive ? (
                  <FaCheckCircle className="text-green-500" />
                ) : (
                  <FaEllipsisH className="text-gray-500" />
                )}
                <FaTimesCircle className="text-red-500" />
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;

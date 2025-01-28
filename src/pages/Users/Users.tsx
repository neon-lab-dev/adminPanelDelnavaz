/* eslint-disable @typescript-eslint/no-explicit-any */
import UserCards from "./UserCards";
import UserTable from "./UserTable";
import Cookies from "js-cookie";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Users() {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch data from API
  useEffect(() => {
    const fetchUsers = async () => {
      const token = Cookies.get("authToken");
      try {
        const response = await axios.get(
          "https://podcast-backend-snowy.vercel.app/api/v1/auth/admin/getusers",
          {
            headers: {
              Authorization: `Bearer ${token}`
            },
            withCredentials: true,
          }
        );
        setData(response.data);
        setLoading(false);
      } catch (err: any) {
        setError(err.response?.data?.message || "Failed to fetch users.");
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="p-5 flex flex-col gap-8">
      <UserCards
        cardData={
          [
            {
              name: "Total Users",
              quantity: data?.data?.length || 0
            }
          ]
        }
      />
      <UserTable data={data?.data} loading={loading} error={error} />
    </div>
  );
}

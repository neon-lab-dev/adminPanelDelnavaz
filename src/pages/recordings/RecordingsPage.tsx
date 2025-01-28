/* eslint-disable @typescript-eslint/no-explicit-any */
import RecordingsCards from "./RecordingsCards";
import RecordingTable from "./RecordingTable";
import Cookies from "js-cookie";
import axios from "axios";
import { useEffect, useState } from "react";


const RecordingsPage = () => {
  const [data, setData] = useState<any>([]);
  console.log(data);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch data from API
  useEffect(() => {
    const fetchUsers = async () => {
      const token = Cookies.get("authToken");
      try {
        const response = await axios.get(
          "https://podcast-backend-snowy.vercel.app/api/v1/podcast",
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
      <RecordingsCards
        cardData={
          [
            {
              name: "Total Recordings",
              quantity: data?.data?.length || 0
            }
          ]
        }
      />
      <RecordingTable data={data?.data} loading={loading} error={error} />
    </div>
  );
};

export default RecordingsPage;

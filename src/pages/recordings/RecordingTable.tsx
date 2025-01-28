/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { FaEllipsisH } from "react-icons/fa";
import Modal from "../../components/Reusable/Modal/Modal";
import EditRecording from "./EditRecording";
import ViewRecording from "./ViewRecording";
import Cookies from 'js-cookie';
import axios from "axios";
import toast from "react-hot-toast";

type TRecordingTable = {
  data: any;
  loading: boolean;
  error: string | null;
};

const RecordingTable: React.FC<TRecordingTable> = ({ data, loading, error }) => {
  const [openEditRecordingModal, setOpenEditRecordingModal] = useState(false);
  const [openViewRecordingModal, setOpenViewRecordingModal] = useState(false);
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const [selectedRecording, setSelectedRecording] = useState<any>(null);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const toggleMenu = (index: number) => {
    setActiveMenu(activeMenu === index ? null : index);
  };

  const closeMenu = () => {
    setActiveMenu(null);
  };

  const handleViewRecording = (recording: any) => {
    setSelectedRecording(recording);
    setOpenViewRecordingModal(true);
  };

  const handleEditRecording = (recording: any) => {
    setSelectedRecording(recording);
    setOpenEditRecordingModal(true);
  };

  const handleDeletePodcast = async (_id : string) => {
    setIsDeleting(true);
    const token = Cookies.get("authToken");
    try {
      const response = await axios.delete(
        `https://podcast-backend-snowy.vercel.app/api/v1/podcast/${_id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          },
          withCredentials: true,
        }
      );
      if(response?.data?.status === 200){
        toast.success(response?.data?.message);
        window.location.reload();
      }
      setIsDeleting(false);
    } catch (err: any) {
      console.log(err);
      setIsDeleting(false);
    }
  };

  if (loading) {
    return <div className="text-center py-5">Loading recordings...</div>;
  }

  if (error) {
    return <div className="text-center py-5 text-red-500">{error}</div>;
  }

  return (
    <div className="w-full mx-auto bg-gray-100 overflow-auto">
      <table className="w-full border-collapse bg-white rounded-lg">
        <thead>
          <tr className="bg-gray-200 text-gray-700 text-left">
            <th className="p-3 font-semibold">Name of the Recording</th>
            <th className="p-3 font-semibold">Description</th>
            <th className="p-3 font-semibold">Category</th>
            <th className="p-3 font-semibold">Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((recording: any, index: number) => (
            <tr key={recording._id} className="border-b last:border-none relative">
              <td className="p-3 text-gray-700">{recording.name}</td>
              <td className="p-3 text-gray-700">{recording.description}</td>
              <td className="p-3 text-gray-700">{recording.category}</td>
              <td className="p-3 text-gray-700">
                <div className="relative">
                  <FaEllipsisH
                    className="text-gray-500 cursor-pointer"
                    onClick={() => toggleMenu(index)}
                  />
                  {activeMenu === index && (
                    <div
                      className="absolute right-0 mt-2 w-32 bg-white border rounded-lg shadow-lg z-10"
                      onBlur={closeMenu}
                    >
                      <ul>
                        <li
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                          onClick={() => handleViewRecording(recording)}
                        >
                          View
                        </li>
                        <li
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                          onClick={() => handleEditRecording(recording)}
                        >
                          Edit
                        </li>
                        <li
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-600"
                          onClick={() => handleDeletePodcast(recording?._id)}
                        >
                          {
                            isDeleting? "Deleting..." : "Delete"
                          }
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Edit recordings modal */}
      <Modal
        openModal={openEditRecordingModal}
        setOpenModal={setOpenEditRecordingModal}
        title={"Edit Recording"}
      >
        <EditRecording recording={selectedRecording} setOpenModal={setOpenEditRecordingModal} />
      </Modal>

      {/* View recording modal */}
      <Modal
        openModal={openViewRecordingModal}
        setOpenModal={setOpenViewRecordingModal}
      >
        <ViewRecording recording={selectedRecording} setOpenViewModal={setOpenViewRecordingModal} setOpenModal={setOpenEditRecordingModal} />
      </Modal>

      {/* Close the menu if you click outside */}
      {activeMenu !== null && (
        <div className="fixed inset-0 z-0" onClick={closeMenu}></div>
      )}
    </div>
  );
};

export default RecordingTable;

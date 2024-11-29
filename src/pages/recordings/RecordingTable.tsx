import { useState } from "react";
import { FaEllipsisH } from "react-icons/fa";
import Modal from "../../components/Reusable/Modal/Modal";
import EditRecording from "./EditRecording";
import ViewRecording from "./ViewRecording";

type RecordingData = {
  name: string;
  description: string;
  category: string;
};

const RecordingTable: React.FC = () => {
  const [openEditRecordingModal, setOpenEditRecordinModal] = useState(false);
  const [openViewRecordingModal, setOpenViewRecordinModal] = useState(false);
  const [activeMenu, setActiveMenu] = useState<number | null>(null);

  const data: RecordingData[] = [
    {
      name: "How did NASA send person to Space",
      description: "Lorem ipsum dolor sit amet consectetur. Dict...",
      category: "History",
    },
    {
      name: "How did NASA send person to Space",
      description: "Lorem ipsum dolor sit amet consectetur. Dict...",
      category: "History",
    },
    {
      name: "How did NASA send person to Space",
      description: "Lorem ipsum dolor sit amet consectetur. Dict...",
      category: "History",
    },
    {
      name: "How did NASA send person to Space",
      description: "Lorem ipsum dolor sit amet consectetur. Dict...",
      category: "History",
    },
    {
      name: "How did NASA send person to Space",
      description: "Lorem ipsum dolor sit amet consectetur. Dict...",
      category: "History",
    },
  ];

  const toggleMenu = (index: number) => {
    setActiveMenu(activeMenu === index ? null : index);
  };

  const closeMenu = () => {
    setActiveMenu(null);
  };

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
          {data.map((recording, index) => (
            <tr key={index} className="border-b last:border-none relative">
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
                          onClick={() => setOpenViewRecordinModal(true)}
                        >
                          View
                        </li>
                        <li
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                          onClick={() => setOpenEditRecordinModal(true)}
                        >
                          Edit
                        </li>
                        <li
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-600"
                          onClick={() => alert("Delete option clicked")}
                        >
                          Delete
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>

        <Modal openModal={openEditRecordingModal} setOpenModal={setOpenEditRecordinModal} title={"Edit Recording"}>
         <EditRecording/>
        </Modal>

        {/* View recording modal */}
        <Modal openModal={openViewRecordingModal} setOpenModal={setOpenViewRecordinModal}>
         <ViewRecording/>
        </Modal>
      </table>
      {/* Close the menu if you click outside */}
      {activeMenu !== null && (
        <div className="fixed inset-0 z-0" onClick={closeMenu}></div>
      )}
    </div>
  );
};

export default RecordingTable;

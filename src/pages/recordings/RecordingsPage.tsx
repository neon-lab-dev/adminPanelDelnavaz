import RecordingsCards from "./RecordingsCards";
import RecordingTable from "./RecordingTable";


const RecordingsPage = () => {
  return (
    <div className="p-5 flex flex-col gap-8">
      <RecordingsCards />
      <RecordingTable />
    </div>
  );
};

export default RecordingsPage;

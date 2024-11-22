import RecordingsCards from "./RecordingsCards";
import RecordingTable from "./RecordingTable";

export default function Recordings() {
  return (
    <div className="p-5 flex flex-col gap-8">
      <RecordingsCards />
      <RecordingTable />
    </div>
  );
}

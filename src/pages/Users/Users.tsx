import UserCards from "./UserCards";
import UserTable from "./UserTable";

export default function Users() {
  return (
    <div className="p-5 flex flex-col gap-8">
      <UserCards />
      <UserTable />
    </div>
  );
}

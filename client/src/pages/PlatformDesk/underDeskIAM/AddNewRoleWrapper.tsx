import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AddNewRoleorEdit } from "@/pages/PlatformDesk/underDeskIAM/AddNewRoleorEdit";
import { useSearchParams } from "react-router-dom";

// Mock staff data
const staffMock = [
  {
    id: "U001",
    name: "Annudeep Kaur",
    avatar: "/avatars/1.jpg",
  },
  {
    id: "U002",
    name: "Rajeev Singh Sisodiya",
    avatar: "/avatars/2.jpg",
  },
  {
    id: "U003",
    name: "Tushar Sharma",
    avatar: "/avatars/3.jpg",
  },
  {
    id: "U004",
    name: "Yuvraj Singh",
    avatar: "/avatars/4.jpg",
  },
];

export function AddNewRoleWrapper() {
  const [searchParams] = useSearchParams();
  const showStaffBox = searchParams.get("withStaff") === "true";

  return (
    <div className="flex flex-col xl:flex-row w-full gap-4">
      <div className="w-full xl:w-1/2">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-semibold text-[var(--text-head)]">
            Add New Role
          </h1>
          <Button variant="brand" size="sm">
            New Role
          </Button>
        </div>
        <AddNewRoleorEdit />
      </div>

      {showStaffBox && (
        <div className="w-full xl:w-1/2 ">
          <StaffListBox />
        </div>
      )}
    </div>
  );
}

function StaffListBox() {
  const [search, setSearch] = useState("");
  const filteredStaff = staffMock.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-semibold text-xl text-[var(--text-head)]">
          Staff members using this role
        </h3>
      </div>

      <div className="rounded-sm bg-[var(--background)] p-4 shadow-none">
        <Input
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="mb-3 text-sm"
        />

        <ul className="divide-y">
          {filteredStaff.map((user) => (
            <li key={user.id} className="flex items-center py-2 gap-2">
              <img
                src={user.avatar || "/placeholder.png"}
                alt={user.name}
                className="h-8 w-8 rounded-full object-cover"
              />
              <span className="text-sm text-[var(--text)]">{user.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

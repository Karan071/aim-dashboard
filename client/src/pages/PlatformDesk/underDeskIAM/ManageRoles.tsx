import { useState } from "react";
import { Eye, Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface Role {
  id: string;
  name: string;
  department: string;
  totalUsers: number;
}

const rolesData: Role[] = [
  { id: "1", name: "Admin", department: "Admin", totalUsers: 4 },
  { id: "2", name: "HOD", department: "Digital", totalUsers: 2 },
  { id: "3", name: "DevOps Executive", department: "Relations", totalUsers: 13 },
  { id: "4", name: "Executive", department: "Finance", totalUsers: 1 },
  { id: "5", name: "Executive", department: "DevOps", totalUsers: 4 },
  { id: "6", name: "Team Lead", department: "Relations", totalUsers: 2 },
  { id: "7", name: "Manager", department: "Relations", totalUsers: 2 },
];

type SortField = "name" | "department" | null;
type SortOrder = "asc" | "desc";

export function ManageRoles() {
  const [sortField, setSortField] = useState<SortField>(null);
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");
  const navigate = useNavigate();
  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  };

  const sortedRoles = [...rolesData].sort((a, b) => {
    if (!sortField) return 0;
    const valA = a[sortField].toLowerCase();
    const valB = b[sortField].toLowerCase();
    if (valA < valB) return sortOrder === "asc" ? -1 : 1;
    if (valA > valB) return sortOrder === "asc" ? 1 : -1;
    return 0;
  });

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
      <Button variant="brand" onClick={() => navigate("addNewRole")}>+ Add New Role</Button>
      </div>

      {/* Table */}
      <div className="bg-[var(--background)] w-2/3 rounded-md shadow-none overflow-hidden border">
        <div className="grid grid-cols-12 font-semibold text-sm text-[var(--text-head)] bg-[var(--faded)] px-4 py-3 border-b">
          <div
            className="col-span-5 flex items-center gap-2 cursor-pointer select-none"
            onClick={() => handleSort("name")}
          >
            Role Name
            {sortField === "name" && (
              <span className="text-xs">
                {sortOrder === "asc" ? "▲" : "▼"}
              </span>
            )}
          </div>
          <div
            className="col-span-5 flex items-center gap-2 cursor-pointer select-none"
            onClick={() => handleSort("department")}
          >
            Department
            {sortField === "department" && (
              <span className="text-xs">
                {sortOrder === "asc" ? "▲" : "▼"}
              </span>
            )}
          </div>
          <div className="col-span-2 text-center">Options</div>
        </div>

        {sortedRoles.map((role) => (
          <div
            key={role.id}
            className="grid grid-cols-12 text-[var(--text)] items-center px-4 py-3 text-sm border-b hover:bg-[var(--brand-color2)]"
          >
            <div className="col-span-5">
              <div className="font-medium">{role.name}</div>
              <div className="text-xs">Total Users: {role.totalUsers}</div>
            </div>
            <div className="col-span-5">
              <div>{role.department}</div>
            </div>
            <div className="col-span-2 flex justify-center gap-3">
              <Button variant="noborder">
                <Eye size={16} />
              </Button>
              <Button variant="noborder" onClick={() => navigate("addNewRole")}>
                <Pencil size={16} />
              </Button>
              <Button variant="noborder" className="text-[var(--red)]">
                <Trash2 size={16} />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

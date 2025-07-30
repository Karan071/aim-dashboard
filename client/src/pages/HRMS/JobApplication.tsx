import { Clock, Search, Plus, FileUp, Calendar } from "lucide-react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import {
  ChevronDown,
  Filter,
  ChevronRight,
  ChevronLeft,
  PenSquare,
  Pin,
  Bell,
  FileDown,
  Eye,
  Pen,
  X,
  Users,
  FileCheck2,
  FileText,
  CheckCircle2,
  CircleArrowUp,
  CircleArrowDown,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { jobApplicationTable } from "@/data/Data";
import * as React from "react";
import { cn } from "@/lib/utils";
import { useEffect } from "react";
import RadioButton from "@/components/ui/Radiobutton";

const color = "text-[var(--text)]";
const color2 = "text-[var(--text-head)]";
const Up = <CircleArrowUp className="text-[var(--green)] h-4" />;
const Down = <CircleArrowDown className="text-[var(--red)] h-4" />;
const Stats = [
  {
    title: "Total",
    value: "240",
    icon: Users,
    performance: Up,
  },
  {
    title: "New",
    value: "18",
    icon: FileCheck2,
    performance: Down,
  },
  {
    title: "Approved",
    value: "112",
    icon: FileText,
    performance: Up,
  },
  {
    title: "Rejected",
    value: "47",
    icon: Clock,
    performance: Up,
  },
  {
    title: "Pending",
    value: "63",
    icon: CheckCircle2,
    performance: Up,
  },
];

export function JobApplication() {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-2xl font-bold text-[var(--text-head)]">
        Job Application{" "}
      </h1>
      <StatCard />
      <Buttonbar />
      <TableSection />
    </div>
  );
}

function Buttonbar() {
  const [showFilter, setShowFilter] = useState(false);
  return (
    <div className="flex justify-between px-4 py-3 bg-[var(--background)] rounded-sm gap-4 border flex-wrap shadow-none">
      <Button variant="brand" size="new">
        <Plus className="h-3 w-3" />
        <span className=""> Create Application</span>
      </Button>
      <div className="flex gap-4 flex-wrap">
        <Button variant="standard" size="new">
          <FileUp className="h-3 w-3" />
          <span className="">Import (CSV)</span>
        </Button>
        <Button variant="standard" size="new">
          <Calendar className="h-3 w-3" />
          <span className="">Date Filter</span>
        </Button>
        <Button
          variant="standard"
          size="new"
          onClick={() => setShowFilter(true)}
        >
          <Filter className="h-4 w-4" />
          {showFilter ? "Hide Filters" : "Show Filters"}
        </Button>

        {showFilter && <AssessFilter onClose={() => setShowFilter(false)} />}
      </div>
    </div>
  );
}

interface FilterProps {
  onClose: () => void;
}

function AssessFilter({ onClose }: FilterProps) {
  const modalRef = React.useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState("Application Status");

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (modalRef.current && modalRef.current.contains(e.target as Node)) {
        return;
      }
      const target = e.target as HTMLElement;
      if (target.closest("[data-radix-popper-content-wrapper]")) {
        return;
      }
      onClose();
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  const [applicationStatus, setApplicationStatus] = useState("All");
  const [applicationType, setApplicationType] = useState("Full Time");

  const tabList = ["Application Status", "Application Type"];

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex justify-center items-center p-4">
      <div
        ref={modalRef}
        className="relative w-full max-w-[700px] h-[500px] rounded-sm bg-[var(--background)] "
      >
        <div className="flex items-center justify-between mb-0 pb-4 p-6 min-w-full border-b-1">
          <CardTitle className="text-2xl font-semibold text-[var(--text-head)]">
            Filters
          </CardTitle>
          <Button
            variant="link"
            className="text-sm text-[var(--brand-color)] p-0 h-auto block hover:no-underline hover:cursor-pointer"
          >
            Clear All
          </Button>
        </div>
        <div className="flex ">
          <div className="overflow-y-auto min-w-[180px] border-r-1 h-[360px]">
            <div className="flex flex-col ">
              {tabList.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`text-left text-sm px-3 py-3 border-l-3  ${
                    activeTab === tab
                      ? "bg-[var(--brand-color3)] text-[var(--brand-color)] border-[var(--brand-color)]"
                      : "text-[var(--text)] hover:bg-[var(--faded)] border-transparent"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="p-6 overflow-y-auto relative w-full">
            {activeTab === "Application Status" && (
              <>
                <p className="text-sm text-[var(--text-head)] mb-4">
                  Select the Application Status:
                </p>
                <div className="flex flex-col gap-4 text-[var(--text)] ">
                  {["All", "New", "Approved", "Rejected", "Pending"].map(
                    (option) => (
                      <RadioButton
                        key={option}
                        label={option}
                        value={option}
                        selected={applicationStatus}
                        onChange={setApplicationStatus}
                      />
                    )
                  )}
                </div>
              </>
            )}

            {activeTab === "Application Type" && (
              <>
                <p className="text-sm text-[var(--text-head)] mb-4">
                  Select the Application Type :
                </p>
                <div className="flex flex-col gap-4 text-[var(--text)] ">
                  {["Full Time", "Part Time", "Internship", "Freelance"].map(
                    (option) => (
                      <RadioButton
                        key={option}
                        label={option}
                        value={option}
                        selected={applicationType}
                        onChange={setApplicationType}
                      />
                    )
                  )}
                </div>
              </>
            )}
          </div>
        </div>
        <div className="relative bottom-0 right-0 w-full px-6 py-4 flex border-t-1 justify-end gap-2">
          <div className="flex gap-4 absolute left-[50%] -translate-x-[50%]">
            <Button variant="border" onClick={onClose}>
              Cancel
            </Button>
            <Button variant="brand" onClick={onClose}>
              Apply Filters
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard() {
  return (
    <div className="grid gap-2 md:grid-cols-2 xl:grid-cols-5">
      {Stats.map((stat, index) => (
        <Card
          key={index}
          className="rounded-sm shadow-none bg-[var(--background)]"
        >
          <CardHeader className="flex-col items-center px-4 gap-4 py-0 h-full">
            <div className="flex justify-between h-full items-center">
              <div
                className={`${color} text-xs uppercase text-light line-clamp-1`}
              >
                {stat.title}
              </div>
              {stat.performance}
            </div>
            <div className="flex  items-center gap-4">
              <div className={`rounded-full `}>
                <stat.icon className={`h-8 w-8 ${color2}`} />
              </div>
              <div className={`${color2} text-2xl`}>{stat.value}</div>
            </div>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
}

const statusTabs = [{ label: "All Applications", value: "all" }];

export function TableSection() {
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(10);
  const [sortConfig, setSortConfig] = useState<{
    key: keyof (typeof jobApplicationTable)[0];
    direction: "ascending" | "descending";
  } | null>(null);
  const [filterStatus, setFilterStatus] = useState("all");

  const filteredData = jobApplicationTable.filter((item) =>
    filterStatus === "all" ? true : item.status === filterStatus
  );

  const sortedData = [...filteredData];
  if (sortConfig !== null) {
    sortedData.sort((a, b) => {
      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];
      if (!aValue || !bValue) return 0;
      if (aValue < bValue) return sortConfig.direction === "ascending" ? -1 : 1;
      if (aValue > bValue) return sortConfig.direction === "ascending" ? 1 : -1;
      return 0;
    });
  }

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = sortedData.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );
  const totalPages = Math.ceil(sortedData.length / recordsPerPage);

  const requestSort = (key: keyof (typeof jobApplicationTable)[0]) => {
    let direction: "ascending" | "descending" = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const toggleSelectAll = () => {
    if (selectedUsers.length === currentRecords.length) {
      setSelectedUsers([]);
    } else {
      const validIds = currentRecords
        .map((user) => user.applicationId)
        .filter((id): id is string => id !== undefined);
      setSelectedUsers(validIds);
    }
  };

  const toggleSelectUser = (userId: string) => {
    setSelectedUsers((prev) =>
      prev.includes(userId)
        ? prev.filter((id) => id !== userId)
        : [...prev, userId]
    );
  };

  return (
    <div className="flex flex-col w-full">
      {/* Filter Tabs */}
      <div className="flex  text-sm font-medium ">
        {statusTabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => {
              setFilterStatus(tab.value);
              setCurrentPage(1);
            }}
            className={cn(
              "px-4 py-2 rounded-t-sm border",
              filterStatus === tab.value
                ? "text-white bg-[var(--brand-color)]"
                : "text-[var(--text)] bg-[var(--background)]"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Table Wrapper */}
      <div className="flex flex-row gap-4 w-full h-max xl:flex-nowrap flex-wrap">
        <div className="flex-1 rounded-md rounded-tl-none border bg-[var(--background)] overflow-x-auto xl:min-w-auto min-w-full">
          <div className="flex items-center justify-between border-b  h-20 p-4 mt-auto">
            <div className="flex items-center justify-between pl-0 p-4  gap-2">
              <div className="flex items-center gap-2 border-none shadow-none">
                <Checkbox
                  id="select-all"
                  checked={
                    selectedUsers.length === currentRecords.length &&
                    currentRecords.length > 0
                  }
                  onCheckedChange={toggleSelectAll}
                />
                <label
                  htmlFor="select-all"
                  className="text-sm font-medium text-[var(--text)]"
                >
                  Select All
                </label>
                {selectedUsers.length > 0 && (
                  <Badge variant="border" className="ml-2 ">
                    {selectedUsers.length} selected
                  </Badge>
                )}
              </div>

              {selectedUsers.length > 0 && (
                <div className="flex gap-2">
                  <Button variant="border" size="sm">
                    <PenSquare className="h-4 w-4" />
                    Change status
                  </Button>
                  <Button variant="border" size="sm">
                    <Eye className=" h-4 w-4" />
                    View applicants
                  </Button>
                  <Button variant="border" size="sm">
                    <FileDown className=" h-4 w-4 " />
                    Export
                  </Button>
                  <Button variant="border" size="sm">
                    <Pin className=" h-4 w-4 " />
                    Feature
                  </Button>
                  <Button variant="delete" size="sm">
                    <Bell className=" h-4 w-4 " />
                    Send follow-up
                  </Button>
                </div>
              )}
            </div>
            <div className="flex justify-end items-center gap-4 ">
              <div className="flex justify-around items-center border-1 rounded-sm overflow-hidden bg-[var(--faded)]">
                <Input
                  placeholder="Search"
                  className="border-none focus:ring-0 focus-visible:ring-0 focus:outline-none px-2 py-1 w-40 sm:w-45"
                />
                <Button
                  type="submit"
                  size="icon"
                  variant="standard"
                  className="rounded-none rounded-r-md bg-[var(--button)]"
                  aria-label="Search"
                >
                  <Search className="h-5 w-5 text-[var(--text)]" />
                </Button>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto text-[var(--text)] w-full px-0 mx-0 text-low">
            <Table className="w-full caption-top border-collapse overflow-y-visible">
              <TableHeader className="bg-[var(--faded)] hover:bg-[var(--faded)] dark:bg-[var(--faded)] opacity-100">
                <TableRow>
                  <TableHead className="min-w-[40px]"></TableHead>
                  <TableHead
                    onClick={() => requestSort("applicationId")}
                    className="cursor-pointer text-[var(--text)] text-low"
                  >
                    Application ID{" "}
                    {sortConfig?.key === "applicationId" &&
                      (sortConfig.direction === "ascending" ? "↑" : "↓")}
                  </TableHead>
                  <TableHead
                    onClick={() => requestSort("name")}
                    className="cursor-pointer text-[var(--text)]"
                  >
                    Name{" "}
                    {sortConfig?.key === "name" &&
                      (sortConfig.direction === "ascending" ? "↑" : "↓")}
                  </TableHead>
                  <TableHead
                    onClick={() => requestSort("lastCompany")}
                    className="cursor-pointer text-[var(--text)]"
                  >
                    Last Company{" "}
                    {sortConfig?.key === "lastCompany" &&
                      (sortConfig.direction === "ascending" ? "↑" : "↓")}
                  </TableHead>
                  <TableHead
                    onClick={() => requestSort("role")}
                    className="cursor-pointer text-[var(--text)]"
                  >
                    Role{" "}
                    {sortConfig?.key === "role" &&
                      (sortConfig.direction === "ascending" ? "↑" : "↓")}
                  </TableHead>
                  <TableHead
                    onClick={() => requestSort("appliedOn")}
                    className="cursor-pointer text-[var(--text)]"
                  >
                    Applied On{" "}
                    {sortConfig?.key === "appliedOn" &&
                      (sortConfig.direction === "ascending" ? "↑" : "↓")}
                  </TableHead>
                  <TableHead
                    onClick={() => requestSort("type")}
                    className="cursor-pointer text-[var(--text)]"
                  >
                    Type{" "}
                    {sortConfig?.key === "type" &&
                      (sortConfig.direction === "ascending" ? "↑" : "↓")}
                  </TableHead>
                  <TableHead
                    onClick={() => requestSort("status")}
                    className="cursor-pointer text-[var(--text)]"
                  >
                    Status{" "}
                    {sortConfig?.key === "status" &&
                      (sortConfig.direction === "ascending" ? "↑" : "↓")}
                  </TableHead>
                  <TableHead
                    onClick={() => requestSort("assign")}
                    className="cursor-pointer text-[var(--text)]"
                  >
                    Assigned To{" "}
                    {sortConfig?.key === "assign" &&
                      (sortConfig.direction === "ascending" ? "↑" : "↓")}
                  </TableHead>
                  <TableHead className="text-[var(--text)]">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="overflow-visible relative z-0">
                {currentRecords.map((user) => (
                  <TableRow
                    key={user.applicationId}
                    data-id={user.applicationId}
                    className={cn(
                      "relative z-10 cursor-pointer transition-all duration-200 group hover:bg-[var(--brand-color2)]"
                    )}
                    onClick={() => {
                      if (user.applicationId !== undefined) {
                        toggleSelectUser(user.applicationId);
                      }
                    }}
                  >
                    <TableCell
                      className={cn(
                        "pl-3 transition-all duration-200 border-l-4 border-l-[var(--background)] group-hover:border-[var(--brand-color)]"
                      )}
                    >
                      <Checkbox
                        checked={user.applicationId !== undefined && selectedUsers.includes(user.applicationId)}
                        onClick={(e) => e.stopPropagation()}
                        onCheckedChange={() => {
                          if (user.applicationId !== undefined) {
                            toggleSelectUser(user.applicationId);
                          }
                        }}
                      />
                    </TableCell>
                    <TableCell>
                      <div className="text-low">{user.applicationId}</div>
                    </TableCell>
                    <TableCell>
                      <div className="text-low">{user.name}</div>
                    </TableCell>
                    <TableCell>
                      <div className="text-low">{user.lastCompany}</div>
                    </TableCell>
                    <TableCell>
                      <div className="text-low">{user.role}</div>
                    </TableCell>
                    <TableCell>
                      <div className="text-low">{user.appliedOn}</div>
                    </TableCell>
                    <TableCell>
                      <div className="text-low">
                        <Badge variant="standard">{user.type}</Badge>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="standard">{user.status}</Badge>
                    </TableCell>
                    <TableCell>
                      <div className="text-low">{user.assign}</div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="noborder"
                          size="sm"
                          className="border-0 shadow-none"
                        >
                          <Eye className="h-4 w-3" />
                          <span className="sr-only">View</span>
                        </Button>
                        <Button
                          variant="noborder"
                          size="sm"
                          className="border-0 shadow-none"
                        >
                          <Pen className="h-4 w-3" />
                          <span className="sr-only">Edit</span>
                        </Button>
                        <Button
                          variant="noborder"
                          size="sm"
                          className="border-0 shadow-none"
                        >
                          <X className="h-4 w-3" />
                          <span className="sr-only">Delete</span>
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="flex items-center justify-between flex-wrap gap-2 p-4">
            <div className="flex items-center gap-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="border"
                    size="sm"
                    className="flex items-center gap-2 text-low text-[var(--text-head)]"
                  >
                    {recordsPerPage}
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="text-[var(--text] dark:bg-[var(--background)]">
                  {[10, 25, 50, 100].map((size) => (
                    <DropdownMenuItem
                      key={size}
                      onClick={() => {
                        setRecordsPerPage(size);
                        setCurrentPage(1);
                      }}
                      className="text-[var(--text)] focus:bg-[var(--faded)]"
                    >
                      {size}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              <span className="text-low text-[var(--text)]">
                Showing {indexOfFirstRecord + 1}-
                {Math.min(indexOfLastRecord, sortedData.length)} of{" "}
                {sortedData.length} explorers
              </span>
            </div>
            <div className="flex items-center gap-2 ">
              <Button
                variant="border"
                size="icon"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <Button
                    key={page}
                    variant={page === currentPage ? "brand" : "border"}
                    size="sm"
                    className={`h-8 w-8 p-0 ${
                      page === currentPage ? "text-white" : "text-[var(--text)]"
                    }`}
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </Button>
                )
              )}
              <Button
                variant="border"
                size="icon"
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

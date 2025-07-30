import {
  Clock,
  Search,
  Users,
  FileCheck2,
  FileText,
  CheckCircle2,
  Trash,
  FileDown,
  BadgeQuestionMark,
  Plus,
  Download,
  MessageCircle,
  NotebookPen,
  Pen,
  Bell,
  RotateCcw,
  Ban,
  Eye,
} from "lucide-react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Filter, ChevronRight, ChevronLeft } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { assessmentsTable, coachesList } from "@/data/Data";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import * as React from "react";
import { cn } from "@/lib/utils";
import { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { DatePickerWithRange } from "@/components/application-component/date-range-picker";
import type { DateRange } from "react-day-picker";

const color = "text-[var(--text)]";
const color2 = "text-[var(--text-head)]";

const Stats = [
  {
    title: "Total Enrollments",
    value: "38",
    icon: Users,
   
  },
  {
    title: "Progress",
    value: "26",
    icon: FileCheck2,
  
  },
  {
    title: "Completed",
    value: "7",
    icon: FileText,
  
  },
  {
    title: "Started",
    value: "5",
    icon: Clock,
   
  },
  {
    title: "Total Revenue",
    value: "6",
    icon: CheckCircle2,

  },
  {
    title: "Via Partners",
    value: "6",
    icon: CheckCircle2,
   
  },
];

export function Assessments() {
  return (
    <div className="flex flex-col gap-2">
      <Topbar />
      <StatCard />
      {/* <Actionbar /> */}

      <AssessmentTable />
    </div>
  );
}

function Topbar() {
  const navigate = useNavigate();
  const [showFilter, setShowFilter] = useState(false);
  return (
    <div className="flex justify-between items-center px-4 py-3 bg-[var(--background)] rounded-sm gap-4 border flex-wrap shadow-none">
      <div>
        <h1 className="text-2xl font-bold text-[var(--text-head)]">
          Assessments
        </h1>
      </div>
      <div className="flex items-center gap-2">
        <Button
          className="cursor-pointer"
          variant="standard"
          size="new"
          onClick={() => navigate("manage")}
        >
          <BadgeQuestionMark className="h-3 w-3" />
          <span className="">Manage</span>
        </Button>

        <Button variant="standard" size="new">
          <FileDown className="h-3 w-3" />
          <span className="">Export</span>
        </Button>
        <Button
          variant="standard"
          size="new"
          onClick={() => setShowFilter(true)}
        >
          <Filter className="h-4 w-4" />
          {showFilter ? "Hide Filters" : "Show Filters"}
        </Button>

        {showFilter && <AdvancedFilters onClose={() => setShowFilter(false)} />}
      </div>
    </div>
  );
}

// function Actionbar() {
//   const navigate = useNavigate();
//   const [showFilter, setShowFilter] = useState(false);
//   return (
//     <div className="flex justify-end px-4 py-3 bg-[var(--background)] rounded-sm gap-4 border flex-wrap shadow-none">

//       <div className="flex gap-4 flex-wrap">
//         <Button
//           className="cursor-pointer"
//           variant="standard"
//           size="new"
//           onClick={() => navigate("manage")}
//         >
//           <BadgeQuestionMark className="h-3 w-3" />
//           <span className="">Manage</span>
//         </Button>

//         <Button variant="standard" size="new">
//           <FileDown className="h-3 w-3" />
//           <span className="">Export</span>
//         </Button>
//         <Button
//           variant="standard"
//           size="new"
//           onClick={() => setShowFilter(true)}
//         >
//           <Filter className="h-4 w-4" />
//           {showFilter ? "Hide Filters" : "Show Filters"}
//         </Button>

//         {showFilter && <AdvancedFilters onClose={() => setShowFilter(false)} />}
//       </div>
//     </div>
//   );
// }

interface FilterProps {
  onClose: () => void;
}
function AdvancedFilters({ onClose }: FilterProps) {
  const modalRef = React.useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState("Search");

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

  // Filter states
  const [search, setSearch] = useState("");
  const [segment, setSegment] = useState("9-10");
  const [source, setSource] = useState("Direct");
  const [status, setStatus] = useState("Not Started");
  const [dateRange, setDateRange] = useState<DateRange | undefined>(undefined);

  const tabList = ["Search", "Date Range", "Segment", "Source", "Status"];

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex justify-center items-center p-4">
      <div
        ref={modalRef}
        className="relative w-full max-w-[700px] h-[500px] rounded-xl bg-[var(--background)] "
      >
        <div className="flex items-center justify-between mb-0 pb-4 p-6 min-w-full border-b-1">
          <CardTitle className="text-2xl font-semibold text-[var(--text-head)]">
            Filters
          </CardTitle>
          <Button
            variant="link"
            className="text-sm text-[var(--brand-color)] p-0 h-auto block hover:no-underline hover:cursor-pointer"
            onClick={() => {
              setSearch("");
              setSegment("9-10");
              setSource("Direct");
              setStatus("Not Started");
              setDateRange(undefined);
            }}
          >
            Clear All
          </Button>
        </div>
        {/* Sidebar */}
        <div className="flex ">
          <div className="overflow-y-auto min-w-[180px] border-r-1 h-[360px]">
            <div className="flex flex-col ">
              {tabList.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`text-left text-sm px-3 py-3 border-l-3  ${
                    activeTab === tab
                      ? "bg-[var(--brand-color3)] dark:bg-[var(--brand-color2)] text-[var(--brand-color)] dark:text-[var(--text-head)] font-semibold border-[var(--brand-color)]"
                      : "text-[var(--text)] hover:bg-[var(--faded)] border-transparent"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-6 overflow-y-auto relative w-full">
            {activeTab === "Search" && (
              <>
                <label htmlFor="search" className="text-[var(--text)]">
                  Search (by Name, ID, Assessment, Code):
                </label>
                <Input
                  id="search"
                  placeholder="Enter search query..."
                  type="text"
                  className="mt-4 w-full "
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </>
            )}

            {activeTab === "Date Range" && (
              <>
                <label htmlFor="date-range" className="text-[var(--text)]">
                  Date Range:
                </label>
                <div className="mt-4 min-w-full">
                  <DatePickerWithRange
                    value={dateRange}
                    onChange={setDateRange}
                  />
                </div>
              </>
            )}

            {activeTab === "Segment" && (
              <>
                <p className="text-sm text-[var(--text-head)] mb-4">
                  Select the Segment:
                </p>
                <div className="flex flex-col gap-4 text-[var(--text)] ">
                  {["9-10", "11-12", "UG", "PG", "Professionals"].map(
                    (option) => (
                      <label key={option} className="flex items-center gap-2">
                        <Checkbox
                          checked={segment === option}
                          onCheckedChange={() => setSegment(option)}
                        />
                        {option}
                      </label>
                    )
                  )}
                </div>
              </>
            )}

            {activeTab === "Source" && (
              <>
                <p className="text-sm text-[var(--text-head)] mb-4">
                  Select Source:
                </p>
                <div className="flex flex-col gap-4 text-[var(--text)] ">
                  {["Direct", "Partners"].map((option) => (
                    <label key={option} className="flex items-center gap-2">
                      <Checkbox
                        checked={source === option}
                        onCheckedChange={() => setSource(option)}
                      />
                      {option}
                    </label>
                  ))}
                </div>
              </>
            )}

            {activeTab === "Status" && (
              <>
                <p className="text-sm text-[var(--text-head)] mb-4">
                  Choose Status:
                </p>
                <div className="flex flex-col gap-4 text-[var(--text)] ">
                  {["Not Started", "In Progress", "Completed"].map((option) => (
                    <label key={option} className="flex items-center gap-2">
                      <Checkbox
                        checked={status === option}
                        onCheckedChange={() => setStatus(option)}
                      />
                      {option}
                    </label>
                  ))}
                </div>
              </>
            )}
            {/* Footer */}
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
    <div className="grid gap-4 xl:gap-1 md:grid-cols-2 xl:grid-cols-6">
      {Stats.map((stat, index) => (
        <Card
          key={index}
          className="xl:rounded-sm shadow-none bg-[var(--background)]"
        >
          <CardHeader className="flex-col items-center px-4 gap-4 py-0 h-full">
            <div className="flex justify-between h-full items-center">
              <div
                className={`${color} text-xs uppercase text-light line-clamp-1`}
              >
                {stat.title}
              </div>
              
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

interface CoachAssignmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  assessmentId: string;
  currentCoach: string;
  onAssignCoach: (assessmentId: string, coachId: string) => void;
}

function CoachAssignmentModal({
  isOpen,
  onClose,
  assessmentId,
  currentCoach,
  onAssignCoach,
}: CoachAssignmentModalProps) {
  const [selectedCoach, setSelectedCoach] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCoaches, setFilteredCoaches] = useState(coachesList);

  // Filter coaches based on search query
  useEffect(() => {
    const filtered = coachesList.filter((coach) =>
      coach.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      coach.specialization.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredCoaches(filtered);
  }, [searchQuery]);

  const handleAssignCoach = () => {
    if (selectedCoach) {
      onAssignCoach(assessmentId, selectedCoach);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex justify-center items-center p-4">
      <div className="relative w-full max-w-[500px] rounded-xl bg-[var(--background)] p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-[var(--text-head)]">
            Assign Coach
          </h2>
          <Button
            variant="link"
            className="text-sm text-[var(--brand-color)] p-0 h-auto"
            onClick={onClose}
          >
            ✕
          </Button>
        </div>

        <div className="mb-4">
          <label className="text-base text-[var(--text)] mb-2 block">
            Search Coach:
          </label>
          <div className="relative">
            <Input
              placeholder="Search coaches by name or specialization..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-2 border rounded-md bg-[var(--background)] text-[var(--text)] text-sm"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[var(--text)] opacity-50" />
          </div>
          
          {searchQuery && (
            <div className="mt-2 max-h-40 overflow-y-auto border rounded-md">
              {filteredCoaches.length > 0 ? (
                filteredCoaches.map((coach) => (
                  <div
                    key={coach.id}
                    className={`p-2 cursor-pointer hover:bg-[var(--faded)] text-sm ${
                      selectedCoach === coach.id ? 'bg-[var(--brand-color2)] text-[var(--brand-color)]' : 'text-[var(--text)]'
                    }`}
                    onClick={() => setSelectedCoach(coach.id)}
                  >
                    {coach.name} - {coach.specialization}
                  </div>
                ))
              ) : (
                <div className="p-2 text-sm text-[var(--text)] opacity-70">
                  No coaches found
                </div>
              )}
            </div>
          )}
          
          {selectedCoach && (
            <div className="mt-2 p-2 bg-[var(--faded)] rounded-md">
              <span className="text-sm text-[var(--text)]">
                Selected: {coachesList.find(c => c.id === selectedCoach)?.name} - {coachesList.find(c => c.id === selectedCoach)?.specialization}
              </span>
            </div>
          )}
        </div>

        <div className="flex gap-2 justify-end">
          <Button variant="border" size="sm" onClick={onClose}>
            Cancel
          </Button>
          <Button
            variant="brand"
            size="sm"
            onClick={handleAssignCoach}
            disabled={!selectedCoach}
          >
            Assign Coach
          </Button>
        </div>
      </div>
    </div>
  );
}

function AssessmentTable() {
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(10);
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: "ascending" | "descending";
  } | null>(null);
  const [isCoachAssignmentOpen, setIsCoachAssignmentOpen] = useState(false);
  const [selectedAssessmentId, setSelectedAssessmentId] = useState("");
  const [selectedCurrentCoach, setSelectedCurrentCoach] = useState("");

  // Sorting logic
  const sortedData = [...assessmentsTable];
  if (sortConfig !== null) {
    sortedData.sort((a, b) => {
      const aValue = a[sortConfig.key as keyof typeof a];
      const bValue = b[sortConfig.key as keyof typeof b];
      if (aValue && bValue) {
        if (aValue < bValue) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (aValue > bValue) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
      }
      return 0;
    });
  }

  const totalPages = Math.ceil(assessmentsTable.length / recordsPerPage);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = assessmentsTable.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );

  const requestSort = (key: string) => {
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
      setSelectedUsers(
        currentRecords
          .map((user) => user.id)
          .filter((id): id is string => id !== undefined)
      );
    }
  };

  const toggleSelectUser = (userId: string) => {
    if (selectedUsers.includes(userId)) {
      setSelectedUsers(selectedUsers.filter((id) => id !== userId));
    } else {
      setSelectedUsers([...selectedUsers, userId]);
    }
  };

  const handleOpenCoachAssignment = (
    assessmentId: string,
    currentCoach: string
  ) => {
    setSelectedAssessmentId(assessmentId);
    setSelectedCurrentCoach(currentCoach);
    setIsCoachAssignmentOpen(true);
  };

  const handleCloseCoachAssignment = () => {
    setIsCoachAssignmentOpen(false);
    setSelectedAssessmentId("");
    setSelectedCurrentCoach("");
  };

  const handleAssignCoach = (assessmentId: string, coachId: string) => {
    // Here you would typically update the assessment data
    console.log(`Assigning coach ${coachId} to assessment ${assessmentId}`);
    handleCloseCoachAssignment();
  };

  return (
    <div className="flex flex-row gap-4 w-full h-max xl:flex-nowrap flex-wrap">
      <div className="flex-1 rounded-md border bg-[var(--background)] overflow-x-auto xl:min-w-auto min-w-full">
        <div className="flex items-center justify-between border-b h-20 p-4 mt-auto">
          <div className="flex items-center justify-between pl-0 p-4">
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
              <div className="flex gap-2 ml-2">
                <Button variant="border" size="sm">
                  <Download className="h-4 w-4" />
                  Export Pricing Data
                </Button>
                <Button variant="border" size="sm">
                  <NotebookPen className=" h-4 w-4" />
                  Update Commission Rules
                </Button>
                <Button variant="delete" size="sm">
                  <Trash className=" h-4 w-4" />
                  Mark as Inactive
                </Button>
                <Button variant="border" size="sm">
                  <Pen className=" h-4 w-4" />
                  Assign Category
                </Button>
                <Button variant="border" size="sm">
                  <MessageCircle className=" h-4 w-4" />
                  Notify Consultants
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
                  onClick={() => requestSort("assessmentName")}
                  className="cursor-pointer text-[var(--text)] text-low"
                >
                  Assessment Name{" "}
                  {sortConfig?.key === "assessmentName" &&
                    (sortConfig.direction === "ascending" ? "↑" : "↓")}
                </TableHead>
                <TableHead
                  onClick={() => requestSort("userName")}
                  className="cursor-pointer text-[var(--text)]"
                >
                  User Name & ID{" "}
                  {sortConfig?.key === "userName" &&
                    (sortConfig.direction === "ascending" ? "↑" : "↓")}
                </TableHead>
                <TableHead
                  onClick={() => requestSort("segments")}
                  className="cursor-pointer text-[var(--text)]"
                >
                  Segment{" "}
                  {sortConfig?.key === "segments" &&
                    (sortConfig.direction === "ascending" ? "↑" : "↓")}
                </TableHead>
                <TableHead
                  onClick={() => requestSort("date")}
                  className="cursor-pointer text-[var(--text)]"
                >
                  Date{" "}
                  {sortConfig?.key === "date" &&
                    (sortConfig.direction === "ascending" ? "↑" : "↓")}
                </TableHead>
                <TableHead
                  onClick={() => requestSort("source")}
                  className="cursor-pointer text-[var(--text)]"
                >
                  Source{" "}
                  {sortConfig?.key === "source" &&
                    (sortConfig.direction === "ascending" ? "↑" : "↓")}
                </TableHead>
                <TableHead
                  onClick={() => requestSort("amountPaid")}
                  className="cursor-pointer text-[var(--text)]"
                >
                  Amount Paid{" "}
                  {sortConfig?.key === "amountPaid" &&
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
                  onClick={() => requestSort("assignCoach")}
                  className="cursor-pointer text-[var(--text)]"
                >
                  Assign Coach{" "}
                  {sortConfig?.key === "assignCoach" &&
                    (sortConfig.direction === "ascending" ? "↑" : "↓")}
                </TableHead>
                <TableHead
                  onClick={() => requestSort("result")}
                  className="cursor-pointer text-[var(--text)]"
                >
                  Result{" "}
                  {sortConfig?.key === "result" &&
                    (sortConfig.direction === "ascending" ? "↑" : "↓")}
                </TableHead>
                <TableHead className="text-[var(--text)]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="overflow-visible relative z-0">
              {currentRecords.map((user) => (
                <TableRow
                  key={user.id}
                  data-id={user.id}
                  className={cn(
                    "relative z-10 cursor-pointer transition-all duration-200 group hover:bg-[var(--brand-color2)]"
                  )}
                  onClick={() => {
                    if (user.id) {
                      toggleSelectUser(user.id);
                    }
                  }}
                >
                  <TableCell
                    className={cn(
                      "pl-3 transition-all duration-200 border-l-4 group-hover:border-[var(--brand-color)]"
                    )}
                  >
                    <Checkbox
                      checked={
                        user.id ? selectedUsers.includes(user.id) : false
                      }
                      onClick={(e) => e.stopPropagation()}
                      onCheckedChange={() =>
                        user.id && toggleSelectUser(user.id)
                      }
                    />
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-4">
                      <div>
                        <div className="flex justify-start items-center">
                          <div className="font-medium">
                            {user.assessmentName}
                          </div>
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex justify-start flex-col">
                      <div className="font-medium">{user.userName}</div>
                      <div className="text-xs">{user.userId}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-low">{user.segments}</div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">{user.date}</div>
                  </TableCell>
                  <TableCell>
                    <div className="text-low">
                      {user.source.type === "Direct" ? (
                        "Direct"
                      ) : (
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger className="text-left">
                              <div className="hover:text-[var(--brand-color)]">
                                {user.source.partnerName}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent
                              side="right"
                              className="p-2 max-w-[200px]"
                            >
                              <div className="flex flex-col gap-1 text-xs">
                                <div>Commission: {user.source.commission}</div>
                                <div>
                                  Assessment Price: ₹
                                  {user.source.assessmentPrice}
                                </div>
                                <div>
                                  Partner Share: ₹{user.source.partnerShare}
                                </div>
                                <div>
                                  Aimshala Share: ₹{user.source.aimshalaShare}
                                </div>
                                <div>Access Code: {user.source.accessCode}</div>
                              </div>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-low">
                      ₹{user.amountPaid} | {user.amountCode}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="standard">{user.status}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">
                      {user.assignCoach ? (
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button
                                variant="icon-only"
                                size="sm"
                                className="cursor-pointer hover:bg-[var(--brand-color2)] hover:text-[var(--brand-color)] transition-all duration-200"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleOpenCoachAssignment(
                                    user.id,
                                    user.assignCoach || ""
                                  );
                                }}
                              >
                                <span className="flex items-center gap-1">
                                  <Plus className="h-3 w-3" />
                                </span>
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent side="top" className="text-xs">
                              Click to assign coach
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      ) : (
                        <Button
                          variant="border"
                          size="sm"
                          className="text-[var(--text)] hover:bg-[var(--brand-color2)] hover:text-[var(--brand-color)]"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleOpenCoachAssignment(
                              user.id,
                              user.assignCoach || ""
                            );
                          }}
                        >
                          <span className="flex items-center gap-1">
                            <Plus className="h-3 w-3" />
                            <span className="w-2 h-2 bg-[var(--red)] rounded-full"></span>
                            Assign Coach
                          </span>
                        </Button>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm flex justify-center items-center">
                      {user.result ? (
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button
                                variant="noborder"
                                size="sm"
                                className="hover:bg-[var(--brand-color2)] hover:text-[var(--brand-color)] transition-all duration-200 p-2 rounded-md"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  // navigate(`/result-details/${user.id}`) or your view logic
                                }}
                              >
                                <Eye className="h-4 w-4" />
                                <span className="sr-only">View Result</span>
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent side="top" className="text-xs">
                              View Result
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      ) : (
                        <span className="text-center">-</span>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              variant="noborder"
                              size="sm"
                              className="hover:bg-[var(--brand-color2)] hover:text-[var(--brand-color)] transition-all duration-200 p-2 rounded-md"
                              onClick={(e) => {
                                e.stopPropagation();
                                // navigate(`/user-details/${user.id}`) or your view logic
                              }}
                            >
                              <Bell className="h-4 w-4" />
                              <span className="sr-only">Remind</span>
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent side="top" className="text-xs">
                            Remind
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              variant="noborder"
                              size="sm"
                              className="hover:bg-[var(--red2)] hover:text-[var(--red)] transition-all duration-200 p-2 rounded-md"
                              onClick={(e) => {
                                e.stopPropagation();
                                // navigate(`/user-details/${user.id}`) or your view logic
                              }}
                            >
                              <Ban className="h-4 w-4" />
                              <span className="sr-only">Revoke</span>
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent side="top" className="text-xs">
                            Revoke
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              variant="noborder"
                              size="sm"
                              className="hover:bg-[var(--green2)] hover:text-[var(--green)] transition-all duration-200 p-2 rounded-md"
                              onClick={(e) => {
                                e.stopPropagation();
                                // navigate(`/user-details/${user.id}`) or your view logic
                              }}
                            >
                              <RotateCcw className="h-4 w-4" />
                              <span className="sr-only">Reset</span>
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent side="top" className="text-xs">
                            Reset
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
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
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
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
            ))}
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

      <CoachAssignmentModal
        isOpen={isCoachAssignmentOpen}
        onClose={handleCloseCoachAssignment}
        assessmentId={selectedAssessmentId}
        currentCoach={selectedCurrentCoach}
        onAssignCoach={handleAssignCoach}
      />
    </div>
  );
}

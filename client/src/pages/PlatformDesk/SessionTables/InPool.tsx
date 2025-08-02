import { Search, Check, X, FileDown, Newspaper, Flag, NotebookIcon, Phone, MessageCircle, Plus, PenBox, Calendar1 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuContent } from "@/components/ui/dropdown-menu";
import { ChevronDown, ChevronRight, ChevronLeft, Eye } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

import { cn } from "@/lib/utils"
import { useEffect } from "react";
import { coachesList } from "@/data/Data";
import asset from "@/assets/asset.jpg";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const tData = [
  {
    "id": "APP0001",
    "photo": asset,
    "fullName": "Aayush Kapoor",
    "explorerId": "EX12345",
    "ug": "B.Com",
    "assignCoach": "",
    "date": "2025-07-30",
    "time": "10:00 AM",
    "type": "Instant - Phone",
    "objective": "Career Consulting",
    "amount": 1200,
    "feesOrPercent": "500 | 20%",
    "share": "600",
    "status": "Booked",
    "actions": ["View", "Cancel", "Flag", "Logs"]
  },
  {
    "id": "APP0002",
    "photo": asset,
    "fullName": "Tanya Mehra",
    "explorerId": "EX12346",
    "ug": "BA Psychology",
    "assignCoach": "",
    "date": "2025-07-29",
    "time": "12:30 PM",
    "type": "Introductory - Video",
    "objective": "Career Transition",
    "amount": 1500,
    "feesOrPercent": "300 | 25%",
    "share": "750",
    "status": "Pending",
    "actions": ["View", "Cancel", "Logs"]
  },
  {
    "id": "APP0003",
    "photo": asset,
    "fullName": "Harshdeep Kaur",
    "explorerId": "EX12347",
    "ug": "B.Tech",
    "assignCoach": "",
    "date": "2025-07-28",
    "time": "2:00 PM",
    "type": "Phone",
    "objective": "Career Consulting",
    "amount": 1000,
    "feesOrPercent": "200 | 20%",
    "share": "500",
    "status": "Completed",
    "actions": ["View", "Logs"]
  },
  {
    "id": "APP0004",
    "photo": asset,
    "fullName": "Manav Khanna",
    "explorerId": "EX12348",
    "ug": "B.Sc",
    "assignCoach": "",
    "date": "2025-08-01",
    "time": "4:30 PM",
    "type": "B2B - Video",
    "objective": "Career Transition",
    "amount": 2500,
    "feesOrPercent": "750 | 30%",
    "share": "1250",
    "status": "Booked",
    "actions": ["View", "Cancel", "Logs"]
  },
  {
    "id": "APP0005",
    "photo": asset,
    "fullName": "Nikhil Sharma",
    "explorerId": "EX12349",
    "ug": "BBA",
    "assignCoach": "",
    "date": "2025-08-03",
    "time": "11:00 AM",
    "type": "AskQ",
    "objective": "Career Consulting",
    "amount": 700,
    "feesOrPercent": "150 | 21%",
    "share": "350",
    "status": "Cancelled",
    "actions": ["View", "Logs"]
  }
]


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
  onAssignCoach
}: CoachAssignmentModalProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCoach, setSelectedCoach] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  // 🔁 Reset inputs on modal open
  useEffect(() => {
    if (isOpen) {
      setSearchTerm("");
      setSelectedCoach("");
      setShowSuggestions(false);
    }
  }, [isOpen]);

  const filteredCoaches = coachesList.filter(
    (coach) =>
      coach.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      coach.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelect = (coach: any) => {
    setSearchTerm(`${coach.name} - ${coach.id}`);
    setSelectedCoach(coach.id);
    setShowSuggestions(false);
  };

  const handleAssignCoach = () => {
    if (selectedCoach) {
      onAssignCoach(assessmentId, selectedCoach);
      onClose(); // ✅ close modal after assigning
    }
  };

  const handleRemoveCoach = () => {
    onAssignCoach(assessmentId, ""); // ✅ set to empty string
    onClose(); // ✅ close modal right away
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex justify-center items-center p-4">
      <div className="relative w-full max-w-[500px] rounded-xl bg-[var(--background)] p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-[var(--text-head)]">
            Assign Coach
          </h2>
          <button
            className="text-sm text-[var(--brand-color)] p-0 h-auto hover:text-[var(--brand-color2)]"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        <div className="mb-4 relative">
          <label className="text-base text-[var(--text)] mb-2 block">Select Coach:</label>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setShowSuggestions(true);
            }}
            className="w-full p-2 border rounded-md bg-[var(--background)] text-[var(--text)] text-sm"
            placeholder="Type coach name or ID..."
          />
          {showSuggestions && searchTerm && (
            <ul className="absolute z-10 w-full bg-[var(--background)] border rounded-md mt-1 max-h-48 overflow-auto">
              {filteredCoaches.length > 0 ? (
                filteredCoaches.map((coach) => (
                  <li
                    key={coach.id}
                    className="px-4 py-2 cursor-pointer hover:bg-[var(--faded)] text-sm text-[var(--text)]"
                    onClick={() => handleSelect(coach)}
                  >
                    {coach.name} - {coach.id} ({coach.specialization})
                  </li>
                ))
              ) : (
                <li className="px-4 py-2 text-[var(--text)] text-sm">No matches found</li>
              )}
            </ul>
          )}
        </div>

        <div className="flex gap-2 justify-end">
          {currentCoach && (
            <Button variant="delete" size="sm" onClick={handleRemoveCoach}>
              Remove Coach
            </Button>
          )}
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




export function InPoolTable() {

  const [data, setData] = useState(tData);
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(10);
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: "ascending" | "descending";
  } | null>(null);
  const [selectedStack, setSelectedStack] = useState<
    typeof data
  >(data[0] ? [data[0]] : []);
  const [focusedId, setFocusedId] = useState<string | null>(data[0]?.id || null);

  const [isCoachAssignmentOpen, setIsCoachAssignmentOpen] = useState(false);
  const [selectedAssessmentId, setSelectedAssessmentId] = useState("");
  const [selectedCurrentCoach, setSelectedCurrentCoach] = useState("");

  // Sorting logic
  const sortedData = [...data];
  if (sortConfig !== null) {
    sortedData.sort((a, b) => {
      const aValue = a[sortConfig.key as keyof typeof a];
      const bValue = b[sortConfig.key as keyof typeof b];
      if (aValue < bValue) {
        return sortConfig.direction === "ascending" ? -1 : 1;
      }
      if (aValue > bValue) {
        return sortConfig.direction === "ascending" ? 1 : -1;
      }
      return 0;
    });
  }

  const totalPages = Math.ceil(sortedData.length / recordsPerPage);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = sortedData.slice(
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
        currentRecords.map((user) => user.id)
      );
    }
  };

  const bringToTop = (userId: string) => {
    const coach = selectedStack.find((c) => c.id === userId);
    if (coach) {
      setSelectedStack((prev) => [
        coach,
        ...prev.filter((c) => c.id !== userId),
      ]);
      setFocusedId(userId);
    }
  };

  useEffect(() => {
    const allRows = document.querySelectorAll("tr[data-id]");

    allRows.forEach((row) => {
      const id = String(row.getAttribute("data-id"));
      const isInStack = selectedStack.some((coach) => coach.id === id);
      const isTop = focusedId === id;

      // Remove previous styles
      row.classList.remove(
        "bg-[var(--brand-color3)]",
        "border-l-[var(--brand-color)]"
      );

      if (isInStack) {
        row.classList.add("bg-[var(--brand-color3)]");

        if (isTop) {
          row.classList.add("border-l-[var(--brand-color)]");
        }
      }
    });
  }, [selectedStack, focusedId]);


  const handleRowClick = (user: (typeof data)[0]) => {
    // Double-click detected
    const exists = selectedStack.find((c) => c.id === user.id);
    if (!exists) {
      setSelectedStack((prev) => {
        const updated = [user, ...prev];
        return updated.slice(0, 5); // limit to 5
      });
      setFocusedId(user.id);
    } else {
      bringToTop(user.id);
    }
  };

  const toggleSelectUser = (userId: string) => {
    if (selectedUsers.includes(userId)) {
      setSelectedUsers(selectedUsers.filter((id) => id !== userId));
    } else {
      setSelectedUsers([...selectedUsers, userId]);
    }
  };

  const handleOpenCoachAssignment = (assessmentId: string, currentCoach: string) => {
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
    // Handle REMOVE separately
    if (!coachId) {
      setData((prev: any) =>
        prev.map((row: any) =>
          row.id === assessmentId ? { ...row, assignCoach: "" } : row
        )
      );
      handleCloseCoachAssignment();
      return;
    }

    // Normal coach assignment
    const coach = coachesList.find((c) => c.id === coachId);
    if (!coach) return;

    setData((prev: any) =>
      prev.map((row: any) =>
        row.id === assessmentId ? { ...row, assignCoach: coach.id } : row
      )
    );

    handleCloseCoachAssignment();
  };

  return (
    <div className="flex flex-row gap-4 w-full h-max xl:flex-nowrap flex-wrap">
      <div className="flex-1 rounded-md rounded-tl-none border bg-[var(--background)] overflow-x-auto xl:min-w-auto min-w-full">
        <div className="flex items-center justify-between border-b h-20 p-4 mt-auto">
          <div className="flex items-center justify-between pl-0 p-4">
            <div className="flex items-center gap-2 border-none shadow-none">
              <Checkbox
                id="select-all"
                checked={selectedUsers.length === currentRecords.length && currentRecords.length > 0}
                onCheckedChange={toggleSelectAll}
              />
              <label htmlFor="select-all" className="text-sm font-medium text-[var(--text)]">
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
                  <Check className="h-4 w-4 text-[var(--green)]" />
                  Approve
                </Button>
                <Button variant="delete" size="sm">
                  <X className=" h-4 w-4 text-[var(--red)]" />
                  Archive
                </Button>
                <Button variant="border" size="sm">
                  <Eye className=" h-4 w-4" />
                  View
                </Button>
                <Button variant="border" size="sm">
                  <Newspaper className=" h-4 w-4" />
                  Track
                </Button>
                <Button variant="border" size="sm">
                  <FileDown className=" h-4 w-4" />
                  Export
                </Button>
              </div>
            )}
          </div>
          <div className="flex justify-end items-center gap-4 ">
            <div className="flex justify-around items-center border-1 rounded-md overflow-hidden bg-[var(--faded)]">
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
                  onClick={() => requestSort("fullName")}
                  className="cursor-pointer text-[var(--text)] text-low"
                >
                  Explorer{" "}
                  {sortConfig?.key === "fullName" &&
                    (sortConfig.direction === "ascending" ? "↑" : "↓")}
                </TableHead>
                <TableHead
                  onClick={() => requestSort("assignCoach")}
                  className="cursor-pointer text-[var(--text)]"
                >
                  Coach{" "}
                  {sortConfig?.key === "assignCoach" &&
                    (sortConfig.direction === "ascending" ? "↑" : "↓")}
                </TableHead>
                <TableHead
                  onClick={() => requestSort("date")}
                  className="cursor-pointer text-[var(--text)]"
                >
                  When{" "}
                  {sortConfig?.key === "date" &&
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
                  onClick={() => requestSort("objective")}
                  className="cursor-pointer text-[var(--text)]"
                >
                  Objective{" "}
                  {sortConfig?.key === "objective" &&
                    (sortConfig.direction === "ascending" ? "↑" : "↓")}
                </TableHead>
                <TableHead
                  onClick={() => requestSort("amount")}
                  className="cursor-pointer text-[var(--text)]"
                >
                  Amount{" "}
                  {sortConfig?.key === "amount" &&
                    (sortConfig.direction === "ascending" ? "↑" : "↓")}
                </TableHead>
                <TableHead
                  onClick={() => requestSort("feesOrPercent")}
                  className="cursor-pointer text-[var(--text)]"
                >
                  Fees / %{" "}
                  {sortConfig?.key === "feesOrPercent" &&
                    (sortConfig.direction === "ascending" ? "↑" : "↓")}
                </TableHead>
                <TableHead
                  onClick={() => requestSort("share")}
                  className="cursor-pointer text-[var(--text)]"
                >
                  Share{" "}
                  {sortConfig?.key === "share" &&
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
                <TableHead className="text-[var(--text)] text-center pr-4 w-[10px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="overflow-visible relative z-0">
              {currentRecords.map((user) => (
                <TableRow
                  key={user.id}
                  data-id={user.id}
                  className={cn(
                    "relative z-10 h-[90px] cursor-pointer transition-all duration-200 hover:bg-[var(--brand-color2)]",
                    selectedStack.some((c) => c.id === user.id)
                      ? "bg-[var(--brand-color3)]"
                      : ""
                  )}
                  onClick={() => {
                    toggleSelectUser(user.id);
                    handleRowClick(user);
                  }}
                >
                  <TableCell
                    className={cn(
                      "pl-3 transition-all duration-200 border-l-4 hover:border-[var(--brand-color)]",
                      selectedStack.some((c) => c.id === user.id)
                        ? focusedId === user.id
                          ? "border-[var(--brand-color)]"
                          : "border-transparent"
                        : "border-transparent"
                    )}
                  >
                    <Checkbox
                      checked={selectedUsers.includes(user.id)}
                      onClick={(e) => e.stopPropagation()}
                      onCheckedChange={() => toggleSelectUser(user.id)}
                    />
                  </TableCell>
                  <TableCell
                  >
                    <div className="flex items-center gap-2 group">
                      <div className="h-10 w-10 rounded-full overflow-hidden">
                        <img
                          src={user.photo}
                          alt={user.fullName}
                          className="h-10 w-10 object-cover"
                        />
                      </div>
                      <div>
                        <div className="flex justify-start flex-col">
                          <div className="font-medium">{user.fullName}</div>
                          <div className="text-xs">{user.explorerId}</div>
                          <div className="text-[10px]">{user.ug}</div>
                          <div className="flex items-center gap-1">
                          <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <button className=" group-hover:text-[var(--brand-color)]  hidden group-hover:inline-flex items-center gap-1 text-[15px]"><Phone className="h-3 w-3 hover:h-4 hover:w-4" /></button>
                            </TooltipTrigger>
                          <TooltipContent side="top" className="text-xs">
                            Call
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                            <span className=" group-hover:text-[var(--text)]  hidden group-hover:inline-flex items-center gap-1 text-[15px]">|</span>
                            <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <button className=" group-hover:text-[var(--brand-color)]  hidden group-hover:inline-flex items-center gap-1 text-[20px]"><MessageCircle className="h-3 w-3 hover:h-4 hover:w-4" /></button>
                            </TooltipTrigger>
                          <TooltipContent side="top" className="text-xs">
                            Message
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                          </div>
                        </div>
                      </div>

                    </div>
                  </TableCell>
                  <TableCell className="">
                    <div className="w-full max-w-full text-sm group">
                      {user.assignCoach ? (() => {
                        const coach = coachesList.find(
                          (c) => c.id.toLowerCase() === user.assignCoach.toLowerCase()
                        );

                        return coach ? (
                          <div className="flex items-start justify-between gap-4 min-w-[250px]">
                            {/* Coach Display */}
                            <div className="flex items-center gap-3">
                              <img
                                src={coach.photo || asset}
                                alt={coach.name}
                                className="w-6 h-6 rounded-full object-cover"
                              />
                              <div className="flex flex-col justify-center">
                                <div className="font-semibold text-[var(--text)] flex items-center gap-2">{coach.name}
                                  <button
                                    className="text-xs hidden group-hover:inline-flex"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      handleOpenCoachAssignment(user.id, user.assignCoach);
                                    }}
                                  >
                                    <PenBox className="text-xs h-3 w-3" />
                                  </button>
                                </div>
                                <div className="text-xs text-[var(--text)]">{coach.id}</div>
                                <div className="text-xs text-[var(--text)]">{coach.specialization}</div>
                              </div>
                            </div>

                          </div>
                        ) : (
                          <div className="text-[var(--red)] text-xs">Coach not found</div>
                        );
                      })() : (
                        <Button
                          variant="noborder"
                          size="sm"
                          className="text-[var(--text)] hover:bg-[var(--brand-color2)] hover:text-[var(--brand-color)]"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleOpenCoachAssignment(user.id, "");
                          }}
                        >
                          <span className="flex items-center gap-1">
                            <Plus className="h-3 w-3" />
                          </span>
                        </Button>
                      )}
                    </div>
                  </TableCell>




                  <TableCell>
                    <div className="text-sm flex flex-col gap-1 group">
                      <div>{`${user.date}`}</div>
                      <div >{`${user.time}`}</div>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                      <Calendar1 className="h-4 w-4 hidden group-hover:inline-flex hover:h-5 hover:w-5 text-[var(--brand-color)] " />
                      </TooltipTrigger>
                      <TooltipContent side="top" className="text-xs">
                        Reschedule
                      </TooltipContent>
                    </Tooltip>
                      </TooltipProvider>
                    </div>
                  </TableCell>

                  <TableCell>
                    <div className="text-sm max-w-[100px] break-words whitespace-normal">{user.type}</div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm max-w-[100px] break-words whitespace-normal">{user.objective}</div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">{user.amount}</div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm flex flex-col gap-1 items-center">
                      <p className="text-[var(--text)]">{user.feesOrPercent.split(" | ")[0]}</p>
                      <Badge variant="brand" className="text-[var(--text)] text-xs ml-1">{user.feesOrPercent.split(" | ")[1]}</Badge>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">{user.share}</div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="standard">
                      {user.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center justify-center pr-4">
                    <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                        
                      <Button
                        variant="actionIcon"
                        size="actionIcon"
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                      >
                        <Eye className="h-4 w-4" />
                        <span className="sr-only">View</span>
                      </Button>
                      </TooltipTrigger>
                          <TooltipContent side="top" className="text-xs">
                            View
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                      <Button
                        variant="actionIcon"
                        size="actionIcon"
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                      >
                        <X className="h-4 w-3 text-[var(--red)]" />
                        <span className="sr-only">Cancle</span>
                      </Button>
                      </TooltipTrigger>
                          <TooltipContent side="top" className="text-xs">
                            Cancel
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                      <Button
                        variant="actionIcon"
                        size="actionIcon"
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                      >
                        <Flag className="h-4 w-3" />
                        <span className="sr-only">Flag</span>
                      </Button>
                      </TooltipTrigger>
                          <TooltipContent side="top" className="text-xs">
                            Flag
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                      <Button
                        variant="actionIcon"
                        size="actionIcon"
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                      >
                        <NotebookIcon className="h-4 w-3" />
                        <span className="sr-only">Logs</span>
                      </Button>
                      </TooltipTrigger>
                          <TooltipContent side="top" className="text-xs">
                            Logs
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
                className={`h-8 w-8 p-0 ${page === currentPage ? "text-white" : "text-[var(--text)]"}`}
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

            <CoachAssignmentModal
              isOpen={isCoachAssignmentOpen}
              onClose={handleCloseCoachAssignment}
              assessmentId={selectedAssessmentId}
              currentCoach={selectedCurrentCoach}
              onAssignCoach={handleAssignCoach}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
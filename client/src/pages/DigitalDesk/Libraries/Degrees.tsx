import { Button } from "@/components/ui/button";
import {
  Eye,
  Filter,
  BadgeQuestionMark,
  Notebook,
  Plus,
  Search,
  Pen,
  FileDown,

  Flame,
  TrendingUp,
  Tag,
  Send as SendIcon,
  Ban,
  Flag,
} from "lucide-react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

import { CircleArrowDown, CircleArrowUp } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { DegreeTable  } from "@/data/Data";
//import { motion, AnimatePresence } from "motion/react";
import { useEffect } from "react";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";

import React from "react";



const color = "text-[var(--text)]";
const color2 = "text-[var(--text-head)]";
const Up = <CircleArrowUp className="text-[var(--green)] h-4" />;
const Down = <CircleArrowDown className="text-[var(--red)] h-4" />;

const stats = [
  {
    title: "Total Degrees Listed",
    value: "148",
    icon: Notebook,
    performance: Up,
  },
  {
    title: "Published",
    value: "122",
    icon: Notebook,
    performance: Up,
  },
   {
    title: "Unpublished",
    value: "18",
    icon: Notebook,
    performance: Down,
  },
  {
    title: "Pending Review",
    value: "8",
    icon: Notebook,
    performance: Down,
  },
  {
    title: "UG Degrees ",
    value: "87",
    icon: Notebook,
    performance: Down,
  },
  {
    title: "PG Degrees",
    value: "44",
    icon: Notebook,
    performance: Down,
  },
  {
    title: "New This Month",
    value: "9",
    icon: Notebook,
    performance: Down,
  },
 
];





export function Degrees() {
 

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold text-[var(--text-head)]">Degrees Desk</h1>
        <StatsCards />
   <Topbar  />

        <TableSection/>
      </div>
    </div>
  );
}

function Topbar()  {
     const [showFilter, setShowFilter] = useState(false);
  return (
    <div className="flex justify-between px-4 py-3 bg-[var(--background)] rounded-sm gap-4 border flex-wrap shadow-none">
      <Button
        variant="brand"
        size="new"
      >
        <Plus className="h-3 w-3" />
        <span>  Add New Degree</span>
      </Button>
      <div className="flex gap-4 flex-wrap">
        <Button variant="standard" size="new">
          <BadgeQuestionMark className="h-3 w-3" />
          <span className=""> Degree Categories</span>
        </Button>
        <Button variant="standard" size="new">
          <Eye className="h-3 w-3" />
          <span className="">Import  (Excel/CSV)
          </span>
        </Button>
     
        <Button variant="standard" size="new">
          <FileDown className="h-3 w-3" />
          <span className="">Export</span>
        </Button>
        <Button
          variant="border"
          onClick={() => setShowFilter(true)}
          className="flex items-center gap-2 self-end min-h-[40px]"
        >
          <Filter className="h-4 w-4" />
          {showFilter ? "Hide Filters" : "Show Filters"}
        </Button>
        {showFilter && <AdvancedFilters onClose={() => setShowFilter(false)} />}
      </div>
    </div>
  );
}

interface FilterProps {
  onClose: () => void;
}

function AdvancedFilters({ onClose }: FilterProps) {
  const modalRef = React.useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState("Level");

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
  const [types, setTypes] = useState<string[]>([]);
  const [segments, setSegments] = useState<string[]>([]);
  const [streams, setStreams] = useState<string[]>([]);
  const [status, setStatus] = useState<string[]>([]);
  const [tags, setTags] = useState<string[]>([]);

  const tabList = [
    "Level",
    "Stream",
    "Segment",
    "Status",
    "Tags",
  ];

  // Helper for checkbox
  const handleCheckboxChange = (
    stateSetter: React.Dispatch<React.SetStateAction<string[]>>,
    option: string
  ) => {
    stateSetter((prev) =>
      prev.includes(option) ? prev.filter((o) => o !== option) : [...prev, option]
    );
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex justify-center items-center p-4">
      <div
        ref={modalRef}
        className="relative w-full max-w-[700px] h-[500px] rounded-xl bg-[var(--background)] "
      >
        <div className="flex items-center justify-between mb-0 pb-4 p-6 min-w-full border-b-1">
          <CardTitle className="text-2xl font-semibold text-[var(--text-head)]">Filters</CardTitle>
          <Button
            variant="link"
            className="text-sm text-[var(--brand-color)] p-0 h-auto block hover:no-underline hover:cursor-pointer"
            onClick={() => {
              setTypes([]);
              setSegments([]);
              setStreams([]);
              setStatus([]);
              setTags([]);
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
                  className={`text-left text-sm px-3 py-3 border-l-3  ${activeTab === tab
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
            {activeTab === "Level" && (
              <>
                <p className="text-sm text-[var(--text-head)] mb-4">Level:</p>
                <div className="flex flex-col gap-4 text-[var(--text)] ">
                  {["UG", "PG", "Diploma", "Certificate"].map((option) => (
                    <label key={option} className="flex items-center gap-2">
                      <Checkbox
                        checked={types.includes(option)}
                        onCheckedChange={() => handleCheckboxChange(setTypes, option)}
                      />
                      {option}
                    </label>
                  ))}
                </div>
              </>
            )}

            {activeTab === "Stream" && (
              <>
                <p className="text-sm text-[var(--text-head)] mb-4">Stream:</p>
                <div className="flex flex-col gap-4 text-[var(--text)] ">
                  {["Science", "Commerce", "Arts", "Tech", "Management"].map((option) => (
                    <label key={option} className="flex items-center gap-2">
                      <Checkbox
                        checked={streams.includes(option)}
                        onCheckedChange={() => handleCheckboxChange(setStreams, option)}
                      />
                      {option}
                    </label>
                  ))}
                </div>
              </>
            )}

            {activeTab === "Segment" && (
              <>
                <p className="text-sm text-[var(--text-head)] mb-4">Segment:</p>
                <div className="flex flex-col gap-4 text-[var(--text)] ">
                  {["UG Explorer", "PG", "Career Changer"].map((option) => (
                    <label key={option} className="flex items-center gap-2">
                      <Checkbox
                        checked={segments.includes(option)}
                        onCheckedChange={() => handleCheckboxChange(setSegments, option)}
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
                  Status:
                </p>
                <div className="flex flex-col gap-4 text-[var(--text)] ">
                  {["Published", "Unpublished", "Pending"].map((option) => (
                    <label key={option} className="flex items-center gap-2">
                      <Checkbox
                        checked={status.includes(option)}
                        onCheckedChange={() => handleCheckboxChange(setStatus, option)}
                      />
                      {option}
                    </label>
                  ))}
                </div>
              </>
            )}

            {activeTab === "Tags" && (
              <>
                <p className="text-sm text-[var(--text-head)] mb-4">Tags:</p>
                <div className="flex flex-col gap-4 text-[var(--text)] ">
                  {["Trending", "Future-Focused"].map((option) => (
                    <label key={option} className="flex items-center gap-2">
                      <Checkbox
                        checked={tags.includes(option)}
                        onCheckedChange={() => handleCheckboxChange(setTags, option)}
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

function StatsCards() {
  return (
    <div className="grid gap-4 xl:gap-1 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat, index) => (
        <Card key={index} className="xl:rounded-sm shadow-none bg-[var(--background)]">
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

function TableSection() {
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(10);
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: "ascending" | "descending";
  } | null>(null);
  const [selectedStack, setSelectedStack] = useState<
    typeof DegreeTable 
  >(DegreeTable [0] ? [DegreeTable[0]] : []);
  const [focusedId, setFocusedId] = useState<string | null>(DegreeTable[0] ? String(DegreeTable [0].id) : null);


  const sortedData = [...DegreeTable];
  if (sortConfig !== null) {
    const { key, direction } = sortConfig;
    sortedData.sort((a, b) => {
     
      let aValue: any = a[key as keyof typeof a];
      let bValue: any = b[key as keyof typeof b];

      // If the column is an array (e.g., tags) convert to comma-separated string for comparison
      if (key === "tags") {
        aValue = Array.isArray(aValue) ? aValue.join(", ") : aValue;
        bValue = Array.isArray(bValue) ? bValue.join(", ") : bValue;
      }

      // Example placeholder for a date column; keep for future extension
      if (key === "createdOn" || key === "created_on" || key === "lastUpdated" || key === "Created On") {
        aValue = Date.parse(aValue as string);
        bValue = Date.parse(bValue as string);
      }

      if (aValue < bValue) {
        return direction === "ascending" ? -1 : 1;
      }
      if (aValue > bValue) {
        return direction === "ascending" ? 1 : -1;
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

  // Select All logic
  const toggleSelectAll = () => {
    if (selectedUsers.length === currentRecords.length) {
      setSelectedUsers([]);
    } else {
      setSelectedUsers(currentRecords.map((user) => String(user.id)));
    }
  };

  const bringToTop = (userId: string) => {
    const coach = selectedStack.find((c) => String(c.id) === userId);
    if (coach) {
      setSelectedStack((prev) => [
        coach,
        ...prev.filter((c) => String(c.id) !== userId),
      ]);
      setFocusedId(userId);
    }
  };

  useEffect(() => {
    const allRows = document.querySelectorAll("tr[data-id]");

    allRows.forEach((row) => {
      const idAttr = row.getAttribute("data-id");
      const id = idAttr ?? null;
      const isInStack = selectedStack.some((us) => String(us.id) === id);
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

  const handleRowClick = (user: (typeof DegreeTable)[0]) => {
    // Double-click detected
    const exists = selectedStack.find((c) => String(c.id) === String(user.id));
    if (!exists) {
      setSelectedStack((prev) => {
        const updated = [user, ...prev];
        return updated.slice(0, 5); // limit to 5
      });
      setFocusedId(String(user.id));
    } else {
      bringToTop(String(user.id));
    }
  };

  const toggleSelectUser = (userId: string) => {
    if (selectedUsers.includes(userId)) {
      setSelectedUsers(selectedUsers.filter((id) => id !== userId));
    } else {
      setSelectedUsers([...selectedUsers, userId]);
    }
  };

  return (
    <div className="flex flex-row gap-4 w-full h-max xl:flex-nowrap flex-wrap">
      <div className="flex-1 rounded-md border bg-[var(--background)] overflow-x-auto xl:min-w-auto min-w-full">
        {/* Select All and badge UI */}
        <div className="flex h-20 items-center justify-between border-b p-4 mt-auto">
          <div className="flex items-center justify-between pl-0 p-4">
            <div className="flex items-center gap-2 border-none shadow-none">
              <Checkbox
                id="select-all-campaigns"
                checked={
                  selectedUsers.length === currentRecords.length &&
                  currentRecords.length > 0
                }
                onCheckedChange={toggleSelectAll}
              />
              <label
                htmlFor="select-all-campaigns"
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
              <div className="flex gap-2 ml-2 flex-wrap">
                <Button variant="border" size="sm" className="gap-1">
                  <Flame className="h-4 w-4" />
                  <span className="hidden sm:inline">Trending</span>
                </Button>
                <Button variant="border" size="sm" className="gap-1">
                  <TrendingUp className="h-4 w-4" />
                  <span className="hidden sm:inline">Prediction</span>
                </Button>
                <Button variant="border" size="sm" className="gap-1">
                  <Tag className="h-4 w-4" />
                  <span className="hidden sm:inline">Unmark Tags</span>
                </Button>
                <Button variant="border" size="sm" className="gap-1">
                  <SendIcon className="h-4 w-4" />
                  <span className="hidden sm:inline">Notify</span>
                </Button>
                <Button variant="delete" size="sm" className="gap-1">
                  <Ban className="h-4 w-4" />
                  <span className="hidden sm:inline">Inactive</span>
                </Button>
                <Button variant="border" size="sm" className="gap-1">
                  <FileDown className="h-4 w-4" />
                  <span className="hidden sm:inline">Export</span>
                </Button>
                <Button variant="border" size="sm" className="gap-1">
                  <Flag className="h-4 w-4" />
                  <span className="hidden sm:inline">Flag</span>
                </Button>
              </div>
            )}
          </div>
          
          {/* Search Bar */}
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
        {/* Table UI */}
        <div className="overflow-x-auto text-[var(--text)] w-full px-0 mx-0 text-low">
          <Table className="w-full caption-top border-collapse overflow-y-visible">
            <TableHeader className="bg-[var(--faded)] hover:bg-[var(--faded)] dark:bg-[var(--faded)] opacity-100">
              <TableRow>
                <TableHead className="min-w-[40px]"></TableHead>
                <TableHead
                  onClick={() => requestSort("degree_name")}
                  className="cursor-pointer text-[var(--text)] text-low"
                >
                  Degree Name{" "}
                  {sortConfig?.key === "degree_name" &&
                    (sortConfig.direction === "ascending" ? "↑" : "↓")}
                </TableHead>
                <TableHead
                  onClick={() => requestSort("level")}
                  className="cursor-pointer text-[var(--text)]"
                >
                  Level{" "}
                  {sortConfig?.key === "level" &&
                    (sortConfig.direction === "ascending" ? "↑" : "↓")}
                </TableHead>
               
                <TableHead
                  onClick={() => requestSort("stream")}
                  className="cursor-pointer text-[var(--text)]"
                >
                  Stream{" "}
                  {sortConfig?.key === "stream" &&
                    (sortConfig.direction === "ascending" ? "↑" : "↓")}
                </TableHead>
                <TableHead className="text-[var(--text)]">Status</TableHead>
                <TableHead
                  onClick={() => requestSort("created_on")}
                  className="cursor-pointer text-[var(--text)]"
                >
                 Created On {" "}
                  {sortConfig?.key === "created_on" &&
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
                    "relative z-10 cursor-pointer transition-all duration-200 group hover:bg-[var(--brand-color2)]",
                    selectedStack.some((c) => String(c.id) === String(user.id))
                      ? "bg-[var(--brand-color3)]"
                      : ""
                  )}
                  onClick={() => {
                    toggleSelectUser(String(user.id));
                    handleRowClick(user);
                  }}
                >
                  <TableCell
                    className={cn(
                      "pl-3 transition-all duration-200 border-l-4 group-hover:border-[var(--brand-color)]",
                      selectedStack.some((c) => String(c.id) === String(user.id))
                        ? focusedId === String(user.id)
                          ? "border-[var(--brand-color)]"
                          : "border-transparent"
                        : "border-transparent"
                    )}
                  >
                    <Checkbox
                      checked={selectedUsers.includes(String(user.id))}
                      onClick={(e) => e.stopPropagation()}
                      onCheckedChange={() => toggleSelectUser(String(user.id))}
                    />
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-4">
                      <div>
                        <div className="flex justify-start items-center">
                          <div className="font-medium">{user.degree_name}</div>
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-low">{user.level}</div>
                  </TableCell>
                  
                  <TableCell>
                    <div className="text-low">{user.stream}</div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="standard">{user.status}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="standard">{user.created_on}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="noborder"
                        size="sm"
                        className="bg-white border-0 shadow-none"
                      >
                        <Eye className="h-4 w-3" />
                        <span className="sr-only">View</span>
                      </Button>
                      <Button
                        variant="noborder"
                        size="sm"
                        className="bg-white border-0 shadow-none"
                      >
                        <Pen className="h-4 w-3" />
                        <span className="sr-only">Edit</span>
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
                {[ 10, 25, 50, 100].map((size) => (
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
              {sortedData.length} exams
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
          </div>
        </div>
      </div>
    </div>
  );
}



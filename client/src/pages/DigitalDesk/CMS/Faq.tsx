import { Clock, CircleArrowUp, CircleArrowDown, Search,  Users, FileCheck2, FileText, CheckCircle2, FileDown, BadgeQuestionMark,  Plus, Bell, X } from "lucide-react";
import { Card, CardHeader, CardTitle, } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuContent } from "@/components/ui/dropdown-menu";
import { ChevronDown, Filter, ChevronRight, ChevronLeft, Eye } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import {  FaqsTableData } from "@/data/Data";

import * as React from "react"
import { cn } from "@/lib/utils"
import { useEffect } from "react";
import RadioButton from "@/components/ui/Radiobutton";
import DatePick from "@/components/ui/DatePicker"




const color = "text-[var(--text)]";
const color2 = "text-[var(--text-head)]";
const Up = <CircleArrowUp className="text-[var(--green)] h-4" />;
const Down = <CircleArrowDown className="text-[var(--red)] h-4" />;
const Stats = [
  {
    title: "Total Assessments",
    value: "128",
    icon: Users,
    performance: Up,
  },
  {
    title: "Active Assessments",
    value: "87",
    icon: FileCheck2,
    performance: Down,
  },
  {
    title: "Assessments Taken",
    value: "8,947",
    icon: FileText,
    performance: Up,
  },
  {
    title: "In Progress",
    value: "563",
    icon: Clock,
    performance: Up,
  },
  {
    title: "Completed Reports Generated",
    value: "6,482",
    icon: CheckCircle2,
    performance: Up,
  },
];



export function Faq() {
  const [showFilter, setShowFilter] = useState(false);
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [currentRecords, setCurrentRecords] = useState<any[]>([]);

  // Handler for select all toggle
  const toggleSelectAll = () => {
    if (selectedRows.length === currentRecords.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(currentRecords.map((_, idx) => idx));
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold text-[var(--text-head)]">FAQs Desk</h1>
      <StatCard />
      <Buttonbar
        showFilter={showFilter}
        setShowFilter={setShowFilter}
        selectedRows={selectedRows}
        toggleSelectAll={toggleSelectAll}
        currentRecords={currentRecords}
      />
      {showFilter && <AssessFilter onClose={() => setShowFilter(false)} />}
      <FaqsTable
        selectedRows={selectedRows}
        setSelectedRows={setSelectedRows}
        setCurrentRecords={setCurrentRecords}
      />
    </div>
  );
}

interface ButtonbarProps {
  showFilter: boolean;
  setShowFilter: (show: boolean) => void;
  selectedRows: number[];
  toggleSelectAll: () => void;
  currentRecords: any[];
}

function Buttonbar({ showFilter, setShowFilter }: ButtonbarProps) {
  return (
    <div className="flex justify-between px-4 py-3 bg-[var(--background)] rounded-sm gap-4 border flex-wrap shadow-none">
      <Button variant="brand" size="new">
        <Plus className="h-3 w-3" />
        <span className="">Create New Assessment</span>
      </Button>
      <div className="flex gap-4 items-center">
        {/* Select All Toggle */}
      
        <Button variant="standard" size="new">
          <BadgeQuestionMark className="h-3 w-3" />
          <span className="">Manage Questions</span>
        </Button>
        <Button variant="standard" size="new">
          <Eye className="h-3 w-3" />
          <span className="">View Results</span>
        </Button>
        <Button variant="standard" size="new">
          <FileDown className="h-3 w-3" />
          <span className="">Export Reports</span>
        </Button>
        {/* Filter Button */}
        <Button
          variant="border"
          onClick={() => setShowFilter(true)}
          className="flex items-center gap-2 self-end min-h-[40px]"
        >
          <Filter className="h-4 w-4" />
          {showFilter ? "Hide Filters" : "Show Filters"}
        </Button>
      </div>
    </div>
  );
}

interface FilterProps {
  onClose: () => void;
}


function AssessFilter({ onClose }: FilterProps) {
  const modalRef = React.useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState("General");

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      // Do nothing if clicking inside modal
      if (modalRef.current && modalRef.current.contains(e.target as Node)) {
        return;
      }

      // Do nothing if clicking inside dropdown (Radix renders it in a portal)
      const target = e.target as HTMLElement;
      if (target.closest("[data-radix-popper-content-wrapper]")) {
        return;
      }

      onClose(); // Close modal otherwise
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  const [group, setGroup] = useState("6-8");
  const [category, setCategory] = useState("Career");
  const [status, setStatus] = useState("Active");

  const tabList = [
    "General",
    "Target Group",
    "Category",
    "Status",
    "Created By",
    "Date Range",
  ];

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
            {activeTab === "General" && (
              <>
                <label htmlFor="Gen" className="text-[var(--text)]">Enter Assessment Name :</label>
                <Input id="Gen" placeholder="Enter .." type="text" className="mt-4 w-full " />

              </>
            )}

            {activeTab === "Target Group" && (
              <>
                <p className="text-sm text-[var(--text-head)] mb-4">
                  Select the Target Group:
                </p>
                <div className="flex flex-col gap-4 text-[var(--text)] ">
                  {[
                    "6-8",
                    "9-10",
                    "11-12",
                    "UG",
                    "PG",
                    "Professionals",
                  ].map((option) => (
                    <RadioButton
                      key={option}
                      label={option}
                      value={option}
                      selected={group}
                      onChange={setGroup}
                    />
                  ))}
                </div>
              </>
            )}

            {activeTab === "Category" && (
              <>
                <p className="text-sm text-[var(--text-head)] mb-4">
                  Select the Category :
                </p>
                <div className="flex flex-col gap-4 text-[var(--text)] ">
                  {[
                    "Career",
                    "Aptitude",
                    "Personality",
                    "Skills",
                  ].map((option) => (
                    <RadioButton
                      key={option}
                      label={option}
                      value={option}
                      selected={category}
                      onChange={setCategory}
                    />
                  ))}
                </div>
              </>
            )}

            {activeTab === "Status" && (
              <>
                <p className="text-sm text-[var(--text-head)] mb-4">
                  Choose Status :
                </p>
                <div className="flex flex-col gap-4 text-[var(--text)] ">
                  {[
                    "Active",
                    "Inactive",
                    "Draft",
                  ].map((option) => (
                    <RadioButton
                      key={option}
                      label={option}
                      value={option}
                      selected={status}
                      onChange={setStatus}
                    />
                  ))}
                </div>
              </>
            )}

            {activeTab === "Created By" && (
              <>
                <label htmlFor="Gen" className="text-[var(--text)]">Enter The Creator/Coach / Admin Name :</label>
                <Input id="Gen" placeholder="Enter.." type="text" className="mt-4 w-full " />

              </>
            )}

            {activeTab === "Date Range" && (
              <>
                <label htmlFor="act" className="text-[var(--text)]">Enter the Last Assessment Date :</label>
                <div className="mt-4 min-w-full">
                  <DatePick />
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
    <div className="grid gap-4 xl:gap-1 md:grid-cols-2 xl:grid-cols-4">
      {Stats.map((stat, index) => (
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
interface FaqsTableProps {
  selectedRows: number[];
  setSelectedRows: React.Dispatch<React.SetStateAction<number[]>>;
  setCurrentRecords: (records: any[]) => void;
}

function FaqsTable({ selectedRows, setSelectedRows, setCurrentRecords }: FaqsTableProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(10);
  const [search, setSearch] = useState("");
  const [sortConfig, setSortConfig] = useState<{
    key: keyof typeof FaqsTableData[0];
    direction: "ascending" | "descending";
  } | null>(null);

  // Filtering (search by Page Title, For, Status)
  const filteredData = FaqsTableData.filter(item => {
    const searchLower = search.toLowerCase();
    return (
      item["Page Title"].toLowerCase().includes(searchLower) ||
      item.For.toLowerCase().includes(searchLower) ||
      item.Status.toLowerCase().includes(searchLower)
    );
  });

  // Sorting logic
  const sortedData = [...filteredData];
  if (sortConfig !== null) {
    sortedData.sort((a, b) => {
      let aValue = a[sortConfig.key];
      let bValue = b[sortConfig.key];
      // Special handling for Questions (number) and Last Updated (date)
      if (sortConfig.key === "Questions") {
        aValue = Number(aValue);
        bValue = Number(bValue);
      }
      if (sortConfig.key === "Last Updated") {
        aValue = Date.parse(aValue as string);
        bValue = Date.parse(bValue as string);
      }
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
  const currentRecords = sortedData.slice(indexOfFirstRecord, indexOfLastRecord);

  // Update currentRecords in parent for select toggle
  React.useEffect(() => {
    setCurrentRecords(currentRecords);
    // eslint-disable-next-line
  }, [currentRecords.length, currentPage, recordsPerPage, search, sortConfig]);

  // Select All logic (like Surveys)
  const toggleSelectAll = () => {
    if (selectedRows.length === currentRecords.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(currentRecords.map((_, idx) => idx + indexOfFirstRecord));
    }
  };

  const toggleSelectRow = (rowIdx: number) => {
    if (selectedRows.includes(rowIdx)) {
      setSelectedRows(selectedRows.filter(idx => idx !== rowIdx));
    } else {
      setSelectedRows([...selectedRows, rowIdx]);
    }
  };

  const requestSort = (key: keyof typeof FaqsTableData[0]) => {
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

  return (
    <div className="flex flex-row gap-4 w-full h-max xl:flex-nowrap flex-wrap">
      <div className="flex-1 rounded-md border bg-[var(--background)] overflow-x-auto xl:min-w-auto min-w-full">
        {/* Select All and badge UI (like Surveys) */}
        <div className="flex h-20 items-center justify-between border-b p-4 mt-auto">
          <div className="flex items-center justify-between pl-0 p-4">
            <div className="flex items-center gap-2 border-none shadow-none">
              <Checkbox
                id="select-all-faqs"
                checked={selectedRows.length === currentRecords.length && currentRecords.length > 0}
                onCheckedChange={toggleSelectAll}
              />
              <label
                htmlFor="select-all-faqs"
                className="text-sm font-medium text-[var(--text)]"
              >
                Select All
              </label>
              {selectedRows.length > 0 && (
                <>
                  <Badge variant="border" className="ml-2 ">
                    {selectedRows.length} selected
                  </Badge>
                  <div className="flex gap-2 ml-2">
                    <Button variant="border" size="sm">
                      <Bell className="h-4 w-4" />
                      Send Reminder
                    </Button>
                    <Button variant="border" size="sm">
                      <FileDown className=" h-4 w-4" />
                      Export list
                    </Button>
                    <Button variant="delete" size="sm">
                      <X className=" h-4 w-4 text-[var(--red)]" />
                      Mark Inactive / Remove
                    </Button>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="flex justify-end items-center gap-4 ">
            <div className="flex justify-around items-center border-1 rounded-md overflow-hidden bg-[var(--faded)]">
              <Input
                placeholder="Search"
                value={search}
                onChange={e => { setSearch(e.target.value); setCurrentPage(1); }}
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
                <TableHead className="min-w-[40px] text-[var(--text)]"></TableHead>
                <TableHead
                  className="text-[var(--text)] cursor-pointer"
                  onClick={() => requestSort("Page Title")}
                >
                  Page Title {sortConfig?.key === "Page Title" && (sortConfig.direction === "ascending" ? "↑" : "↓")}
                </TableHead>
                <TableHead
                  className="text-[var(--text)] cursor-pointer"
                  onClick={() => requestSort("For")}
                >
                  For {sortConfig?.key === "For" && (sortConfig.direction === "ascending" ? "↑" : "↓")}
                </TableHead>
                <TableHead
                  className="text-[var(--text)] cursor-pointer"
                  onClick={() => requestSort("Questions")}
                >
                  Questions {sortConfig?.key === "Questions" && (sortConfig.direction === "ascending" ? "↑" : "↓")}
                </TableHead>
                <TableHead
                  className="text-[var(--text)] cursor-pointer"
                  onClick={() => requestSort("Last Updated")}
                >
                  Last Updated {sortConfig?.key === "Last Updated" && (sortConfig.direction === "ascending" ? "↑" : "↓")}
                </TableHead>
                <TableHead
                  className="text-[var(--text)] cursor-pointer"
                  onClick={() => requestSort("Status")}
                >
                  Status {sortConfig?.key === "Status" && (sortConfig.direction === "ascending" ? "↑" : "↓")}
                </TableHead>
                <TableHead className="text-[var(--text)]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="overflow-visible relative z-0">
              {currentRecords.map((item, idx) => {
                const rowIdx = indexOfFirstRecord + idx;
                return (
                  <TableRow
                    key={rowIdx}
                    data-id={rowIdx}
                    className={cn(
                      "relative z-10 cursor-pointer transition-all duration-200 group hover:bg-[var(--brand-color2)]",
                      selectedRows.includes(rowIdx)
                        ? "bg-[var(--brand-color3)]"
                        : ""
                    )}
                    onClick={() => toggleSelectRow(rowIdx)}
                  >
                    <TableCell
                      className={cn(
                        "pl-3 transition-all duration-200 border-l-4 group-hover:border-[var(--brand-color)]",
                        selectedRows.includes(rowIdx)
                          ? "border-[var(--brand-color)]"
                          : "border-transparent"
                      )}
                    >
                      <Checkbox
                        checked={selectedRows.includes(rowIdx)}
                        onClick={e => e.stopPropagation()}
                        onCheckedChange={() => toggleSelectRow(rowIdx)}
                      />
                    </TableCell>
                    <TableCell>
                      <div className="font-medium">{item["Page Title"]}</div>
                    </TableCell>
                    <TableCell>{item.For}</TableCell>
                    <TableCell>{item.Questions}</TableCell>
                    <TableCell>{item["Last Updated"]}</TableCell>
                    <TableCell>
                      <Badge variant={item.Status === "Active" ? "standard" : "border"}>{item.Status}</Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        {item.Actions && (
                          <Button variant="noborder" size="sm" className="bg-[var(--background)] border-0 shadow-none">
                            {typeof item.Actions === "string" ? item.Actions : item.Actions[0]}
                          </Button>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
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
              {Math.min(indexOfLastRecord, sortedData.length)} of {sortedData.length} FAQs
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

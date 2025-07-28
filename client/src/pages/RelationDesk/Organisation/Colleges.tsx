import { Building2, UserCheck, Globe, Clock, Link, CircleArrowUp, CircleArrowDown, Search, Bell, Check, X, Flag } from "lucide-react";
import { Card, CardHeader, CardTitle, } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuContent } from "@/components/ui/dropdown-menu";
import { ChevronDown, Filter, ChevronRight, ChevronLeft, Eye } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { orgTableData } from "@/data/Data";

import * as React from "react"
import { cn } from "@/lib/utils"
import { useEffect } from "react";
//import { AnimatePresence, motion } from "framer-motion";
import photo from "@/assets/asset.jpg"
import RadioButton from "@/components/ui/Radiobutton";
import DatePick from "@/components/ui/DatePicker"
import CitySelection from "@/components/ui/CitySelection";




const color = "text-[var(--text)]";
const color2 = "text-[var(--text-head)]";
const Up = <CircleArrowUp className="text-[var(--green)] h-4" />;
const Down = <CircleArrowDown className="text-[var(--red)] h-4" />;
const orgStats = [
  {
    title: "Total Organisations",
    value: "1438",
    icon: Building2,
    performance: Up,
  },
  {
    title: "Claimed Profiles",
    value: "456",
    icon: UserCheck,
    performance: Down,
  },
  {
    title: "Public (Unclaimed)",
    value: "982",
    icon: Globe,
    performance: Up,
  },
  {
    title: "Pending Approvals",
    value: "12",
    icon: Clock,
    performance: Up,
  },
  {
    title: "Representative Assigned",
    value: "182",
    icon: Link,
    performance: Up,
  },
];



export function Colleges() {

  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-2xl font-bold text-[var(--text-head)]">Organisation</h1>
      <OrgCard />

      <Buttonbar />
      <OrganisationTable />
    </div>
  )
}

interface OrgFilterProps {
  onClose: () => void;
}

function Buttonbar() {
  const [showFilter, setShowFilter] = useState(false);
  return (
    <div className="flex justify-between px-4 py-3 bg-[var(--background)] rounded-sm gap-4 border flex-wrap shadow-none">
        <div className="flex gap-4">
      </div>
      <div className="flex gap-4">
        <Button
          variant="standard" size="new"
          onClick={() => setShowFilter(true)}
        >
          <Filter className="h-3 w-3" />
          {showFilter ? "Hide Filters" : "Show Filters"}
        </Button>
  
        {showFilter && <AdvancedFilters onClose={() => setShowFilter(false)} />}
  
      </div>
    </div>
  );
  }
  

function AdvancedFilters({ onClose }: OrgFilterProps) {
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

  const [type, setType] = useState("School");
  const [claim, setClaim] = useState("Claimed");
  const [coach, setCoach] = useState("Yes");
  const [session, setSession] = useState("10+");

  const tabList = [
    "General",
    "Type",
    "Claim Status",
    "Location",
    "Affiliated Coaches",
    "Sessions Conducted",
    "Last Activity",
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex justify-center items-center p-4">

      <div
        ref={modalRef}
        className="relative w-full max-w-[700px] h-[500px] rounded-sm bg-[var(--background)] "
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
                <label htmlFor="Gen" className="text-[var(--text)]">Enter Name/Email/Phone :</label>
                <Input id="Gen" placeholder="Enter .." type="text" className="mt-4 w-full " />

              </>
            )}

            {activeTab === "Type" && (
              <>
                <p className="text-sm text-[var(--text-head)] mb-4">
                  Select the type of Organisation you are:
                </p>
                <div className="flex flex-col gap-4 text-[var(--text)] ">
                  {[
                    "School",
                    "Institute",
                    "Collage",
                    "University",
                    "NGO",
                    "Corporation",
                  ].map((option) => (
                    <RadioButton
                      key={option}
                      label={option}
                      value={option}
                      selected={type}
                      onChange={setType}
                    />
                  ))}
                </div>
              </>
            )}

            {activeTab === "Claim Status" && (
              <>
                <p className="text-sm text-[var(--text-head)] mb-4">
                  Select Your Current Claim Status:
                </p>
                <div className="flex flex-col gap-4 text-[var(--text)] ">
                  {[
                    "Claimed",
                    "Public (Unclaimed)",
                    "Pending Approval",
                  ].map((option) => (
                    <RadioButton
                      key={option}
                      label={option}
                      value={option}
                      selected={claim}
                      onChange={setClaim}
                    />
                  ))}
                </div>
              </>
            )}

            {activeTab === "Location" && (
              <>
                <CitySelection />
              </>
            )}

            {activeTab === "Affiliated Coaches" && (
              <>
                <p className="text-sm text-[var(--text-head)] mb-4">
                  Are you Affiliated with Coaches:
                </p>
                <div className="flex flex-col gap-4 text-[var(--text)] ">
                  {[
                    "Yes",
                    "No",
                  ].map((option) => (
                    <RadioButton
                      key={option}
                      label={option}
                      value={option}
                      selected={coach}
                      onChange={setCoach}
                    />
                  ))}
                </div>
              </>
            )}

            {activeTab === "Sessions Conducted" && (
              <>
                <p className="text-sm text-[var(--text-head)] mb-4">
                  How Many Sessions have you Conducted:
                </p>
                <div className="flex flex-col gap-4 text-[var(--text)]  ">
                  {[
                    "0",
                    "1-10",
                    "10+",
                  ].map((option) => (
                    <RadioButton
                      key={option}
                      label={option}
                      value={option}
                      selected={session}
                      onChange={setSession}
                    />
                  ))}
                </div>
              </>
            )}

            {activeTab === "Last Activity" && (
              <>
                <label htmlFor="act" className="text-[var(--text)]">Enter You Last Activity Date:</label>
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

function OrgCard() {
  return (
    <div className="grid gap-2 md:grid-cols-2 xl:grid-cols-5">
      {orgStats.map((stat, index) => (
        <Card key={index} className="rounded-sm shadow-none bg-[var(--background)]">
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

const statusTabs = [
  { label: "Colleges", value: "College" },
  { label: "Companies", value: "Corporation" },
  { label: "institutes", value: "Institute" },
  { label: "NGOs", value: "NGO" },
  { label: "Schools", value: "School" },
  { label: "Universities", value: "University" },
];

function OrganisationTable() {
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(10);
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: "ascending" | "descending";
  } | null>(null);
  const [selectedStack, setSelectedStack] = useState<
    typeof orgTableData
  >(orgTableData[0] ? [orgTableData[0]] : []);
  const [focusedId, setFocusedId] = useState<string | null>(orgTableData[0]?.id || null);
  const [filterStatus, setFilterStatus] = useState("College");

  // Sorting logic
  const filteredData = orgTableData.filter(
    (entry) => entry.type === filterStatus
  );
  const sortedData = [...filteredData];
if (sortConfig !== null) {
  sortedData.sort((a, b) => {
    const aValue = a[sortConfig.key as keyof typeof a];
    const bValue = b[sortConfig.key as keyof typeof b];
    if (aValue < bValue) return sortConfig.direction === "ascending" ? -1 : 1;
    if (aValue > bValue) return sortConfig.direction === "ascending" ? 1 : -1;
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

  const handleRowClick = (user: (typeof orgTableData)[0]) => {
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
    <div className="flex flex-row gap-4 w-full h-max xl:flex-nowrap flex-wrap">
      <div className="flex-1 rounded-md border bg-[var(--background)] overflow-x-auto xl:min-w-auto min-w-full">
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
                  <Bell className="h-4 w-4" />
                  Send Reminder
                </Button>
                <Button variant="border" size="sm">
                  <Check className=" h-4 w-4 text-[var(--green)]" />
                  Approve All
                </Button>
                <Button variant="delete" size="sm">
                  <X className=" h-4 w-4 text-[var(--red)]" />
                  Block / Remove
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
                  onClick={() => requestSort("name")}
                  className="cursor-pointer text-[var(--text)] text-low"
                >
                  Organization{" "}
                  {sortConfig?.key === "name" &&
                    (sortConfig.direction === "ascending" ? "↑" : "↓")}
                </TableHead>
                <TableHead
                  onClick={() => requestSort("contact")}
                  className="cursor-pointer text-[var(--text)]"
                >
                  Contact{" "}
                  {sortConfig?.key === "contact" &&
                    (sortConfig.direction === "ascending" ? "↑" : "↓")}
                </TableHead>
                <TableHead
                  onClick={() => requestSort("location")}
                  className="cursor-pointer text-[var(--text)]"
                >
                  Location{" "}
                  {sortConfig?.key === "location" &&
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
                  onClick={() => requestSort("claimStatus")}
                  className="cursor-pointer text-[var(--text)]"
                >
                  Claimed Status{" "}
                  {sortConfig?.key === "claimStatus" &&
                    (sortConfig.direction === "ascending" ? "↑" : "↓")}
                </TableHead>
                <TableHead
                  onClick={() => requestSort("representative")}
                  className="cursor-pointer text-[var(--text)]"
                >
                  Representative{" "}
                  {sortConfig?.key === "representative" &&
                    (sortConfig.direction === "ascending" ? "↑" : "↓")}
                </TableHead>
                
                <TableHead
                  onClick={() => requestSort("registered")}
                  className="cursor-pointer text-[var(--text)]"
                >
                  Registered/Last Active{" "}
                  {sortConfig?.key === "registered" &&
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
                      "pl-3 transition-all duration-200 border-l-4 group-hover:border-[var(--brand-color)]",
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
                  <TableCell>
                    <div className="flex items-center gap-4">
                      <div className="h-14 w-14 rounded-full overflow-hidden">
                        <img
                          src={photo}
                          alt={user.name}
                          className="h-14 w-14 object-cover"
                        />
                      </div>
                      <div>
                        <div className="flex justify-start flex-col">
                          <div className="font-medium">{user.name}</div>
                          <div className="text-xs">{user.id}</div>
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-low">{user.contact.email}</div>
                    <div className="text-xs text-[var(--text)]">
                      {user.contact.phone}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">
                      <div>{`${user.location}`}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="standard">{user.type}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">{user.claimStatus}</div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">{user.representative}</div>
                  </TableCell>
                  <TableCell>
                    <div className="text-low">{user.registered}</div>
                    <div className="text-xs text-[var(--text)]">{user.lastActive}</div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="noborder"
                        size="sm"
                        className="bg-white border-0 shadow-none"
                        onClick={(e) => {
                          e.stopPropagation();
                          // navigate(`/user-details/${user.id}`) or your view logic
                        }}
                      >
                        <Eye className="h-4 w-4" />
                        <span className="sr-only">View</span>
                      </Button>

                      <Button
                        variant="noborder"
                        size="sm"
                        className="bg-[var(--background)] border-0 shadow-none"
                        onClick={(e) => {
                          e.stopPropagation();
                          // approve logic
                        }}
                      >
                        <Check className="h-4 w-3 text-[var(--green)]" />
                        <span className="sr-only">Approve</span>
                      </Button>

                      <Button
                        variant="noborder"
                        size="sm"
                        className="bg-[var(--background)] border-0 shadow-none"
                        onClick={(e) => {
                          e.stopPropagation();
                          // block logic
                        }}
                      >
                        <Flag className="h-4 w-3" />
                        <span className="sr-only">Flagk</span>
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

    </div>
  );
}

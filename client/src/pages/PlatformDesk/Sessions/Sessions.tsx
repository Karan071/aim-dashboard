import {
  Clock,
  CircleArrowUp,
  CircleArrowDown,
  Users,
  FileCheck2,
  FileText,
  CheckCircle2,
  FileDown,
  Plus,
  ChartArea,
  Download,
} from "lucide-react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
import { useState } from "react";
import * as React from "react";

import { useEffect } from "react";
import RadioButton from "@/components/ui/Radiobutton";
import { DateRangePicker } from "@/components/ui/RangeCalender";
import { InPoolTable } from "../SessionTables/InPool";
import { UpcomingTable } from "../SessionTables/Upcoming";
import { LiveTable } from "../SessionTables/Live";
import { RefundsTable } from "../SessionTables/Refunds";
import { CancelledTable } from "../SessionTables/Cancelled";
import { CompletedTable } from "../SessionTables/Completed";
import { DatePickerWithRange } from "@/components/date-picker";

const color = "text-[var(--text)]";
const color2 = "text-[var(--text-head)]";
const Up = <CircleArrowUp className="text-[var(--green)] h-4" />;
const Down = <CircleArrowDown className="text-[var(--red)] h-4" />;
const Stats = [
  {
    title: "Total",
    value: "5,248",
    icon: Users,
    performance: Up,
  },
  {
    title: "In Pool",
    value: "3,780",
    icon: FileCheck2,
    performance: Down,
  },
  {
    title: "Live",
    value: "341",
    icon: FileText,
    performance: Up,
  },
  {
    title: "Upcoming",
    value: "446",
    icon: Clock,
    performance: Up,
  },
  {
    title: "No-Show",
    value: "12",
    icon: CheckCircle2,
    performance: Up,
  },
  {
    title: "Refunded",
    value: "298",
    icon: Clock,
    performance: Up,
  },
];

export function Sessions() {
  return (
    <div className="flex flex-col gap-2">
      <Topbar />
      <StatCard />
      <Buttonbar />

      <SessionTabs />
    </div>
  );
}

function Topbar() {
  return (
    <div className="flex justify-between items-center px-4 py-3 bg-[var(--background)] rounded-sm gap-4 border flex-wrap shadow-none">
      <div>
        <h1 className="text-2xl font-bold text-[var(--text-head)]">Sessions</h1>
      </div>
      <div>
        <DatePickerWithRange />
      </div>
    </div>
  );
}

function Buttonbar() {
  const [showFilter, setShowFilter] = useState(false);
  return (
    <div className="flex justify-between px-4 py-3 bg-[var(--background)] rounded-sm gap-4 border flex-wrap shadow-none">
      <Button variant="brand" size="new">
        <Plus className="h-3 w-3" />
        <span className=""> Create Session</span>
      </Button>
      <div className="flex gap-4 flex-wrap">
        <Button variant="standard" size="new">
          <FileDown className="h-3 w-3" />
          <span className="">Manage Pool</span>
        </Button>
        <Button variant="standard" size="new">
          <ChartArea className="h-3 w-3" />
          <span className="">Categories</span>
        </Button>
        <Button variant="standard" size="new">
          <Download className="h-3 w-3" />
          <span className="">Export</span>
        </Button>
        <Button
          variant="standard"
          size="new"
          onClick={() => setShowFilter(true)}
        >
          <Filter className="h-3 w-3" />
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
  const [activeTab, setActiveTab] = useState("General");

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

  const [coach, setCoach] = useState("Consultant");
  const [session, setSession] = useState("1:1");
  const [booking, setBooking] = useState("Booked");
  const [refund, setRefund] = useState("Not Requested");
  const [mode, setMode] = useState("Manual");

  const tabList = [
    "General",
    "Coach Type",
    "Session Type",
    "Booking Status",
    "Refund Status",
    "Date Range",
    "Acceptance Mode",
  ];

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
                      ? "bg-[var(--brand-color3)] dark:bg-[var(--brand-color2)] text-[var(--brand-color)] dark:text-[var(--text-head)] font-semibold border-[var(--brand-color)]"
                      : "text-[var(--text)] hover:bg-[var(--faded)] border-transparent"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="p-6 overflow-y-auto relative w-full">
            {activeTab === "General" && (
              <>
                <label htmlFor="Gen" className="text-[var(--text)]">
                  Search by Name :
                </label>
                <Input
                  id="Gen"
                  placeholder="Enter .."
                  type="text"
                  className="mt-4 w-full "
                />
              </>
            )}

            {activeTab === "Coach Type" && (
              <>
                <p className="text-sm text-[var(--text-head)] mb-4">
                  Select the Coach Type:
                </p>
                <div className="flex flex-col gap-4 text-[var(--text)] ">
                  {["Consultant", "Mentor", "Educator", "Counselor"].map(
                    (option) => (
                      <RadioButton
                        key={option}
                        label={option}
                        value={option}
                        selected={coach}
                        onChange={setCoach}
                      />
                    )
                  )}
                </div>
              </>
            )}

            {activeTab === "Session Type" && (
              <>
                <p className="text-sm text-[var(--text-head)] mb-4">
                  Select the Session Type :
                </p>
                <div className="flex flex-col gap-4 text-[var(--text)] ">
                  {["1:1", "In-Person", "Ask Question", "Instant", "B2B"].map(
                    (option) => (
                      <RadioButton
                        key={option}
                        label={option}
                        value={option}
                        selected={session}
                        onChange={setSession}
                      />
                    )
                  )}
                </div>
              </>
            )}

            {activeTab === "Booking Status" && (
              <>
                <p className="text-sm text-[var(--text-head)] mb-4">
                  Select Booking Status :
                </p>
                <div className="flex flex-col gap-4 text-[var(--text)] ">
                  {["Booked", "Completed", "Missed", "Cancelled"].map(
                    (option) => (
                      <RadioButton
                        key={option}
                        label={option}
                        value={option}
                        selected={booking}
                        onChange={setBooking}
                      />
                    )
                  )}
                </div>
              </>
            )}

            {activeTab === "Refund Status" && (
              <>
                <p className="text-sm text-[var(--text-head)] mb-4">
                  Select Refund Status :
                </p>
                <div className="flex flex-col gap-4 text-[var(--text)] ">
                  {["Not Requested", "Requested", "Approved", "Denied"].map(
                    (option) => (
                      <RadioButton
                        key={option}
                        label={option}
                        value={option}
                        selected={refund}
                        onChange={setRefund}
                      />
                    )
                  )}
                </div>
              </>
            )}

            {activeTab === "Acceptance Mode" && (
              <>
                <p className="text-sm text-[var(--text-head)] mb-4">
                  Select Acceptance Mode :
                </p>
                <div className="flex flex-col gap-4 text-[var(--text)] ">
                  {["Manual", "Auto"].map((option) => (
                    <RadioButton
                      key={option}
                      label={option}
                      value={option}
                      selected={mode}
                      onChange={setMode}
                    />
                  ))}
                </div>
              </>
            )}

            {activeTab === "Date Range" && (
              <>
                <label htmlFor="act" className="text-[var(--text)]">
                  Enter the Last Assessment Date :
                </label>
                <div className="mt-4 min-w-full">
                  <DateRangePicker />
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
    <div className="grid gap-2 md:grid-cols-2 xl:grid-cols-6">
      {Stats.map((stat, index) => (
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

const tabs = [
  { label: "In Pool", value: "inPool" },
  { label: "Upcoming", value: "upcoming" },
  { label: "Live", value: "live" },
  { label: "Completed", value: "completed" },
  { label: "Cancelled", value: "cancelled" },
  { label: "Refunded", value: "refunded" },
];

function SessionTabs() {
  const [activeTab, setActiveTab] = useState("inPool");

  const renderTable = () => {
    switch (activeTab) {
      case "inPool":
        return <InPoolTable />;
      case "upcoming":
        return <UpcomingTable />;
      case "live":
        return <LiveTable />;
      case "completed":
        return <CompletedTable />;
      case "cancelled":
        return <CancelledTable />;
      case "refunded":
        return <RefundsTable />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full">
      {/* Tabs */}
      <div className="flex">
        {tabs.map((tab) => (
          <Button
            key={tab.value}
            variant={activeTab === tab.value ? "brand" : "border"}
            onClick={() => setActiveTab(tab.value)}
            className="border-b-2 rounded-t-sm rounded-b-none"
          >
            {tab.label}
          </Button>
        ))}
      </div>

      {/* Active Table */}
      <div>{renderTable()}</div>
    </div>
  );
}

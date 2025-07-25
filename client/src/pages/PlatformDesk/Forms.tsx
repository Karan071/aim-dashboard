import { useState } from "react";
import { FormsTable } from "@/pages/PlatformDesk/FormsWrapper/Form";
import { FormStats } from "@/pages/PlatformDesk/FormsWrapper/Form";
import { Formbar } from "@/pages/PlatformDesk/FormsWrapper/Form";
import { EXCustomInputTable } from "@/pages/PlatformDesk/FormsWrapper/CustomForm";
import { CustomInputStats } from "@/pages/PlatformDesk/FormsWrapper/CustomForm";
import { CustomInputbar } from "@/pages/PlatformDesk/FormsWrapper/CustomForm";

export function FormTabsWrapper() {
  const [activeTab, setActiveTab] = useState("forms");

  return (
    <div className="flex flex-col gap-6">
      {activeTab === "forms" && (
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold text-[var(--text-head)]">Forms</h1>
          <FormStats />
          <Formbar />
          <div className="">
            <div className="inline-flex items-center justify-center rounded-b-none rounded-l-sm  rounded-r-sm bg-[var(--background)] border text-[var(--text)]">
              <button
                className={`inline-flex items-center justify-center whitespace-nowrap rounded-b-none rounded-l-sm rounded-r-sm px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${
                  activeTab === "forms" ? "bg-[var(--brand-color)] text-white " : ""
                }`}
                onClick={() => setActiveTab("forms")}
              >
                Forms
              </button>
              <button
                className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 
                  `}
                onClick={() => setActiveTab("custom-input")}
              >
                Custom Input
              </button>
            </div>
            <FormsTable />
          </div>
          
        </div>
      )}

      {activeTab === "custom-input" && (
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold text-[var(--text-head)]">Custom Input</h1>
          <CustomInputStats />
          <CustomInputbar/>
          <div className="">
            <div className="inline-flex items-center justify-center rounded-b-none rounded-l-sm  rounded-r-sm bg-[var(--background)] border text-[var(--text)]">
              <button
                className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 `}
                onClick={() => setActiveTab("forms")}
              >
                Forms
              </button>
              <button
                className={`inline-flex items-center justify-center whitespace-nowrap rounded-b-none rounded-l-sm rounded-r-sm px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${
                  activeTab === "custom-input" ? "bg-[var(--brand-color)] text-white " : ""
                }`}
                onClick={() => setActiveTab("custom-input")}
              >
                Custom Input
              </button>
            </div>
          <EXCustomInputTable />
          </div>
        </div>
      )}
    </div>
  );
}
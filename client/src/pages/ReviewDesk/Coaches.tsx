import { Button } from "@/components/ui/button";
import {
    Search,
    Check,
    X,
    FileDown,
    Eye,
} from "lucide-react";
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
import { CoachReview } from "@/data/Data";
//import { motion, AnimatePresence } from "motion/react";
import { useEffect } from "react";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";


export function Coaches() {
    return (
        <div className="flex gap-4 flex-col">
            <h1 className="text-2xl font-bold text-[var(--text-head)]">Coaches</h1>
            <CoachTable />
        </div>
    )
}



function CoachTable() {
    const [selectedUsers, setSelectedUsers] = useState<number[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage, setRecordsPerPage] = useState(10);
    const [sortConfig, setSortConfig] = useState<{
        key: string;
        direction: "ascending" | "descending";
    } | null>(null);
    const [selectedStack, setSelectedStack] = useState<
        typeof CoachReview
    >(CoachReview[0] ? [CoachReview[0]] : []);
    const [focusedId, setFocusedId] = useState<number | null>(CoachReview[0]?.id || null);

    // Sorting logic
    const sortedData = [...CoachReview];
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
                currentRecords.map((user): number => user.id)
            );
        }
    };

    const bringToTop = (userId: number) => {
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
            const id = Number(row.getAttribute("data-id"));
            const isInStack = selectedStack.some((card) => card.id === id);
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

    {/*const removeCoach = (userId: number) => {
    setSelectedCoachStack((prev) => prev.filter((c) => c.id !== userId));
    if (focusedCoachId === userId) {
      setFocusedCoachId(null);
    }
  };*/}

    const handleRowClick = (user: (typeof CoachReview)[0]) => {
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

    const toggleSelectUser = (userId: number) => {
        if (selectedUsers.includes(userId)) {
            setSelectedUsers(selectedUsers.filter((id) => id !== userId));
        } else {
            setSelectedUsers([...selectedUsers, userId]);
        }
    };

    return (
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
                            <div className="flex gap-2 flex-wrap">        {/*wrap */}
                                <Button variant="border" size="sm">
                                    <Check className="h-4 w-4 text-[var(--green)]" />
                                    Approve
                                </Button>
                                <Button variant="delete" size="sm">
                                    <X className="h-4 w-4 text-[var(--red)]" />
                                    Reject
                                </Button>
                                <Button variant="border" size="sm">
                                    <FileDown className="h-4 w-4" />
                                    Export
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
                                <TableHead onClick={() => requestSort("name")} className="cursor-pointer text-[var(--text)]">
                                    Name {sortConfig?.key === "name" && (sortConfig.direction === "ascending" ? "↑" : "↓")}
                                </TableHead>
                                <TableHead onClick={() => requestSort("email")} className="cursor-pointer text-[var(--text)]">
                                    Email {sortConfig?.key === "email" && (sortConfig.direction === "ascending" ? "↑" : "↓")}
                                </TableHead>
                                <TableHead onClick={() => requestSort("phone")} className="cursor-pointer text-[var(--text)]">
                                    Phone {sortConfig?.key === "phone" && (sortConfig.direction === "ascending" ? "↑" : "↓")}
                                </TableHead>
                                <TableHead onClick={() => requestSort("speciality")} className="cursor-pointer text-[var(--text)]">
                                    Speciality {sortConfig?.key === "speciality" && (sortConfig.direction === "ascending" ? "↑" : "↓")}
                                </TableHead>
                                <TableHead onClick={() => requestSort("submittedOn")} className="cursor-pointer text-[var(--text)]">
                                    Submitted {sortConfig?.key === "submittedOn" && (sortConfig.direction === "ascending" ? "↑" : "↓")}
                                </TableHead>
                                <TableHead onClick={() => requestSort("profile")} className="cursor-pointer text-[var(--text)]">
                                    Profile {sortConfig?.key === "profile" && (sortConfig.direction === "ascending" ? "↑" : "↓")}
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
                                    <TableCell className="font-medium">{user.name}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell>{user.phone}</TableCell>
                                    <TableCell><Badge variant="border">{user.speciality}</Badge></TableCell>
                                    <TableCell>{user.submittedOn}</TableCell>
                                    <TableCell>
                                        <Badge variant="border">
                                            {user.Profile}
                                        </Badge>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-2">
                                            <Button
                                                variant="noborder"
                                                size="sm"
                                                className="bg-white border-0 shadow-none"
                                            // onClick={() => navigate(`/user-details/${user.id}`)}
                                            >
                                                <Eye className="h-4 w-3" />
                                                <span className="sr-only">View</span>
                                            </Button>
                                            <Button variant="noborder" size="sm" className="bg-[var(--background)] border-0 shadow-none">
                                                <Check className="h-4 w-3 text-[var(--green)]" />
                                                <span className="sr-only">Approve</span>
                                            </Button>

                                            <Button variant="noborder" size="sm" className="bg-[var(--background)] border-0 shadow-none">
                                                <X className="h-4 w-3 text-[var(--red)]" />
                                                <span className="sr-only">Block</span>
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
    );
}

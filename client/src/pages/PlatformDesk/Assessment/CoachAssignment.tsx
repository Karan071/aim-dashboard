import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Users, Edit, Trash, Eye, UserCheck } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function CoachAssignment() {
  const assignments = [
    {
      id: "ASS001",
      assessmentName: "Career Aptitude Test",
      coachName: "Dr. Priya Singh",
      coachEmail: "priya.singh@aimshala.com",
      specialization: "Career Counseling",
      assignedDate: "10 Jul 2025",
      status: "Active",
      studentsCount: 15
    },
    {
      id: "ASS002",
      assessmentName: "Engineering Skill Test",
      coachName: "Prof. Rajesh Kumar",
      coachEmail: "rajesh.kumar@aimshala.com",
      specialization: "Engineering",
      assignedDate: "12 Jul 2025",
      status: "Active",
      studentsCount: 8
    },
    {
      id: "ASS003",
      assessmentName: "Medical Readiness Test",
      coachName: "Dr. Meera Iyer",
      coachEmail: "meera.iyer@aimshala.com",
      specialization: "Medical",
      assignedDate: "15 Jul 2025",
      status: "Active",
      studentsCount: 12
    }
  ];

  const coaches = [
    { id: "COACH001", name: "Dr. Priya Singh", specialization: "Career Counseling" },
    { id: "COACH002", name: "Prof. Rajesh Kumar", specialization: "Engineering" },
    { id: "COACH003", name: "Dr. Meera Iyer", specialization: "Medical" },
    { id: "COACH004", name: "Adv. Sanjay Verma", specialization: "Law" },
    { id: "COACH005", name: "Prof. Anita Desai", specialization: "Management" }
  ];

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[var(--text-head)]">Coach Assignment</h1>
        <Button variant="brand" size="new">
          <Plus className="h-3 w-3" />
          <span>Assign Coach</span>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="bg-[var(--background)]">
          <CardHeader>
            <CardTitle className="text-lg">Current Assignments</CardTitle>
          </CardHeader>
          <div className="p-4">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Assessment</TableHead>
                  <TableHead>Coach</TableHead>
                  <TableHead>Specialization</TableHead>
                  <TableHead>Students</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {assignments.map((assignment) => (
                  <TableRow key={assignment.id}>
                    <TableCell className="font-medium">{assignment.assessmentName}</TableCell>
                    <TableCell>
                      <div>
                        <div className="font-medium">{assignment.coachName}</div>
                        <div className="text-sm text-[var(--text)]">{assignment.coachEmail}</div>
                      </div>
                    </TableCell>
                    <TableCell>{assignment.specialization}</TableCell>
                    <TableCell>{assignment.studentsCount}</TableCell>
                    <TableCell>
                      <Badge variant="standard">{assignment.status}</Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button variant="noborder" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="noborder" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="noborder" size="sm">
                          <Trash className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Card>

        <Card className="bg-[var(--background)]">
          <CardHeader>
            <CardTitle className="text-lg">Available Coaches</CardTitle>
          </CardHeader>
          <div className="p-4">
            <div className="space-y-4">
              {coaches.map((coach) => (
                <div key={coach.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <div className="font-medium">{coach.name}</div>
                    <div className="text-sm text-[var(--text)]">{coach.specialization}</div>
                  </div>
                  <Button variant="border" size="sm">
                    <UserCheck className="h-4 w-4 mr-2" />
                    Assign
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
} 
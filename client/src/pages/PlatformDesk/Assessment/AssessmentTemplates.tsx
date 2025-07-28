import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, FileText, Edit, Trash, Eye } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export function AssessmentTemplates() {
  const templates = [
    {
      id: "TEMP001",
      name: "Career Aptitude Template",
      category: "Career",
      segments: "9-10, UG, Professional",
      questions: 50,
      duration: "60 min",
      status: "Active",
      createdBy: "Dr. Priya Singh",
      createdOn: "15 Jul 2025"
    },
    {
      id: "TEMP002",
      name: "Engineering Skills Template",
      category: "Engineering",
      segments: "UG",
      questions: 45,
      duration: "90 min",
      status: "Active",
      createdBy: "Prof. Rajesh Kumar",
      createdOn: "12 Jul 2025"
    },
    {
      id: "TEMP003",
      name: "Medical Readiness Template",
      category: "Medical",
      segments: "PG",
      questions: 60,
      duration: "120 min",
      status: "Draft",
      createdBy: "Dr. Meera Iyer",
      createdOn: "10 Jul 2025"
    }
  ];

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[var(--text-head)]">Assessment Templates</h1>
        <Button variant="brand" size="new">
          <Plus className="h-3 w-3" />
          <span>Create Template</span>
        </Button>
      </div>

      <Card className="bg-[var(--background)]">
        <CardHeader>
          <CardTitle className="text-lg">Template Management</CardTitle>
        </CardHeader>
        <div className="p-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Template Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Segments</TableHead>
                <TableHead>Questions</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Created By</TableHead>
                <TableHead>Created On</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {templates.map((template) => (
                <TableRow key={template.id}>
                  <TableCell className="font-medium">{template.name}</TableCell>
                  <TableCell>{template.category}</TableCell>
                  <TableCell>{template.segments}</TableCell>
                  <TableCell>{template.questions}</TableCell>
                  <TableCell>{template.duration}</TableCell>
                  <TableCell>
                    <Badge variant={template.status === "Active" ? "standard" : "border"}>
                      {template.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{template.createdBy}</TableCell>
                  <TableCell>{template.createdOn}</TableCell>
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
    </div>
  );
} 
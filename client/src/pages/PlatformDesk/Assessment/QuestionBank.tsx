import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Edit, Trash, Eye, Search, Filter } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

export function QuestionBank() {
  const questions = [
    {
      id: "Q001",
      question: "What is the primary goal of career counseling?",
      category: "Career Counseling",
      difficulty: "Medium",
      type: "Multiple Choice",
      options: ["A", "B", "C", "D"],
      correctAnswer: "A",
      tags: ["career", "counseling", "guidance"],
      createdBy: "Dr. Priya Singh",
      createdOn: "15 Jul 2025",
      status: "Active"
    },
    {
      id: "Q002",
      question: "Which engineering discipline focuses on software development?",
      category: "Engineering",
      difficulty: "Easy",
      type: "Multiple Choice",
      options: ["A", "B", "C", "D"],
      correctAnswer: "C",
      tags: ["engineering", "software", "technology"],
      createdBy: "Prof. Rajesh Kumar",
      createdOn: "12 Jul 2025",
      status: "Active"
    },
    {
      id: "Q003",
      question: "What are the key components of medical ethics?",
      category: "Medical",
      difficulty: "Hard",
      type: "Essay",
      options: [],
      correctAnswer: "Essay answer",
      tags: ["medical", "ethics", "healthcare"],
      createdBy: "Dr. Meera Iyer",
      createdOn: "10 Jul 2025",
      status: "Draft"
    }
  ];

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[var(--text-head)]">Question Bank</h1>
        <Button variant="brand" size="new">
          <Plus className="h-3 w-3" />
          <span>Add Question</span>
        </Button>
      </div>

      <div className="flex gap-4 items-center">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[var(--text)]" />
          <Input
            placeholder="Search questions..."
            className="pl-10"
          />
        </div>
        <Button variant="standard" size="new">
          <Filter className="h-3 w-3" />
          <span>Filter</span>
        </Button>
      </div>

      <Card className="bg-[var(--background)]">
        <CardHeader>
          <CardTitle className="text-lg">Question Management</CardTitle>
        </CardHeader>
        <div className="p-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Question</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Difficulty</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Tags</TableHead>
                <TableHead>Created By</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {questions.map((question) => (
                <TableRow key={question.id}>
                  <TableCell className="max-w-xs">
                    <div className="truncate">{question.question}</div>
                  </TableCell>
                  <TableCell>{question.category}</TableCell>
                  <TableCell>
                    <Badge 
                      variant={
                        question.difficulty === "Easy" ? "standard" : 
                        question.difficulty === "Medium" ? "border" : "delete"
                      }
                    >
                      {question.difficulty}
                    </Badge>
                  </TableCell>
                  <TableCell>{question.type}</TableCell>
                  <TableCell>
                    <div className="flex gap-1 flex-wrap">
                      {question.tags.slice(0, 2).map((tag, index) => (
                        <Badge key={index} variant="border" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {question.tags.length > 2 && (
                        <Badge variant="border" className="text-xs">
                          +{question.tags.length - 2}
                        </Badge>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>{question.createdBy}</TableCell>
                  <TableCell>
                    <Badge variant={question.status === "Active" ? "standard" : "border"}>
                      {question.status}
                    </Badge>
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
    </div>
  );
} 
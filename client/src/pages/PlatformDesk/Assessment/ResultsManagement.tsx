import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileCheck2, Download, Eye, BarChart3, TrendingUp, TrendingDown } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

export function ResultsManagement() {
  const results = [
    {
      id: "RES001",
      assessmentName: "Career Aptitude Test",
      studentName: "Rahul Sharma",
      studentId: "USR001",
      score: 85,
      totalQuestions: 50,
      correctAnswers: 42,
      timeTaken: "45 min",
      completedDate: "10 Jul 2025",
      status: "Completed",
      performance: "Good"
    },
    {
      id: "RES002",
      assessmentName: "Engineering Skill Test",
      studentName: "Anjali Patel",
      studentId: "USR002",
      score: 92,
      totalQuestions: 45,
      correctAnswers: 41,
      timeTaken: "75 min",
      completedDate: "12 Jul 2025",
      status: "Completed",
      performance: "Excellent"
    },
    {
      id: "RES003",
      assessmentName: "Medical Readiness Test",
      studentName: "Vikram Singh",
      studentId: "USR003",
      score: 78,
      totalQuestions: 60,
      correctAnswers: 47,
      timeTaken: "110 min",
      completedDate: "15 Jul 2025",
      status: "Completed",
      performance: "Average"
    }
  ];

  const stats = [
    {
      title: "Total Results",
      value: "156",
      icon: FileCheck2,
      trend: "up",
      percentage: "+12%"
    },
    {
      title: "Average Score",
      value: "82%",
      icon: BarChart3,
      trend: "up",
      percentage: "+5%"
    },
    {
      title: "Completion Rate",
      value: "94%",
      icon: TrendingUp,
      trend: "up",
      percentage: "+3%"
    },
    {
      title: "Failed Attempts",
      value: "8",
      icon: TrendingDown,
      trend: "down",
      percentage: "-15%"
    }
  ];

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[var(--text-head)]">Results Management</h1>
        <Button variant="brand" size="new">
          <Download className="h-3 w-3" />
          <span>Export Results</span>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index} className="bg-[var(--background)]">
            <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-[var(--text)]">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-[var(--text)]" />
            </CardHeader>
            <div className="px-6 pb-2">
              <div className="text-2xl font-bold text-[var(--text-head)]">{stat.value}</div>
              <div className={`text-xs flex items-center ${
                stat.trend === "up" ? "text-[var(--green)]" : "text-[var(--red)]"
              }`}>
                {stat.trend === "up" ? "↗" : "↘"} {stat.percentage}
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Card className="bg-[var(--background)]">
        <CardHeader>
          <CardTitle className="text-lg">Assessment Results</CardTitle>
        </CardHeader>
        <div className="p-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Assessment</TableHead>
                <TableHead>Student</TableHead>
                <TableHead>Score</TableHead>
                <TableHead>Performance</TableHead>
                <TableHead>Time Taken</TableHead>
                <TableHead>Completed Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {results.map((result) => (
                <TableRow key={result.id}>
                  <TableCell className="font-medium">{result.assessmentName}</TableCell>
                  <TableCell>
                    <div>
                      <div className="font-medium">{result.studentName}</div>
                      <div className="text-sm text-[var(--text)]">{result.studentId}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="font-medium">{result.score}%</div>
                    <div className="text-sm text-[var(--text)]">
                      {result.correctAnswers}/{result.totalQuestions}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge 
                      variant={
                        result.performance === "Excellent" ? "standard" : 
                        result.performance === "Good" ? "border" : "delete"
                      }
                    >
                      {result.performance}
                    </Badge>
                  </TableCell>
                  <TableCell>{result.timeTaken}</TableCell>
                  <TableCell>{result.completedDate}</TableCell>
                  <TableCell>
                    <Badge variant="standard">{result.status}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="noborder" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="noborder" size="sm">
                        <Download className="h-4 w-4" />
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
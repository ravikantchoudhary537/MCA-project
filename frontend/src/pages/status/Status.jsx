import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const Status = () => {
  // Sample data (10 rows)
  const data = [
    {
      id: 1,
      formValue: "Form A",
      createdAt: "2024-12-01",
      createdBy: "User 1",
      status: "Completed",
    },
    {
      id: 2,
      formValue: "Form B",
      createdAt: "2024-12-02",
      createdBy: "User 2",
      status: "Pending",
    },
    {
      id: 3,
      formValue: "Form C",
      createdAt: "2024-12-03",
      createdBy: "User 3",
      status: "In Progress",
    },
    {
      id: 4,
      formValue: "Form D",
      createdAt: "2024-12-04",
      createdBy: "User 4",
      status: "Completed",
    },
    {
      id: 5,
      formValue: "Form E",
      createdAt: "2024-12-05",
      createdBy: "User 5",
      status: "Pending",
    },
    {
      id: 6,
      formValue: "Form F",
      createdAt: "2024-12-06",
      createdBy: "User 6",
      status: "Completed",
    },
    {
      id: 7,
      formValue: "Form G",
      createdAt: "2024-12-07",
      createdBy: "User 7",
      status: "In Progress",
    },
    {
      id: 8,
      formValue: "Form H",
      createdAt: "2024-12-08",
      createdBy: "User 8",
      status: "Completed",
    },
    {
      id: 9,
      formValue: "Form I",
      createdAt: "2024-12-09",
      createdBy: "User 9",
      status: "Pending",
    },
    {
      id: 10,
      formValue: "Form J",
      createdAt: "2024-12-10",
      createdBy: "User 10",
      status: "Completed",
    },
  ];

  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Calculate paginated data
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = data.slice(indexOfFirstItem, indexOfLastItem);

  // Handle page changes
  const handleNext = () => {
    if (currentPage < Math.ceil(data.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="p-4">
      <Select>
        <SelectTrigger className="w-[180px] mr-4">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Success</SelectItem>
          <SelectItem value="dark">Pending</SelectItem>
          <SelectItem value="system">Failed</SelectItem>
        </SelectContent>
      </Select>

      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Id</TableHead>
            <TableHead>Form Value</TableHead>
            <TableHead className="text-right">Created At</TableHead>
            <TableHead className="text-right">Created By</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentData.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">{item.id}</TableCell>
              <TableCell>{item.formValue}</TableCell>
              <TableCell className="text-right">{item.createdAt}</TableCell>
              <TableCell className="text-right">{item.createdBy}</TableCell>
              <TableCell>{item.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Pagination Buttons */}
      <div className="flex justify-between mt-4">
        <Button
          variant="outline"
          onClick={handlePrevious}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          onClick={handleNext}
          disabled={currentPage === Math.ceil(data.length / itemsPerPage)}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Status;

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
import { Button } from "@/components/ui/button";

const Payment = () => {
  // Sample data (10 rows)
  const data = [
    { id: 1, paymentValue: "$100", createdAt: "2024-12-01", createdBy: "User 1", paymentStatus: "Paid" },
    { id: 2, paymentValue: "$150", createdAt: "2024-12-02", createdBy: "User 2", paymentStatus: "Pending" },
    { id: 3, paymentValue: "$200", createdAt: "2024-12-03", createdBy: "User 3", paymentStatus: "Paid" },
    { id: 4, paymentValue: "$50", createdAt: "2024-12-04", createdBy: "User 4", paymentStatus: "Pending" },
    { id: 5, paymentValue: "$75", createdAt: "2024-12-05", createdBy: "User 5", paymentStatus: "Failed" },
    { id: 6, paymentValue: "$120", createdAt: "2024-12-06", createdBy: "User 6", paymentStatus: "Paid" },
    { id: 7, paymentValue: "$180", createdAt: "2024-12-07", createdBy: "User 7", paymentStatus: "Pending" },
    { id: 8, paymentValue: "$250", createdAt: "2024-12-08", createdBy: "User 8", paymentStatus: "Paid" },
    { id: 9, paymentValue: "$300", createdAt: "2024-12-09", createdBy: "User 9", paymentStatus: "Pending" },
    { id: 10, paymentValue: "$400", createdAt: "2024-12-10", createdBy: "User 10", paymentStatus: "Failed" },
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
      <Table>
        <TableCaption>A list of recent payment transactions.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Payment Value</TableHead>
            <TableHead className="text-right">Created At</TableHead>
            <TableHead className="text-right">Created By</TableHead>
            <TableHead>Payment Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentData.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">{item.id}</TableCell>
              <TableCell>{item.paymentValue}</TableCell>
              <TableCell className="text-right">{item.createdAt}</TableCell>
              <TableCell className="text-right">{item.createdBy}</TableCell>
              <TableCell>{item.paymentStatus}</TableCell>
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

export default Payment;

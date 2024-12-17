import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"; 
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import NICCodeSearch from "./NICCodeSearch";
import { Button } from "@/components/ui/button"; 
const SPICePartA = () => {
  const [firstSelection, setFirstSelection] = useState("");
  const [secondSelection, setSecondSelection] = useState("");
  const [thirdSelection, setThirdSelection] = useState("");
  const [fourthSelection, setFourthSelection] = useState("");

  const firstOptions = ["Producer Company", "Unlimited Company", "Private Company", "IFSC Company", "Section 8 Company", "Nidhi Company", "New Company(Other)", "Part 1 Section 8 Company", "Part 1 LLP to Company", "Part 1 Firm Company", "Part 1 Other"];
  const secondOptions = ["Public", "Private"];
  const thirdOptions = ["Option X", "Option Y", "Option Z"];
  const fourthOptions = ["Option Alpha", "Option Beta", "Option Gamma"];

  const handleFirstSelect = (value) => {
    setFirstSelection(value);
    setSecondSelection(""); 
    setThirdSelection("");  
    setFourthSelection(""); 
  };

  const handleSecondSelect = (value) => {
    setSecondSelection(value);
    setThirdSelection(""); 
    setFourthSelection(""); 
  };

  const handleThirdSelect = (value) => {
    setThirdSelection(value);
    setFourthSelection(""); 
  };

  const handleFourthSelect = (value) => {
    setFourthSelection(value);
  };

  // Handle submit action
  const handleSubmit = () => {
    alert("Form submitted!");
  };

  return (
    <>
      <div className="p-4 dark:bg-gray-800 dark:text-white">
        <p className="mb-4 text-gray-500 dark:text-gray-400">All fields marked in * are mandatory</p>
        <h1 className="text-xl font-semibold mb-6">Company Information</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
          <div className="w-full">
            <Label htmlFor="firstSelect" className="block text-sm font-medium mb-2">*Type of Company: </Label>
            <Select onValueChange={handleFirstSelect} value={firstSelection}>
              <SelectTrigger id="firstSelect">
                <SelectValue placeholder="Select Type" />
              </SelectTrigger>  
              <SelectContent>
                {firstOptions.map((option, index) => (
                  <SelectItem key={index} value={option} className="flex gap-4">{option}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="w-full">
            <Label htmlFor="secondSelect" className="block text-sm font-medium mb-2">*Class of Company: </Label>
            <Select onValueChange={handleSecondSelect} value={secondSelection} disabled={!firstSelection}>
              <SelectTrigger id="secondSelect">
                <SelectValue placeholder="Select Class" />
              </SelectTrigger>
              <SelectContent>
                {secondOptions.map((option, index) => (
                  <SelectItem key={index} value={option}>{option}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="w-full">
            <Label htmlFor="thirdSelect" className="block text-sm font-medium mb-2">*Category of Company: </Label>
            <Select onValueChange={handleThirdSelect} value={thirdSelection} disabled={!secondSelection}>
              <SelectTrigger id="thirdSelect">
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent>
                {thirdOptions.map((option, index) => (
                  <SelectItem key={index} value={option}>{option}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="w-full md:w-[35%] mb-6">
          <Label htmlFor="fourthSelect" className="block text-sm font-medium mb-2">Sub Category of Company: </Label>
          <Select onValueChange={handleFourthSelect} value={fourthSelection} disabled={!thirdSelection}>
            <SelectTrigger id="fourthSelect">
              <SelectValue placeholder="Select Sub Category" />
            </SelectTrigger>
            <SelectContent>
              {fourthOptions.map((option, index) => (
                <SelectItem key={index} value={option}>{option}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="w-full md:w-[35%]">
          <NICCodeSearch />
        </div>

        <div className="w-full space-y-4 bg-gray-200 dark:bg-gray-700 p-5 mt-6">
          <div className="flex flex-col md:flex-row space-x-4">
            <div className="flex-1">
              <Label htmlFor="nicCode">*Main NIC Code</Label>
              <Input id="nicCode" name="nicCode" placeholder="Enter Main NIC Code" />
            </div>

            <div className="flex-1">
              <Label htmlFor="description">*Description of the Main Sub-Class</Label>
              <textarea id="description" name="description" placeholder="Enter Description" className="w-full p-2 border rounded dark:bg-gray-800 dark:text-white dark:border-gray-600" />
            </div>
          </div>
        </div>

        <div className="w-full space-y-4 mt-8">
          <Label htmlFor="particulars">*Particulars of the proposed or approved name</Label>
          <div className="flex flex-col md:flex-row space-x-4">
            <div className="flex-1">
              <Label htmlFor="namePart1">1</Label>
              <Input id="namePart1" name="namePart1" placeholder="Enter Here" />
            </div>

            <div className="flex-1">
              <Label htmlFor="namePart2">2</Label>
              <Input id="namePart2" name="namePart2" placeholder="Enter Here" />
            </div>
          </div>
        </div>

        <div className="mt-10 w-full md:w-[35%]">
          <h1 className="text-xl font-semibold mb-6">Attachments</h1>
          <div>
            <Label htmlFor="fileInput">Optional attachment(s) - if any</Label>
            <Input id="fileInput" name="fileInput" type="file" className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-600" />
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <Button onClick={handleSubmit} className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-600">
            Submit
          </Button>
        </div>
      </div>
    </>
  );
};

export default SPICePartA;

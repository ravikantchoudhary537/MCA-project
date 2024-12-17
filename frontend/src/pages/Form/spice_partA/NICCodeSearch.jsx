import React, { useState } from "react";
import { FaSearch } from "react-icons/fa"; 
import { Input } from "@/components/ui/input"; 
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog"; 
import { Button } from "@/components/ui/button"; 

const NICCodeSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [nicCode, setNicCode] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleSearchClick = () => {
    setIsPopupOpen(true);
  };

  const handleInputChange = (e) => {
    setNicCode(e.target.value);
  };

  const handleAddClick = () => {
    setSearchQuery(nicCode); 
    setIsPopupOpen(false); 
    setNicCode(""); 
  };

  return (
    <div>
      <div className="relative">
        <Input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 pl-10 border rounded-md"
          placeholder="Search"
        />
        <button
          onClick={handleSearchClick}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-600"
        >
          <FaSearch />
        </button>
      </div>

      <Dialog open={isPopupOpen} onOpenChange={setIsPopupOpen}>
        <DialogTrigger />
        <DialogContent>
          <DialogTitle>Enter NIC Code</DialogTitle>
          <DialogDescription>Please enter the NIC code to proceed.</DialogDescription>

          <Input
            type="text"
            value={nicCode}
            onChange={handleInputChange}
            className="w-full p-2 mb-4"
            placeholder="NIC Code"
          />

          <div className="flex space-x-2">
            <Button onClick={handleAddClick} className="w-1/2 bg-blue-500 text-white">
              Add
            </Button>
            <DialogClose asChild>
              <Button className="w-1/2 bg-red-500 text-white">Cancel</Button>
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default NICCodeSearch;

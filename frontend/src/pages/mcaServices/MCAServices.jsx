import React, { useState } from "react";
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectContent,
} from "@/components/ui/select"; // Importing SelectContent

import { data } from "./MCAServircesData";

const MCAServices = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [selectedSubSubcategory, setSelectedSubSubcategory] = useState(null);

  const handleCategoryChange = (value) => {
    const selected = data.find((item) => item.category === value);
    setSelectedCategory(selected);
    setSelectedSubcategory(null);
    setSelectedSubSubcategory(null);
  };

  const handleSubcategoryChange = (value) => {
    const selected = selectedCategory.subcategories.find(
      (item) => item.service === value
    );
    setSelectedSubcategory(selected);
    setSelectedSubSubcategory(null);
  };

  const handleSubSubcategoryChange = (value) => {
    setSelectedSubSubcategory(value);
  };

  return (
    <div className="max-w-3xl mx-auto p-6  rounded-lg shadow-md">
      <div className="mb-4">
        <label htmlFor="category" className="block text-lg font-semibold mb-2">
          Select Category:
        </label>
        <Select
          id="category"
          onValueChange={handleCategoryChange}
          value={selectedCategory ? selectedCategory.category : ""}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <SelectTrigger>
            <SelectValue placeholder="--Select--" />
          </SelectTrigger>
          <SelectContent>
            {data.map((item) => (
              <SelectItem key={item.category} value={item.category}>
                {item.category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {selectedCategory && selectedCategory.subcategories.length > 0 && (
        <div className="mb-4">
          <label
            htmlFor="subcategory"
            className="block text-lg font-semibold mb-2"
          >
            Select Subcategory:
          </label>
          <Select
            id="subcategory"
            onValueChange={handleSubcategoryChange}
            value={selectedSubcategory ? selectedSubcategory.service : ""}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <SelectTrigger>
              <SelectValue placeholder="--Select--" />
            </SelectTrigger>
            <SelectContent>
              {selectedCategory.subcategories.map((item) => (
                <SelectItem key={item.service} value={item.service}>
                  {item.service}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}

      {selectedSubcategory && selectedSubcategory.subcategories && (
        <div className="mb-4">
          <label
            htmlFor="subsubcategory"
            className="block text-lg font-semibold mb-2"
          >
            Select Sub-Subcategory:
          </label>
          <Select
            id="subsubcategory"
            onValueChange={handleSubSubcategoryChange}
            value={selectedSubSubcategory}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <SelectTrigger>
              <SelectValue placeholder="--Select--" />
            </SelectTrigger>
            <SelectContent>
              {selectedSubcategory.subcategories.map((item) => (
                <SelectItem key={item.service} value={item.service}>
                  {item.service}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}
    </div>
  );
};

export default MCAServices;

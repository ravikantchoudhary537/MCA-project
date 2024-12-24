import React, { useState } from "react";
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectContent,
} from "@/components/ui/select";

import { data } from "./MCAServircesData";
import { FormData } from "../Form/FormData";
import DefaultLayoutForm from "../Form/DefaultLayoutForm";

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

  const renderForm = () => {
    let formDataToRender = null;
    let formName = "";
    if (selectedCategory) {
      if (
        !selectedCategory.subcategories ||
        selectedCategory.subcategories.length === 0
      ) {
        formDataToRender = FormData[selectedCategory.category];
        formName = selectedCategory.category;
      } else if (selectedSubcategory) {
        if (
          !selectedSubcategory.subcategories ||
          selectedSubcategory.subcategories.length === 0
        ) {
          formDataToRender = FormData[selectedSubcategory.service];
          formName = selectedSubcategory.service;
        } else if (selectedSubSubcategory) {
          formDataToRender = FormData[selectedSubSubcategory];
          formName = selectedSubSubcategory;
        }
      }
    }

    if (formDataToRender) {
      return (
        <div className="form-container">
          <DefaultLayoutForm formData={formDataToRender} formName = { formName } />
        </div>
      );
    }

    return null;
  };

  return (
    <>
      <div className="max-w-5xl mx-auto p-6 bg-gray-200 dark:bg-gray-700 rounded-lg shadow-md">
        <h1 className="text-center text-lg text-gray-700 ">MCA SERVICES</h1>
        <div className="mb-4">
          <label
            htmlFor="category"
            className="block text-lg font-semibold mb-2"
          >
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

        {selectedCategory && selectedCategory?.subcategories?.length > 0 && (
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

        {selectedSubcategory && selectedSubcategory?.subcategories && (
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
      <div className="max-w-5xl mx-auto p-6 mt-6">{renderForm()}</div>
    </>
  );
};

export default MCAServices;

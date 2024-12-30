import React, { useState } from "react";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
const DefaultLayoutForm = ({ formData, formName }) => {
  const [formFields, setFormFields] = useState(
    formData.fields.reduce((acc, field) => {
      const fieldName = field.name.toLowerCase().replace(/\s+/g, "_");
      acc[fieldName] = field.type === "radio" ? "" : "";
      return acc;
    }, {})
  );

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormFields((prevFields) => ({
      ...prevFields,
      [name]: value,
    }));
  };

  // const handleInputChange = (fieldName, value) => {
  // setFormFields((prevFields) => ({
  //   ...prevFields,
  //   [fieldName]: value,
  // }));
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();

    let formValue = JSON.stringify(formFields);
    try {
      const response = await axios.post(
        "http://localhost:8000/api/mca/fillform",
        {
          form_name: formName,
          form_value: formValue,
          status: "success",
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );

      if (response.status === 201) {
        alert("Form submitted successfully!");
        setFormFields(
          formData.fields.reduce((acc, field) => {
            const fieldName = field.name.toLowerCase().replace(/\s+/g, "_");
            acc[fieldName] = field.type === "radio" ? "" : "";
            return acc;
          }, {})
        );
        setFormFields({});
      } else {
        alert(`Error: ${response.data.error || "Something went wrong!"}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);

      if (error.response) {
        if (error.response.status === 401) {
          alert("Unauthorized. Please log in again!");
        } else if (error.response.status === 400) {
          alert(`Error: ${error.response.data.error || "Bad request."}`);
        } else {
          alert(
            `Error: ${error.response.data.error || "Something went wrong!"}`
          );
        }
      } else {
        alert("An unexpected error occurred. Please try again!");
      }
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      {formData.fields.map((field, index) => {
        const transformedFieldName = field.name
          .toLowerCase()
          .replace(/\s+/g, "_");

        if (
          field.type === "text" ||
          field.type === "email" ||
          field.type === "number"
        ) {
          return (
            <div key={index}>
              <Label className="block text-lg font-semibold mb-2">
                {field.name}
              </Label>
              <Input
                type={field.type}
                name={transformedFieldName}
                placeholder={field.placeholder}
                value={formFields[transformedFieldName] || ""}
                onChange={handleInputChange}
              />
            </div>
          );
        } else if (field.type === "select") {
          return (
            <div key={index}>
              <Label className="">{field.name}</Label>
              <Select
            value={formFields[transformedFieldName] || ""}
            onValueChange={(value) =>
              setFormFields((prevFields) => ({
                ...prevFields,
                [transformedFieldName]: value, 
              }))
            }
          >
                <SelectTrigger className="">
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  {field.options.map((option, idx) => (
                    <SelectItem key={idx} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          );
        } else if (field.type === "radio") {
          return (
            <div key={index}>
              <RadioGroup defaultValue="option-one">
                <Label className="">{field.name}</Label>
                <div className="">
                  {field.options.map((option, idx) => (
                    <div key={idx} className="">
                      <RadioGroupItem
                        value={option.value}
                        id={option.value}
                        checked={
                          formFields[transformedFieldName] === option.value
                        }
                        
                      />
                      <Label htmlFor={option.value}>{option.label}</Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            </div>
          );
        } else if (field.type === "file") {
          return (
            <div key={index}>
              <Label className="block text-lg font-semibold mb-2">
                {field.name}
              </Label>
              <input
                type="file"
                name={transformedFieldName}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          );
        }
        return null;
      })}
      <Button
        type="submit"
        className="mt-4 w-full px-4 py-2 rounded-md focus:outline-none"
      >
        Submit
      </Button>
    </form>
  );
};

export default DefaultLayoutForm;

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select.jsx'; // Correct imports

const FillaForm = () => {
  // State to store form data and errors
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    value: '',
    createdBy: '',
    status: '',
  });

  const [errors, setErrors] = useState({}); // State to store validation errors

  // Dynamic field definitions
  const fields = [
    { name: 'id', label: 'ID', placeholder: 'Enter ID' },
    { name: 'name', label: 'Name', placeholder: 'Enter Name' },
    { name: 'value', label: 'Value', placeholder: 'Enter Value' },
    { name: 'createdBy', label: 'Created By', placeholder: 'Enter Created By' },
    { name: 'status', label: 'Status', type: 'select', placeholder: 'Select a Status', options: [
      { value: 'Active', label: 'Active' },
      { value: 'Unactive', label: 'Unactive' },
    ] }
  ];

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const onSubmit = (e) => {
    e.preventDefault();

    // Validation
    let validationErrors = {};
    fields.forEach(field => {
      if (!formData[field.name]) {
        validationErrors[field.name] = `${field.label} is required`;
      }
    });

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // No validation errors, submit form data
      console.log(formData);
      setErrors({}); // Reset errors if form submission is successful
    }
  };

  return (
    <div className="mx-auto p-4">
      <form onSubmit={onSubmit}>
        <div className="grid grid-cols-2 gap-4">
          {fields.map((field) => (
            <div key={field.name}>
              {/* Dynamic Label */}
              <Label htmlFor={field.name}>{field.label}</Label>

              {/* Dynamic Input or Select */}
              {field.type === 'select' ? (
                <Select name={field.name} value={formData[field.name]} onChange={handleInputChange}>
                  <SelectTrigger>
                    <SelectValue placeholder={field.placeholder} />
                  </SelectTrigger>
                  <SelectContent>
                    {field.options.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              ) : (
                <Input
                  id={field.name}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleInputChange}
                  placeholder={field.placeholder}
                  className="mt-2 block w-full px-4 py-2 rounded-lg"
                />
              )}

              {/* Dynamic Error Message */}
              {errors[field.name] && (
                <p className="text-red-600 text-sm">{errors[field.name]}</p>
              )}
            </div>
          ))}
        </div>

        {/* Submit Button */}
        <div className="py-5">
          <Button type="submit" className="px-6 py-4 rounded-lg hover:bg-gray-800">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default FillaForm;

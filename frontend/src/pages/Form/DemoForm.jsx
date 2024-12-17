import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select.jsx';
import axios from 'axios';

const DemoForm = () => {
 
  const [formData, setFormData] = useState({
    id: Number,
    name: '',
    value: '',
    created_by: '',
    status: '', 
  });

  const [errors, setErrors] = useState({}); 
  const [loading, setLoading] = useState(false); 
  const [successMessage, setSuccessMessage] = useState(''); 

  
  const fields = [
    { name: 'id', label: 'ID',type: 'number', placeholder: 'Enter ID' },
    { name: 'name', label: 'Name',type: 'string', placeholder: 'Enter Name' },
    { name: 'value', label: 'Value',type: 'string', placeholder: 'Enter Value' },
    { name: 'created_by', label: 'Created By',type: 'string', placeholder: 'Enter Created By' },
    { name: 'status', label: 'Status', type: 'select', placeholder: 'Select a Status', options: [
      { value: 'Active', label: 'Active' },
      { value: 'Unactive', label: 'Unactive' },
    ] }
  ];

  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectChange = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      status: value,
    }));
  };

  const onSubmit = async (e) => {
    console.log('Form data:', formData);
    e.preventDefault();

    let validationErrors = {};
    fields.forEach(field => {
      if (!formData[field.name]) {
        validationErrors[field.name] = `${field.label} is required`;
      }
    });

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setLoading(true); 
      setErrors({});
      try {
        console.log("Form data: in try", formData);
        const response = await axios.post('http://localhost:8000/api/mca/fillform', formData);
        console.log('Response:', response.data);
        setSuccessMessage('Form submitted successfully!');
      } catch (error) {
        console.error('Error submitting form:', error);
        setErrors({ form: 'Failed to submit form. Please try again.' });
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="mx-auto p-4">
      <form onSubmit={onSubmit}>
        <div className="grid grid-cols-2 gap-4">
          {fields.map((field) => (
            <div key={field.name}>
              <Label htmlFor={field.name}>{field.label}</Label>

              {field.type === 'select' ? (
                <Select
                  value={formData[field.name]}
                  onValueChange={handleSelectChange}
                >
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
                  type={field.type}
                  value={formData[field.name]}
                  onChange={handleInputChange}
                  placeholder={field.placeholder}
                  className="mt-2 block w-full px-4 py-2 rounded-lg"
                />
              )}

              {errors[field.name] && (
                <p className="text-blue-500 text-sm">{errors[field.name]}</p>
              )}
            </div>
          ))}
        </div>

        <div className="py-5">
          <Button type="submit" className="px-6 py-4 rounded-lg" disabled={loading}>
            {loading ? 'Submitting...' : 'Submit'}
          </Button>
        </div>
      </form>

      {successMessage && <p className="text-green-500">{successMessage}</p>}
      {errors.form && <p className="text-red-500">{errors.form}</p>}
    </div>
  );
};

export default DemoForm;

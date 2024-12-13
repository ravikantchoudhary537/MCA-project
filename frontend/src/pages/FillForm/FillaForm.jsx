
import { useState } from 'react';
import { Button } from '@/components/ui/button';

import DemoForm from '../Form/DemoForm';
import NewForm from '../Form/NewForm';
import DemoForm2 from '../Form/DemoForm2';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


function FillaForm() {
  const [selectedForm, setSelectedForm] = useState(null);

  const handleFormChange = (form) => {
    setSelectedForm(form);
  };

  const renderForm = () => {
    switch (selectedForm) {
      case 'form1':
        return <Form1 />;
      case 'form2':
        return <Form2 />;
      case 'form3':
        return <Form3 />;
      default:
        return <p>Please select a form</p>;
    }
  };

  return (
    
    <div className="p-4 mb-4 ">
    <Select onValueChange={handleFormChange} >
      <SelectTrigger className="w-[150px]" >
        <SelectValue placeholder="Select a form" />
     
        
      <SelectContent>
        <SelectItem value="form1">Form 1</SelectItem>
        <SelectItem value="form2">Form 2</SelectItem>
        <SelectItem value="form3">Form 3</SelectItem>
      </SelectContent>
      </SelectTrigger>
    </Select>

    <div className="mt-6">{renderForm()}</div>
  </div>
  );
}

function Form1() {
  return (
    <DemoForm />
  );
}

function Form2() {
  return (
    <DemoForm2 />
  );
}

function Form3() {
  return (
    <NewForm />
  );
}

export default FillaForm;

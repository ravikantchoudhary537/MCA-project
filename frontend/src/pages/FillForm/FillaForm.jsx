
import { useState } from 'react';
import DemoForm from '../Form/DemoForm';
import NewForm from '../Form/NewForm';
import DemoForm2 from '../Form/DemoForm2';
import SPICePartA from '../Form/spice_partA/SPICePartA';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import MCAServices from '../mcaServices/MCAServices';

function FillaForm() {
  const [selectedForm, setSelectedForm] = useState(null);

  const handleFormChange = (form) => {
    setSelectedForm(form);
  };

  const renderForm = () => {
    switch (selectedForm) {
      case 'form1':
        return  <DemoForm />;
      case 'form2':
        return <DemoForm2 />;
      case 'form3':
        return <NewForm />;
      case 'spicePartA':
        return <SPICePartA />;
      default:
        return <p>Please select a form</p>;
    }
  };

  return (
    
    <div className="p-4 mb-4 ">
      <MCAServices />
    {/* <Select onValueChange={handleFormChange} >
      <SelectTrigger className="w-[150px]" >
        <SelectValue placeholder="Select a form" />
      <SelectContent>
        <SelectItem value="form1">Form 1</SelectItem>
        <SelectItem value="form2">Form 2</SelectItem>
        <SelectItem value="form3">Form 3</SelectItem>
        <SelectItem value="spicePartA">SPICePartA</SelectItem>
      </SelectContent>
      </SelectTrigger>
    </Select>
     
    <div className="mt-6">{renderForm()}</div> */}
  </div>
  );
}

export default FillaForm;

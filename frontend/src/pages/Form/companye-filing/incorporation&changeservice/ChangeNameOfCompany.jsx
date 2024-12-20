import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const ChangeNameOfCompany = () => {
  const [cin, setCin] = useState('');
  const [proposedName1, setProposedName1] = useState('');
  const [proposedName2, setProposedName2] = useState('');
  const [comments, setComments] = useState('');
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      CIN: cin,
      ProposedName1: proposedName1,
      ProposedName2: proposedName2,
      Comments: comments,
      File: file,
    });
  };

  return (
    <div className="">
      <h2 className="text-2xl font-semibold text-center mb-6">Change Company Name</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <Label htmlFor="cin" className="block text-sm font-medium text-gray-700">* CIN</Label>
          <Input
            id="cin"
            type="text"
            value={cin}
            onChange={(e) => setCin(e.target.value)}
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div className="mb-4 flex space-x-4">
          <div className="w-full">
            <Label htmlFor="proposedName1" className="block text-sm font-medium text-gray-700">* Proposed Name 1</Label>
            <Input
              id="proposedName1"
              type="text"
              value={proposedName1}
              onChange={(e) => setProposedName1(e.target.value)}
              required
              className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="w-full">
            <Label htmlFor="proposedName2" className="block text-sm font-medium text-gray-700">* Proposed Name 2</Label>
            <Input
              id="proposedName2"
              type="text"
              value={proposedName2}
              onChange={(e) => setProposedName2(e.target.value)}
              required
              className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="mb-4">
          <Label htmlFor="comments" className="block text-sm font-medium text-gray-700">* Comments</Label>
          <Textarea
            id="comments"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            required
            rows={4}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <Label htmlFor="attachment" className="block text-sm font-medium text-gray-700">Optional attachment(s) - if any</Label>
          <input
            id="attachment"
            type="file"
            onChange={handleFileChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <Button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ChangeNameOfCompany;

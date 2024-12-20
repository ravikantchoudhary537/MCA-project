import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button'; 

const FindLLPIN = () => {
  const [searchType, setSearchType] = useState('existing'); 
  const [companyName, setCompanyName] = useState('');
  const [oldCompanyName, setOldCompanyName] = useState('');
  const [existingName, setExistingName] = useState('');
  const [oldName, setOldName] = useState('');
  const [error, setError] = useState('');

  const handleSearchTypeChange = (e) => {
    setSearchType(e.target.value);
  };

  const handleCompanyNameChange = (e) => {
    setCompanyName(e.target.value);
  };

  const handleOldCompanyNameChange = (e) => {
    setOldCompanyName(e.target.value);
  };

  const handleExistingNameChange = (e) => {
    setExistingName(e.target.value);
  };

  const handleOldNameChange = (e) => {
    setOldName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if ((searchType === 'existing' && (!companyName || !existingName)) || 
        (searchType === 'old' && (!oldCompanyName || !oldName))) {
      setError('Please fill in all required fields');
    } else {
      setError('');
      alert('Form submitted!');
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4 text-center">Find LLPIN</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <div className="flex items-center space-x-4">
            <div>
              <input
                type="radio"
                id="existing"
                name="searchType"
                value="existing"
                checked={searchType === 'existing'}
                onChange={handleSearchTypeChange}
                className="h-5 w-5 text-blue-500"
              />
              <label htmlFor="existing" className="ml-2 text-sm font-medium text-gray-700">Search Based on Existing Company/LLP Name</label>
            </div>
            <div>
              <input
                type="radio"
                id="old"
                name="searchType"
                value="old"
                checked={searchType === 'old'}
                onChange={handleSearchTypeChange}
                className="h-5 w-5 text-blue-500"
              />
              <label htmlFor="old" className="ml-2 text-sm font-medium text-gray-700">Search Based on Old Company/LLP Name</label>
            </div>
          </div>
        </div>

        {searchType === 'existing' && (
          <>
            <div className="mb-4">
              <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
                Company/LLP Name
              </label>
              <Input
                id="companyName"
                type="text"
                value={companyName}
                onChange={handleCompanyNameChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your Company/LLP Name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="existingName" className="block text-sm font-medium text-gray-700">
                Existing Name
              </label>
              <Input
                id="existingName"
                type="text"
                value={existingName}
                onChange={handleExistingNameChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter Existing Name"
              />
            </div>
          </>
        )}

        {searchType === 'old' && (
          <>
            <div className="mb-4">
              <label htmlFor="oldCompanyName" className="block text-sm font-medium text-gray-700">
                Old Company/LLP Name
              </label>
              <Input
                id="oldCompanyName"
                type="text"
                value={oldCompanyName}
                onChange={handleOldCompanyNameChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter Old Company/LLP Name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="oldName" className="block text-sm font-medium text-gray-700">
                Old Name
              </label>
              <Input
                id="oldName"
                type="text"
                value={oldName}
                onChange={handleOldNameChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter Old Name"
              />
            </div>
          </>
        )}

        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

        <div className="mt-6">
          <Button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default FindLLPIN;

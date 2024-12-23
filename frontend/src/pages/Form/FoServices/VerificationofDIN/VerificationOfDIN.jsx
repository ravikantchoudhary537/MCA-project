import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button'; 
const VerificationOfDIN = () => {
  const [din, setDin] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setDin(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!din) {
      setError('DIN/DPIN is required');
    } else if (din.length !== 8) { 
      setError('DIN/DPIN must be 8 characters long');
    } else {
      setError('');
      alert(`Verification submitted for DIN/DPIN: ${din}`);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 ">
      <h2 className="text-2xl font-semibold mb-4 text-center">Verify DIN/DPIN-PAN Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="din" className="block text-sm font-medium text-gray-700">
            DIN/DPIN
          </label>
          <Input
            id="din"
            type="text"
            value={din}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your DIN/DPIN"
          />
        </div>

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

export default VerificationOfDIN;

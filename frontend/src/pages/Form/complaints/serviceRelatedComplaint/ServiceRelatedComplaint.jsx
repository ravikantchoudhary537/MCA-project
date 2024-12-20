import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button'; 

const ServiceRelatedComplaint = () => {
  const [formData, setFormData] = useState({
    name: '',
    country: 'INDIA',
    city: '',
    mobile: '',
    email: '',
    type: '',
    severity: 'Medium',
    mcaOffice: '',
    description: '',
    supportingDocs: null,
    companyName: '',
    cinLlpin: '',
    dinNumber: '',
    pan: '',
    userId: '',
    srnNumber: '',
    others: '',
    loggedDateTime: ''
  });

  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, supportingDocs: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, city, mobile, email, type, description, srnNumber } = formData;

    if (!name || !city || !mobile || !email || !type || !description || !srnNumber) {
      setError('Please fill in all required fields.');
      return;
    }

    if (!/^\d{10}$/.test(mobile)) {
      setError('Please enter a valid 10-digit mobile number.');
      return;
    }

    setError('');
    alert('Complaint Submitted Successfully!');
    setFormData({
      name: '',
      country: 'INDIA',
      city: '',
      mobile: '',
      email: '',
      type: '',
      severity: 'Medium',
      mcaOffice: '',
      description: '',
      supportingDocs: null,
      companyName: '',
      cinLlpin: '',
      dinNumber: '',
      pan: '',
      userId: '',
      srnNumber: '',
      others: '',
      loggedDateTime: ''
    });
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4 text-center">Register Your Complaint with MCA21 Helpdesk</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">*Name of Person</label>
          <Input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="country" className="block text-sm font-medium text-gray-700">*Country</label>
          <Input
            id="country"
            name="country"
            type="text"
            value={formData.country}
            onChange={handleInputChange}
            disabled
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="city" className="block text-sm font-medium text-gray-700">*City</label>
          <Input
            id="city"
            name="city"
            type="text"
            value={formData.city}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your city"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">*Mobile Number</label>
          <Input
            id="mobile"
            name="mobile"
            type="text"
            value={formData.mobile}
            onChange={handleInputChange}
            required
            pattern="^\d{10}$"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Please Enter 10 digit mobile number"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">*Email ID</label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your email ID"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="type" className="block text-sm font-medium text-gray-700">*Type</label>
          <select
            id="type"
            name="type"
            value={formData.type}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select</option>
            <option value="Issue with eform">Issue with eform</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="severity" className="block text-sm font-medium text-gray-700">Severity</label>
          <select
            id="severity"
            name="severity"
            value={formData.severity}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="Medium">Medium</option>
            <option value="High">High</option>
            <option value="Low">Low</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="mcaOffice" className="block text-sm font-medium text-gray-700">For MCA Offices</label>
          <select
            id="mcaOffice"
            name="mcaOffice"
            value={formData.mcaOffice}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">*Description of Problem</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Describe your problem"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="supportingDocs" className="block text-sm font-medium text-gray-700">Supporting Documents (if any)</label>
          <input
            type="file"
            id="supportingDocs"
            name="supportingDocs"
            onChange={handleFileChange}
            className="mt-1 block w-full text-sm text-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">Company Name</label>
          <Input
            id="companyName"
            name="companyName"
            type="text"
            value={formData.companyName}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your company name"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="cinLlpin" className="block text-sm font-medium text-gray-700">CIN / LLPIN</label>
          <Input
            id="cinLlpin"
            name="cinLlpin"
            type="text"
            value={formData.cinLlpin}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your CIN/LLPIN"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="dinNumber" className="block text-sm font-medium text-gray-700">DIN Number (if Applicable)</label>
          <Input
            id="dinNumber"
            name="dinNumber"
            type="text"
            value={formData.dinNumber}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your DIN number"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="pan" className="block text-sm font-medium text-gray-700">PAN</label>
          <Input
            id="pan"
            name="pan"
            type="text"
            value={formData.pan}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your PAN"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="userId" className="block text-sm font-medium text-gray-700">User ID</label>
          <Input
            id="userId"
            name="userId"
            type="text"
            value={formData.userId}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your user ID"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="srnNumber" className="block text-sm font-medium text-gray-700">*SRN Number (if not applicable enter NA)</label>
          <Input
            id="srnNumber"
            name="srnNumber"
            type="text"
            value={formData.srnNumber}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter SRN Number"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="others" className="block text-sm font-medium text-gray-700">*Others</label>
          <textarea
            id="others"
            name="others"
            value={formData.others}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Please copy and paste exact error"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="loggedDateTime" className="block text-sm font-medium text-gray-700">Logged Date & Time</label>
          <Input
            id="loggedDateTime"
            name="loggedDateTime"
            type="datetime-local"
            value={formData.loggedDateTime}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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

export default ServiceRelatedComplaint;

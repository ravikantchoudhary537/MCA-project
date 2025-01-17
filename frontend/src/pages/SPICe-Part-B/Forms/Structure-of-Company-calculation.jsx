import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import DemoForm from '@/pages/Form/DemoForm';

const CapitalStructure = () => {
  
  const [equityShares, setEquityShares] = useState(0); 
  const [newequityShares, setNewEquityShares] = useState(0); 
  const [nominalAmount, setNominalAmount] = useState(0); 
  const [newnominalAmount, setNewNominalAmount] = useState(0); 
  const [subscribedCapital, setSubscribedCapital] = useState(0); 

  
  const [totalAuthorizedCapital, setTotalAuthorizedCapital] = useState(0);
  const [totalClassifiedAuthorizedCapital, setTotalClassifiedAuthorizedCapital] = useState(0);
  const [unclassifiedAuthorizedCapital, setUnclassifiedAuthorizedCapital] = useState(0);
  const [totalsubscribedShareCapital, settotalsubscribedShareCapital] = useState(0);


  
  useEffect(() => {
    const totalAmount = equityShares * nominalAmount; 
    setTotalAuthorizedCapital(totalAmount);

    
    const newTotalAmount = newequityShares * newnominalAmount;
    settotalsubscribedShareCapital(newTotalAmount); 

    // const classifiedAmount = totalAmount * 0.9; 
    // setTotalClassifiedAuthorizedCapital(classifiedAmount);
        
  }, [equityShares, nominalAmount, newequityShares, newnominalAmount]);

  
  const formatNumber = (num) => {
    return num.toLocaleString();
  };

  return (
    <div className="p-8">
<DemoForm />

      <h2 className="text-xl font-semibold mb-4">3A Capital structure of the company</h2>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block mb-2">Total authorized share capital (in INR)</label>
          <Input
            type="number"
            value={totalAuthorizedCapital}
            onChange={(e) => setTotalAuthorizedCapital(e.target.value)}  
            readOnly
            className="w-full"
          />
        </div>
        <div>
          <label className="block mb-2">Total classified authorized share capital (in INR)</label>
          <Input
            type="number"
            value={totalAuthorizedCapital}
          onChange={(e) => setTotalAuthorizedCapital(e.target.value)}
            readOnly
            className="w-full"
          />
        </div>
        <div>
          <label className="block mb-2">Total subscribed share capital (in INR)</label>
          <Input
            type="number"
            value={totalsubscribedShareCapital}     
           onChange={(e) => settotalsubscribedShareCapital(e.target.value)}
            readOnly
            className="w-full"
          />
        </div>
        <div>
          <label className="block mb-2">Total unclassified authorized share capital (in INR)</label>
          <Input
            type="number"  
            placeholder="0"
            className="w-full"
          />
        </div>
      </div>

      <h3 className="text-lg font-semibold mb-4">3A(i) Equity Share Capital</h3>
      <div className="space-y-4">
        <div>
          <label className="block mb-2">Number of classes</label>
          <Input type="number" onChange={(e) => setEquityShares(e.target.value)} value={1}  className="w-[50%]" />
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="">
                <th className="px-4 py-2 text-left">  Class of Shares </th>
                
                <th className="px-4 py-2 text-left">Authorized Capital </th>
                <th className="px-4 py-2 text-left">Subscribed Capital </th>
              </tr>
            </thead>
            <tbody>
              
              <tr>
                <td className="px-4 py-2">Number of equity shares</td>
                <td className="px-4 py-2">
                  <Input
                    type="number"
                    value={equityShares}
                    onChange={(e) => setEquityShares(e.target.value)}
                    // placeholder="Enter Here"
                    className="w-full"
                  />
                </td>
                <td className="px-4 py-2">
                  <Input
                    type="number"
                    value={newequityShares}
                    onChange={(e) => setNewEquityShares(e.target.value)}
                    // placeholder="Enter Here"
                    className="w-full"
                  />
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2">Nominal amount per share (in INR)</td>
                <td className="px-4 py-2">
                  <Input
                    type="number"
                    value={nominalAmount}
                    onChange={(e) => setNominalAmount(e.target.value)}
                    // placeholder="Enter Here"
                    className="w-full"
                  />
                </td>
                <td className="px-4 py-2">
                  <Input
                    type="number"
                    value={newnominalAmount}
                    onChange={(e) => setNewNominalAmount(e.target.value)}
                    // placeholder="Enter Here"
                    className="w-full"
                  />
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2">Total amount (in INR) </td>
                <td className="px-4 py-2">   
                  <Input value={totalAuthorizedCapital} onChange={(e) => setTotalAuthorizedCapital(e.target.value)} readOnly  className="w-full"/>              
                </td>
                <td className="px-4 py-2"> 
                <Input value={totalsubscribedShareCapital} onChange={(e) => settotalsubscribedShareCapital(e.target.value)}  readOnly className="w-full"/>    
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CapitalStructure;

import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from "@/components/ui/button";

const PreferenceShareTable = ({ state, dispatch }) => {

  const handleInputChange = (classIndex, field, value) => {
    dispatch({
      type: 'update-preference-share-table',  // Changed to match the new case name
      payload: { classIndex, field, value },
    });
  };

  return (
    <div className="overflow-x-auto mt-4">

      <table className="min-w-full text-sm">
        {state.step1.prefrence_share_Table.map((row, index) => (
          <React.Fragment key={index}>
            <thead>
              <tr>
                <th className="px-4 py-2 text-left">Class of Shares</th>
                <th className="px-4 py-2 text-left">Authorized Capital</th>
                <th className="px-4 py-2 text-left">Subscribed Capital</th>
              </tr>
            </thead>
            <tbody>
            <tr className="px- py-1 mt- flex">
              <td className="px-4 py-2">
                <Input
                  type="text"
                  className="w-full"
                  value={row.Class_shares_prefrence}  
                  onChange={(e) => handleInputChange(index, 'Class_shares_prefrence', e.target.value)}
                  placeholder="Enter Class of Shares"
                />
              </td>
            </tr>

            <tr>
              <td className="px-4 py-2">Number of preference shares</td>
              <td className="px-4 py-2">
                <Input
                  type="number"
                  className="w-full"
                  value={row.Authorized_number_prefrence} 
                  onChange={(e) =>
                    handleInputChange(index, 'Authorized_number_prefrence', e.target.value)
                  }
                  placeholder="Enter Here"
                />
              </td>
              <td className="px-4 py-2">
                <Input
                  type="number"
                  className="w-full"
                  value={row.Subscribed_number_prefrence} 
                  onChange={(e) =>
                    handleInputChange(index, 'Subscribed_number_prefrence', e.target.value)
                  }
                  placeholder="Enter Here"
                />
              </td>
            </tr>

            <tr>
              <td className="px-4 py-2">Nominal amount per share (in INR)</td>
              <td className="px-4 py-2">
                <Input
                  type="number"
                  className="w-full"
                  value={row.Authorized_nominal_amount_prefrence}  
                  onChange={(e) =>
                    handleInputChange(index, 'Authorized_nominal_amount_prefrence', e.target.value)
                  }
                  placeholder="Enter Here"
                />
              </td>
              <td className="px-4 py-2">
                <Input
                  type="number"
                  className="w-full"
                  value={row.Subscribed_nominal_amount_prefrence}  
                  onChange={(e) =>
                    handleInputChange(index, 'Subscribed_nominal_amount_prefrence', e.target.value)
                  }
                  placeholder="Enter Here"
                />
              </td>
            </tr>

            <tr>
              <td className="px-4 py-2">Total amount (in INR)</td>
              <td className="px-4 py-2">
                <Input
                  type="text"
                  className="w-full"
                  value={row.Total_Authorized_prefrence}
                  placeholder="0"
                  readOnly
                />
              </td>
              <td className="px-4 py-2">
                <Input
                  type="text"
                  className="w-full"
                  value={row.Total_Subscribed_prefrence} 
                  placeholder="0"
                  readOnly
                />
              </td>
            </tr>
            </tbody>
          </React.Fragment>
        ))}
      </table>
    </div>
  );
};

export default PreferenceShareTable;

import React, { useReducer } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from "@/components/ui/button";

const EquityShareTable = ({ state, dispatch }) => {

  const handleInputChange = (classIndex, field, value) => {
    dispatch({
      type: 'update-equity-share-table',
      payload: { classIndex, field, value },
    });
  };

  // console.log(state.step1);

  return (
    <div className="overflow-x-auto mt-4 ">

      <table className="min-w-full text-sm">
        {state.step1.equity_share_Table.map((row, index) => (
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
                  value={row.Class_shares}
                  onChange={(e) => handleInputChange(index, 'Class_shares', e.target.value)}
                  placeholder="Enter Class of Shares"
                />
              </td>
            </tr>

            {/* Number of equity shares and Nominal amount inputs */}
            <tr>
              <td className="px-4 py-2">Number of equity shares</td>
              <td className="px-4 py-2">
                <Input
                  type="number"
                  className="w-full"
                  value={row.Authorized_number_equity}
                  onChange={(e) =>
                    handleInputChange(index, 'Authorized_number_equity', e.target.value)
                  }
                  placeholder="Enter Here"
                />
              </td>
              <td className="px-4 py-2">
                <Input
                  type="number"
                  className="w-full"
                  value={row.Subscribed_number_equity}
                  onChange={(e) =>
                    handleInputChange(index, 'Subscribed_number_equity', e.target.value)
                  }
                  placeholder="Enter Here"
                />
              </td>
            </tr>

            {/* Nominal amount per share inputs */}
            <tr>
              <td className="px-4 py-2">Nominal amount per share (in INR)</td>
              <td className="px-4 py-2">
                <Input
                  type="number"
                  className="w-full"
                  value={row.Authorized_nominal_amount}
                  onChange={(e) =>
                    handleInputChange(index, 'Authorized_nominal_amount', e.target.value)
                  }
                  placeholder="Enter Here"
                />
              </td>
              <td className="px-4 py-2">
                <Input
                  type="number"
                  className="w-full"
                  value={row.Subscribed_nominal_amount}
                  onChange={(e) =>
                    handleInputChange(index, 'Subscribed_nominal_amount', e.target.value)     
                  }
                  placeholder="Enter Here"
                />
              </td>
            </tr>

            {/* Total amount inputs (read-only) */}
            <tr>
              <td className="px-4 py-2">Total amount (in INR)</td>
              <td className="px-4 py-2">
                <Input
                  type="text"
                  className="w-full"
                  value={row.Total_Authorized_equity}
                   placeholder="0"
                  readOnly
                />

              </td>
              <td className="px-4 py-2">
                <Input
                  type="text"
                  className="w-full"
                  value={row.Total_Subscribed_equity}
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

export default EquityShareTable;


import React, { useReducer } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const SubscriberDirector = ({ state, dispatch }) => {
  const handleInputChange = (classIndex, field, value) => {
    dispatch({
      type: 'set-step-3-fields',
      payload: { classIndex, field, value },
    });
  };

  return (
    <div className="overflow-x-auto mt-4 ">
      <h6 className="text-sm font-medium "> All fields marked in * are mandatory.</h6>
      <h4 className="text-lg font-medium ">5 Number of first subscriber(s) to MOA and directors of the company</h4>
      
      <table className="min-w-full text-sm">
        {/* {state.step3.set-step-3-fields.map((row, index) => ( */}
          {/* <div key={index}> */}
            <thead>
              <tr>
                <th className="px-4 py-4 text-left"></th>
                <th className="px-4 py-4 text-left">Having valid DIN</th>
                <th className="px-4 py-4 text-left">Not having valid DIN</th>
              </tr>
            </thead>
            <tbody>

            <tr>
              <td className="px-4 py-4">(a) *Total number of first subscribers (non-individual + individual)</td>
              <td className="px-4 py-4">
                <Input
                  type="number"
                  className="w-full"
                  value={""}
                  onChange={(e) =>
                    handleInputChange(index, '', e.target.value)
                  }
                  placeholder="Enter Here"
                />
              </td>
              <td className="px-4 py-4">
                <Input
                  type="number"
                  className="w-full"
                  value={""}
                  onChange={(e) =>
                    handleInputChange(index, '', e.target.value)
                  }
                  placeholder="Enter Here"
                />
              </td>
            </tr>

            <tr>
              <td className="px-4 py-4">(b) *Number of non-individual first subscriber(s)</td>
              <td className="px-4 py-4">
                <Input
                  type="number"
                  className="w-full"
                  value={""}
                  onChange={(e) =>
                    handleInputChange(index, '', e.target.value)
                  }
                  placeholder="Enter Here"
                />
              </td>
              <td className="px-4 py-4">
                <Input
                  type="number"
                  className="w-full"
                  value={""}
                  onChange={(e) =>
                    handleInputChange(index, '', e.target.value)     
                  }
                  placeholder="Enter Here"
                />
              </td>
            </tr>

            <tr>
              <td className="px-4 py-4">(c) *Number of individual first subscriber(s) cum director(s) </td>
              <td className="px-4 py-4">
                <Input
                  type="text"
                  className="w-full"
                  value={""}
                  onChange={(e) =>
                    handleInputChange(index, '', e.target.value)     
                  }
                  placeholder="Enter Here"
                
                />
              </td>
              <td className="px-4 py-4">
                <Input
                  type="text"
                  className="w-full"
                  value={""}
                  onChange={(e) =>
                    handleInputChange(index, '', e.target.value)     
                  }
                  placeholder="Enter Here"
                />
              </td>
            </tr>

            <tr>
              <td className="px-4 py-4">(d) *Total number of directors (director(s) who is/are not subscriber(s) + subscriber(s) cum director(s) as mentioned in above Row no. 3)</td>
              <td className="px-4 py-4">
                <Input
                  type="number"
                  className="w-full"
                  value={""}
                  onChange={(e) =>
                    handleInputChange(index, '', e.target.value)
                  }
                  placeholder="Enter Here"
                />
              </td>
              <td className="px-4 py-4">
                <Input
                  type="number"
                  className="w-full"
                  value={""}
                  onChange={(e) =>
                    handleInputChange(index, '', e.target.value)
                  }
                  placeholder="Enter Here"
                />
              </td>
            </tr>
            </tbody>
          {/* </div> */}
        {/* ))} */}
      </table>
    </div>
  );
};

export default SubscriberDirector;



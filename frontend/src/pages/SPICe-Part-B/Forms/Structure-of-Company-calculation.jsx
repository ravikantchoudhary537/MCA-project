import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import DemoForm from '@/pages/Form/DemoForm';
import StructureTopPart from './Structure-top';

const CapitalStructure = () => {
  const [numClasses, setNumClasses] = useState(1);
  const [prenumClasses, setPreNumClasses] = useState(1);

  const [tables, setTables] = useState([{
    equityShares: 0,
    newequityShares: 0,
    nominalAmount: 0,
    newnominalAmount: 0,
    totalAuthorizedCapital: 0,
    totalsubscribedShareCapital: 0
  }]);

  const [pretables, setPreTables] = useState([{
    preequityShares: 0,
    prenewequityShares: 0,
    prenominalAmount: 0,  
    prenewnominalAmount: 0,
    pretotalAuthorizedCapital: 0,
    pretotalsubscribedShareCapital: 0
    // totalAuthorizedCapital: 0,
    // totalsubscribedShareCapital: 0
  }]);
  const formatNumber = (num) => num.toLocaleString();


  const handleNumClassesChange = (e) => {
    const num = parseInt(e.target.value, 10);
    setNumClasses(num);

    if (isNaN(num) || num <= 0) {
      setNumClasses(""); // Set to default value 1 if invalid input
    } else {
      setNumClasses(num);
    }

    const newTables = Array.from({ length: num }, () => ({
      equityShares: 0,
      newequityShares: 0,
      nominalAmount: 0,
      newnominalAmount: 0,
      totalAuthorizedCapital: 0,
      totalsubscribedShareCapital: 0
    }));
    setTables(newTables);
  };


  const handlePreNumClassesChange = (e) => {
    const num = parseInt(e.target.value, 10);
    setPreNumClasses(num);

    if (isNaN(num) || num <= 0) {
      setPreNumClasses(""); // Set to default value 1 if invalid input
    } else {
      setPreNumClasses(num);
    }

    const prenewTables = Array.from({ length: num }, () => ({
      preequityShares: 0,
      prenewequityShares: 0,
      prenominalAmount: 0,
      prenewnominalAmount: 0,
      pretotalAuthorizedCapital: 0,
      pretotalsubscribedShareCapital: 0
    }));
    setPreTables(prenewTables);
  };

 
  const handleTableInputChange = (index, field, value) => {
    const updatedTables = [...tables];
    updatedTables[index][field] = value;


    if (field === 'equityShares' || field === 'nominalAmount') {
      updatedTables[index].totalAuthorizedCapital = updatedTables[index].equityShares * updatedTables[index].nominalAmount;
    }
    if (field === 'newequityShares' || field === 'newnominalAmount') {
      updatedTables[index].totalsubscribedShareCapital = updatedTables[index].newequityShares * updatedTables[index].newnominalAmount;
    }

    setTables(updatedTables);
  };   

  const handlePreTableInputChange = (index, field, value) => {
    const updatedTables = [...pretables];
    updatedTables[index][field] = value;

   
    if (field === 'preequityShares' || field === 'prenominalAmount') {
      updatedTables[index].pretotalAuthorizedCapital = updatedTables[index].preequityShares * updatedTables[index].prenominalAmount;
    }
    if (field === 'prenewequityShares' || field === 'prenewnominalAmount') {
      updatedTables[index].pretotalsubscribedShareCapital = updatedTables[index].prenewequityShares * updatedTables[index].prenewnominalAmount;
    }
    setPreTables(updatedTables);
  };   
  

  // Calculate the total values for all tables
  const calculateTotal = (field) => {
    return tables.reduce((total, table) => total + (parseFloat(table[field]) || 0), 0);
  };  

  const precalculateTotal = (field) => {
    return pretables.reduce((total, table) => total + (parseFloat(table[field]) || 0), 0);
  };  

  
  const renderTables = () => {
    return tables.map((_, index) => (
      <div key={index} className="mb-6">
        <h3 className="text-lg font-semibold mb-4">Class {index + 1} Equity Share Capital</h3>
        <div className="space-y-4">
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left">Class of Shares</th>
                  <th className="px-4 py-2 text-left">Authorized Capital</th>
                  <th className="px-4 py-2 text-left">Subscribed Capital</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2">Number of equity shares</td>
                  <td className="px-4 py-2">
                    <Input
                      type="number"
                      value={tables[index].equityShares}
                      onChange={(e) =>
                        handleTableInputChange(index, 'equityShares', e.target.value)
                      }
                      className="w-full"
                    />
                  </td>
                  <td className="px-4 py-2">
                    <Input
                      type="number"
                      value={tables[index].newequityShares}
                      onChange={(e) =>
                        handleTableInputChange(index, 'newequityShares', e.target.value)
                      }
                      className="w-full"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Nominal amount per share (in INR)</td>
                  <td className="px-4 py-2">
                    <Input
                      type="number"
                      value={tables[index].nominalAmount}
                      onChange={(e) =>
                        handleTableInputChange(index, 'nominalAmount', e.target.value)
                      }
                      className="w-full"
                    />
                  </td>
                  <td className="px-4 py-2">
                    <Input
                      type="number"
                      value={tables[index].newnominalAmount}
                      onChange={(e) =>
                        handleTableInputChange(index, 'newnominalAmount', e.target.value)
                      }
                      className="w-full"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Total amount (in INR)</td>
                  <td className="px-4 py-2">
                    <Input
                      value={tables[index].totalAuthorizedCapital}
                      readOnly
                      className="w-full"
                    />
                  </td>
                  <td className="px-4 py-2">
                    <Input
                      value={tables[index].totalsubscribedShareCapital}
                      readOnly
                      className="w-full"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    ));
  };



  const prerenderTables = () => {
    return pretables.map((_, index) => (
      <div key={index} className="mb-6">
        <h3 className="text-lg font-semibold mb-4">Class {index + 1} Preference share capital</h3>
        <div className="space-y-4">
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left">Class of Shares</th>
                  <th className="px-4 py-2 text-left">Authorized Capital</th>
                  <th className="px-4 py-2 text-left">Subscribed Capital</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2">Number of equity shares</td>
                  <td className="px-4 py-2">
                    <Input
                      type="number"
                      value={pretables[index].preequityShares}
                      onChange={(e) =>
                        handlePreTableInputChange(index, 'preequityShares', e.target.value)
                      }
                      className="w-full"
                    />
                  </td>
                  <td className="px-4 py-2">
                    <Input
                      type="number"
                      value={pretables[index].prenewequityShares}
                      onChange={(e) =>
                        handlePreTableInputChange(index, 'prenewequityShares', e.target.value)
                      }
                      className="w-full"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Nominal amount per share (in INR)</td>
                  <td className="px-4 py-2">
                    <Input
                      type="number"
                      value={pretables[index].prenominalAmount}
                      onChange={(e) =>
                        handlePreTableInputChange(index, 'prenominalAmount', e.target.value)
                      }
                      className="w-full"
                    />
                  </td>
                  <td className="px-4 py-2">
                    <Input
                      type="number"
                      value={pretables[index].prenewnominalAmount}
                      onChange={(e) =>
                        handlePreTableInputChange(index, 'prenewnominalAmount', e.target.value)
                      }
                      className="w-full"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Total amount (in INR)</td>
                  <td className="px-4 py-2">
                    <Input
                      // value={tables[index].totalAuthorizedCapital}
                      value={pretables[index].pretotalAuthorizedCapital}
                      readOnly
                      className="w-full"
                    />
                  </td>
                  <td className="px-4 py-2">
                    <Input
                      value={pretables[index].pretotalsubscribedShareCapital}
                      readOnly
                      className="w-full"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    ));
  };


  return (
    <div className="p-8">
      {/* <DemoForm /> */}
      <StructureTopPart />

      <h3 className="text-xl font-semibold mb-4">3A Capital structure of the company</h3>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block mb-2">Total authorized share capital (in INR)</label>
          <Input
            type="number"
            // value={calculateTotal('totalAuthorizedCapital')}
            value={calculateTotal('totalAuthorizedCapital') || precalculateTotal('pretotalAuthorizedCapital')}
            readOnly
            className="w-full"
          />
        </div>
        <div>
          <label className="block mb-2">Total classified authorized share capital (in INR)</label>
          <Input
            type="number"
            value={calculateTotal('totalAuthorizedCapital') || precalculateTotal('pretotalAuthorizedCapital')}
            readOnly
            className="w-full"
          />
        </div>
        <div>
          <label className="block mb-2">Total subscribed share capital (in INR)</label>
          <Input
            type="number"
            value={calculateTotal('totalsubscribedShareCapital') || precalculateTotal('pretotalsubscribedShareCapital')}
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
          <Input
            type="number"
            onChange={handleNumClassesChange}
            value={numClasses}
            className="w-[50%]"
          />
        </div>

        {/* Render the dynamically generated tables */}
        {renderTables()} 

      </div>
      
      <h3 className="text-lg font-semibold mb-4">3A(ii) Prefrence Share Capital</h3>
      <div className="space-y-4">
        <div>
          <label className="block mb-2">Number of classes</label>
          <Input
            type="number"
            onChange={handlePreNumClassesChange}
            value={prenumClasses}
            className="w-[50%]"
          />
        </div>
        {prerenderTables()}
        
      </div>

    </div>
  );
};

export default CapitalStructure;












// import React, { useState, useEffect } from 'react';
// import { Input } from '@/components/ui/input';
// import DemoForm from '@/pages/Form/DemoForm';

// const CapitalStructure = () => {
//   const [numClasses, setNumClasses] = useState(1);

//   // State to track tables, each table will have its own state for its data
//   const [tables, setTables] = useState([{
//     equityShares: 0,
//     newequityShares: 0,
//     nominalAmount: 0,
//     newnominalAmount: 0,
//     totalAuthorizedCapital: 0,
//     totalsubscribedShareCapital: 0
//   }]);

//   const formatNumber = (num) => num.toLocaleString();

//   // Update tables based on number of classes entered
//   const handleNumClassesChange = (e) => {
//     const num = parseInt(e.target.value, 10);
//     setNumClasses(num);

//     if (isNaN(num) || num <= 0) {
//       setNumClasses(""); // Set to default value 1 if invalid input
//     } else {
//       setNumClasses(num);
//     }

//     // Create new table state objects based on number of classes
//     const newTables = Array.from({ length: num }, () => ({
//       equityShares: 0,
//       newequityShares: 0,
//       nominalAmount: 0,
//       newnominalAmount: 0,
//       totalAuthorizedCapital: 0,
//       totalsubscribedShareCapital: 0
//     }));
//     setTables(newTables);
//   };

//   // Handle input changes for each table
//   const handleTableInputChange = (index, field, value) => {
//     const updatedTables = [...tables];
//     updatedTables[index][field] = value;

//     // Recalculate total values for that table
//     if (field === 'equityShares' || field === 'nominalAmount') {
//       updatedTables[index].totalAuthorizedCapital = updatedTables[index].equityShares * updatedTables[index].nominalAmount;
//     }
//     if (field === 'newequityShares' || field === 'newnominalAmount') {
//       updatedTables[index].totalsubscribedShareCapital = updatedTables[index].newequityShares * updatedTables[index].newnominalAmount;
//     }

//     setTables(updatedTables);
//   };

//   // Calculate the total values for all tables
//   const calculateTotal = (field) => {
//     return tables.reduce((total, table) => total + (parseFloat(table[field]) || 0), 0);
//   };

//   // Render tables based on the number of classes
//   const renderTables = () => {
//     return tables.map((_, index) => (
//       <div key={index} className="mb-6">
//         <h3 className="text-lg font-semibold mb-4">Class {index + 1} Equity Share Capital</h3>
//         <div className="space-y-4">
//           <div className="overflow-x-auto">
//             <table className="min-w-full text-sm">
//               <thead>  
//                 <tr>
//                   <th className="px-4 py-2 text-left">Class of Shares</th>
//                   <th className="px-4 py-2 text-left">Authorized Capital</th>
//                   <th className="px-4 py-2 text-left">Subscribed Capital</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td className="px-4 py-2">Number of equity shares</td>
//                   <td className="px-4 py-2">
//                     <Input
//                       type="number"
//                       value={tables[index].equityShares}
//                       onChange={(e) =>
//                         handleTableInputChange(index, 'equityShares', e.target.value)
//                       }
//                       className="w-full"
//                     />
//                   </td>
//                   <td className="px-4 py-2">
//                     <Input
//                       type="number"
//                       value={tables[index].newequityShares}
//                       onChange={(e) =>
//                         handleTableInputChange(index, 'newequityShares', e.target.value)
//                       }
//                       className="w-full"
//                     />
//                   </td>
//                 </tr>
//                 <tr>
//                   <td className="px-4 py-2">Nominal amount per share (in INR)</td>
//                   <td className="px-4 py-2">
//                     <Input
//                       type="number"
//                       value={tables[index].nominalAmount}
//                       onChange={(e) =>
//                         handleTableInputChange(index, 'nominalAmount', e.target.value)
//                       }
//                       className="w-full"
//                     />
//                   </td>
//                   <td className="px-4 py-2">
//                     <Input
//                       type="number"
//                       value={tables[index].newnominalAmount}
//                       onChange={(e) =>
//                         handleTableInputChange(index, 'newnominalAmount', e.target.value)
//                       }
//                       className="w-full"
//                     />
//                   </td>
//                 </tr>
//                 <tr>
//                   <td className="px-4 py-2">Total amount (in INR)</td>
//                   <td className="px-4 py-2">
//                     <Input
//                       value={tables[index].totalAuthorizedCapital}
//                       readOnly
//                       className="w-full"
//                     />
//                   </td>
//                   <td className="px-4 py-2">
//                     <Input
//                       value={tables[index].totalsubscribedShareCapital}
//                       readOnly
//                       className="w-full"
//                     />
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     ));
//   };

//   return (
//     <div className="p-8">
//       <DemoForm />

//       <h3 className="text-xl font-semibold mb-4">3A Capital structure of the company</h3>

//       <div className="grid grid-cols-2 gap-4 mb-6">
//         <div>
//           <label className="block mb-2">Total authorized share capital (in INR)</label>
//           <Input
//             type="number"
//             value={calculateTotal('totalAuthorizedCapital')}
//             readOnly
//             className="w-full"
//           />
//         </div>
//         <div>
//           <label className="block mb-2">Total classified authorized share capital (in INR)</label>
//           <Input
//             type="number"
//             value={calculateTotal('totalAuthorizedCapital')}
//             readOnly
//             className="w-full"
//           />
//         </div>
//         <div>
//           <label className="block mb-2">Total subscribed share capital (in INR)</label>
//           <Input
//             type="number"
//             value={calculateTotal('totalsubscribedShareCapital')}
//             readOnly
//             className="w-full"
//           />
//         </div>
//         <div>
//           <label className="block mb-2">Total unclassified authorized share capital (in INR)</label>
//           <Input
//             type="number"
//             placeholder="0"
//             className="w-full"
//           />
//         </div>
//       </div>

//       <h3 className="text-lg font-semibold mb-4">3A(i) Equity Share Capital</h3>
//       <div className="space-y-4">
//         <div>
//           <label className="block mb-2">Number of classes</label>
//           <Input
//             type="number"
//             onChange={handleNumClassesChange}
//             value={numClasses}
//             className="w-[50%]"
//           />
//         </div>

//         {/* Render the dynamically generated tables */}
//         {renderTables()}
//       </div>
//     </div>
//   );
// };

// export default CapitalStructure;
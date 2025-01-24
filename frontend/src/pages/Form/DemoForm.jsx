import React, { useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox'; 
import { Input } from '@/components/ui/input';
import { Table } from '@/components/ui/table';
import { Button } from '@/components/ui/button';

const DemoForm = () => {
  const [isEntrenched, setIsEntrenched] = useState(false); 
  const [numberOfArticles, setNumberOfArticles] = useState('');
  const [articleDetails, setArticleDetails] = useState([
    { srNo: '', articleNumber: '', description: '' },
  ]);

  
  const handleCheckboxChange = (value) => {
    setIsEntrenched(value === 'yes');
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'numberOfArticles') {
      setNumberOfArticles(value);
    }
  };

  const handleArticleDetailChange = (index, field, value) => {
    const updatedArticleDetails = [...articleDetails];
    updatedArticleDetails[index][field] = value;
    setArticleDetails(updatedArticleDetails);
  };

  const handleAddRow = () => {
    setArticleDetails([...articleDetails, { srNo: '', articleNumber: '', description: '' }]);
  };   


  return (
    <div className="mb-6">
      {/* <h3 className='text-2xl mb-4 text-center text-violet-500 font-semibold' >Structure of the Company</h3> */}
      <div className="mb-4">
        <label className="block text-lg font-medium">
          1(a) *Whether AOA is entrenched?
        </label>
        <div className="flex gap-4 mt-2">
          <label className="flex items-center gap-1">
            <Checkbox
              checked={isEntrenched === true} 
              onCheckedChange={() => handleCheckboxChange('yes')} 
            />
            Yes
          </label>
          <label className="flex items-center  gap-1">
            <Checkbox
              checked={isEntrenched === false} 
              onCheckedChange={() => handleCheckboxChange('no')} 
            />
            No
          </label>
        </div>
      </div>

      {isEntrenched && (
        <div className="mt-6 space-y-4">
          <div className="mb-4">
            <label className="block text-lg font-medium mb-2">
              (b) Number of Articles to which provisions of entrenchment is applicable
            </label>
            <Input
              type="number"
              name="numberOfArticles"
              value={numberOfArticles}
              onChange={handleInputChange}
              placeholder="Enter number of articles"
            />
          </div>

          <div className="mb-2">
            <label className="block text-lg font-medium mb-2">
              Details of such articles
            </label>
            <Table >
              <thead >
                <tr >
                  <th className="px-4 py-3 " >Sr no</th>
                  <th className="px-4 py-3 ">Article number</th>
                  <th className="px-4 py-3 ">Short description on entrenchment of the clause</th>
                </tr>
              </thead>
              <tbody >
                {articleDetails.map((row, index) => (
                  <tr key={index} >
                    <td>
                      <Input
                        type="text"
                        value={row.srNo}
                        onChange={(e) => handleArticleDetailChange(index, 'srNo', e.target.value)}
                        placeholder="Sr no"
                      />
                    </td>
                    <td>
                      <Input
                        type="text"
                        value={row.articleNumber}
                        onChange={(e) => handleArticleDetailChange(index, 'articleNumber', e.target.value)}
                        placeholder="Article number"
                      />
                    </td>
                    <td>
                      <Input
                        type="text"
                        value={row.description}
                        onChange={(e) => handleArticleDetailChange(index, 'description', e.target.value)}
                        placeholder="Short description"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <Button
              onClick={handleAddRow}
              className="mt-4 "
            >
              Add Article
            </Button>
          </div>
        </div>
      )}

     <div className="mb-4 mt-4">
        <label className="block text-lg font-medium">
        2 *Company is
        </label>
        <div className="flex gap-4 mt-2">
          <label className="flex items-center gap-1">
            <Checkbox
            />
            Having share capital
          </label>
          <label className="flex items-center  gap-1">
            <Checkbox
            />
            Not having share capital
          </label>
        </div>
      </div>
      
    </div>
  );
};

export default DemoForm;


// import React, { useState } from 'react';
// import { Input } from '@/components/ui/input'; 
// import { Table } from '@/components/ui/table'; 

// const DemoForm = () => {
//   const [isEntrenched, setIsEntrenched] = useState(false); 
//   const [numberOfArticles, setNumberOfArticles] = useState('');
//   const [articleDetails, setArticleDetails] = useState([
//     { srNo: '', articleNumber: '', description: '' },
//   ]);

//   const handleCheckboxChange = (event, value) => {
//     // Update the isEntrenched state based on which checkbox is clicked
//     setIsEntrenched(value === 'yes');
//   };

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     if (name === 'numberOfArticles') {
//       setNumberOfArticles(value);
//     }
//   };

//   const handleArticleDetailChange = (index, field, value) => {
//     const updatedArticleDetails = [...articleDetails];
//     updatedArticleDetails[index][field] = value;
//     setArticleDetails(updatedArticleDetails);
//   };

//   const handleAddRow = () => {
//     setArticleDetails([...articleDetails, { srNo: '', articleNumber: '', description: '' }]);
//   };

//   return (
//     <div className="p-6">
//       <div className="mb-4">
//         <label className="block text-lg font-medium">
//           1(a) *Whether AOA is entrenched?
//         </label>
//         <div className="flex gap-4 mt-2">
//           <label className="flex items-center">
//             <input
//               type="checkbox"
//               checked={isEntrenched === true}
//               onChange={(e) => handleCheckboxChange(e, 'yes')}
//             />
//             Yes
//           </label>
//           <label className="flex items-center">
//             <input
//               type="checkbox"
//               checked={isEntrenched === false}
//               onChange={(e) => handleCheckboxChange(e, 'no')}
//             />
//             No
//           </label>
//         </div>
//       </div>

//       {isEntrenched && (
//         <div className="mt-6 space-y-4">
//           <div className="mb-4">
//             <label className="block text-lg font-medium">
//               (b) Number of Articles to which provisions of entrenchment is applicable
//             </label>
//             <Input
//               type="number"
//               name="numberOfArticles"
//               value={numberOfArticles}
//               onChange={handleInputChange}
//               placeholder="Enter number of articles"
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-lg font-medium">
//               Details of such articles
//             </label>
//             <Table>
//               <thead>
//                 <tr>
//                   <th>Sr no</th>
//                   <th>Article number</th>
//                   <th>Short description on entrenchment of the clause</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {articleDetails.map((row, index) => (
//                   <tr key={index}>
//                     <td>
//                       <Input
//                         type="text"
//                         value={row.srNo}
//                         onChange={(e) => handleArticleDetailChange(index, 'srNo', e.target.value)}
//                         placeholder="Sr no"
//                       />
//                     </td>
//                     <td>
//                       <Input
//                         type="text"
//                         value={row.articleNumber}
//                         onChange={(e) => handleArticleDetailChange(index, 'articleNumber', e.target.value)}
//                         placeholder="Article number"
//                       />
//                     </td>
//                     <td>
//                       <Input
//                         type="text"
//                         value={row.description}
//                         onChange={(e) => handleArticleDetailChange(index, 'description', e.target.value)}
//                         placeholder="Short description"
//                       />
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </Table>
//             <button
//               onClick={handleAddRow}
//               className="mt-4 text-blue-500 hover:text-blue-700"
//             >
//               Add Article
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DemoForm;

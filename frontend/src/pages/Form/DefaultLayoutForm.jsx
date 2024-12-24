import React, { useState } from "react";

const DefaultLayoutForm = ({ formData, formName }) => {
  const [formFields, setFormFields] = useState(
    formData.fields.reduce((acc, field) => {
      acc[field.name] = field.type === "radio" ? "" : ""; 
      return acc;
    }, {})
  );

  const  handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormFields((prevFields) => ({
      ...prevFields,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formValue = JSON.stringify(formFields); 

    try {
      const response = await fetch('http://localhost:8000/api/mca/fillform', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
        body: JSON.stringify({
          form_name: formName,
          form_value: formValue,
          status: "success", 
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Form submitted successfully!");
      } else {
        alert(`Error: ${data.error}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      {formData.fields.map((field, index) => {
        if (field.type === "text" || field.type === "email" || field.type === "number") {
          return (
            <div key={index}>
              <label className="block text-lg font-semibold mb-2">{field.name}</label>
              <input
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                value={formFields[field.name] || ''}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          );
        } else if (field.type === "select") {
          return (
            <div key={index}>
              <label className="block text-lg font-semibold mb-2">{field.name}</label>
              <select
                name={field.name}
                value={formFields[field.name] || ''}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {field.options.map((option, idx) => (
                  <option key={idx} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          );
        } else if (field.type === "radio") {
          return (
            <div key={index}>
              <label className="block text-lg font-semibold mb-2">{field.name}</label>
              <div className="flex space-x-4">
                {field.options.map((option, idx) => (
                  <label key={idx} className="inline-flex items-center space-x-2">
                    <input
                      type="radio"
                      name={field.name}
                      value={option.value}
                      checked={formFields[field.name] === option.value}
                      onChange={handleInputChange}
                      className="form-radio text-blue-500"
                    />
                    <span>{option.label}</span>
                  </label>
                ))}
              </div>
            </div>
          );
        } else if (field.type === "file") {
          return (
            <div key={index}>
              <label className="block text-lg font-semibold mb-2">{field.name}</label>
              <input
                type="file"
                name={field.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          );
        }
        return null;
      })}
      <button
        type="submit"
        className="mt-4 w-full px-4 py-2 bg-blue-500 text-white rounded-md focus:outline-none"
      >
        Submit
      </button>
    </form>
  );
};

export default DefaultLayoutForm;

























// import React from "react";

// const DefaultLayoutForm = ({ formData, formName }) => {
//   return (
//     <form className="space-y-4" >
//     {formData.fields.map((field, index) => {
//       if (field.type === "text" || field.type === "email" || field.type === "number") {
//         return (
//           <div key={index}>
//             <label className="block text-lg font-semibold mb-2">{field.name}</label>
//             <input
//               type={field.type}
//               name={field.name}
//               placeholder={field.placeholder}
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//         );
//       } else if (field.type === "select") {
//         return (
//           <div key={index}>
//             <label className="block text-lg font-semibold mb-2">{field.name}</label>
//             <select
//               name={field.name}
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               {field.options.map((option, idx) => (
//                 <option key={idx} value={option.value}>
//                   {option.label}
//                 </option>
//               ))}
//             </select>
//           </div>
//         );
//       } else if (field.type === "radio") {
//         return (
//           <div key={index}>
//             <label className="block text-lg font-semibold mb-2">{field.name}</label>
//             <div className="flex space-x-4">
//               {field.options.map((option, idx) => (
//                 <label key={idx} className="inline-flex items-center space-x-2">
//                   <input
//                     type="radio"
//                     name={field.name}
//                     value={option.value}
//                     className="form-radio text-blue-500"
//                   />
//                   <span>{option.label}</span>
//                 </label>
//               ))}
//             </div>
//           </div>
//         );
//       } else if (field.type === "file") {
//         return (
//           <div key={index}>
//             <label className="block text-lg font-semibold mb-2">{field.name}</label>
//             <input
//               type="file"
//               name={field.name}
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>    
//         );
//       }
//       return null;
//     })}
//     <button
//       type="submit"
//       className="mt-4 w-full px-4 py-2 bg-blue-500 text-white rounded-md focus:outline-none"
//     >
//       Submit
//     </button>
//   </form>
//   );
// };

// export default DefaultLayoutForm;

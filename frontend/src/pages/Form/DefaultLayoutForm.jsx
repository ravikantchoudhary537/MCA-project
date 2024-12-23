import React from "react";

const DefaultLayoutForm = ({ formData }) => {
  return (
    <form className="space-y-4">
      {formData.fields.map((field, index) => {
        if (field.type === "text" || field.type === "email") {
          return (
            <div key={index}>
              <label className="block text-lg font-semibold mb-2">{field.name}</label>
              <input
                type={field.type}
                placeholder={field.placeholder}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          );
        } else if (field.type === "select") {
          return (
            <div key={index}>
              <label className="block text-lg font-semibold mb-2">{field.name}</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                {field.options.map((option, idx) => (
                  <option key={idx} value={option}>
                    {option}
                  </option>
                ))}
              </select>
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

import React from 'react'
import { Link } from 'react-router-dom'
const   Card = () => {
  return (
    <div className="flex flex-col p-2 col-span-full sm:col-span-3 xl:col-span-2 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
  <div className="px-4 pt-4">
    <header className="flex justify-between items-start mb-2">
      <h2 className="text-md font-semibold text-gray-800 dark:text-gray-100 mb-1">Acme Plus</h2>
      {/* Menu button */}
      
    </header>
    <div className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase mb-1">Sales</div>
    <div className="flex items-start">
      <div className="text-2xl font-bold text-gray-800 dark:text-gray-100 mr-2">$24,780</div>
      
    </div>
  </div>
</div>

  )
}

export default Card
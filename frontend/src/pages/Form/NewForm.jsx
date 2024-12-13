import { Button } from '@/components/ui/button';
import React from 'react'

const NewForm = () => {
  return (
    <div className="space-y-4">
    <h2 className="text-2xl font-semibold">Form 3</h2>
    <div className="space-y-4">
    
    <form className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:space-x-4">
        <label className="text-lg sm:w-1/3" htmlFor="name">Full Name</label>
        <input
          className="p-2 border rounded-md sm:w-2/3"
          type="text"
          id="name"
          name="name"
          placeholder="Enter your full name"
        />
      </div>

      <div className="flex flex-col sm:flex-row sm:space-x-4">
        <label className="text-lg sm:w-1/3" htmlFor="email">Email</label>
        <input
          className="p-2 border rounded-md sm:w-2/3"
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
        />
      </div>

      <div className="flex flex-col sm:flex-row sm:space-x-4">
        <label className="text-lg sm:w-1/3" htmlFor="age">Age</label>
        <input
          className="p-2 border rounded-md sm:w-2/3"
          type="number"
          id="age"
          name="age"
          placeholder="Enter your age"
        />
      </div>

      <div className="flex flex-col sm:flex-row sm:space-x-4">
        <label className="text-lg sm:w-1/3" htmlFor="message">Message</label>
        <textarea
          className="p-2 border rounded-md sm:w-2/3"
          id="message"
          name="message"
          placeholder="Enter a message"
          rows="4"
        />
      </div>

      <Button className="mt-4">Submit</Button>
    </form>
  </div>
  </div>
  )
}

export default NewForm;
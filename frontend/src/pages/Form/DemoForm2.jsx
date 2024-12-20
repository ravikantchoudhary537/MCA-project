import { Button } from '@/components/ui/button'
import React from 'react'

const DemoForm2 = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Form 2</h2>
      <p>This is the content of Form 2. Please fill out the following fields:</p>

      <form className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:space-x-4">
          <label className="text-lg sm:w-1/3" htmlFor="username">Username</label>
          <input
            className="p-2 border rounded-md sm:w-2/3"
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
          />
        </div>

        <div className="flex flex-col sm:flex-row sm:space-x-4">
          <label className="text-lg sm:w-1/3" htmlFor="password">Password</label>
          <input
            className="p-2 border rounded-md sm:w-2/3"
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
          />
        </div>

        <div className="flex flex-col sm:flex-row sm:space-x-4">
          <label className="text-lg sm:w-1/3" htmlFor="confirmPassword">Confirm Password</label>
          <input
            className="p-2 border rounded-md sm:w-2/3"
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm your password"
          />
        </div>

        <div className="flex flex-col sm:flex-row sm:space-x-4">
          <label className="text-lg sm:w-1/3" htmlFor="acceptTerms">
            <input type="checkbox" id="acceptTerms" name="acceptTerms" />
            <span className="ml-2">I accept the terms and conditions</span>
          </label>
        </div>

        <Button className="mt-4">Submit</Button>
      </form>
    </div>
  )
}

export default DemoForm2
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Form } from '@/components/ui/form';
import * as Progress from '@radix-ui/react-progress';
import DemoForm from '../Form/DemoForm';
import CapitalStructure from './Forms/Structure-of-Company-calculation';

const SPICePartB = () => {
    const [companyType, setCompanyType] = useState('');
    const [shareCapital, setShareCapital] = useState('');
    const [members, setMembers] = useState({
        maxMembers: '',
        nonEmployeeMaxMembers: '',
        totalMembers: '',
        nonEmployeeMembers: ''
    });

    const [currentStep, setCurrentStep] = useState(1);

    const nextStep = () => {
        if (currentStep < 4) setCurrentStep(currentStep + 1);
    };

    const prevStep = () => {
        if (currentStep > 1) setCurrentStep(currentStep - 1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted');
    };

    const progress = (currentStep - 1) * 25; // 100% divided by 3 steps => 33.33% each step

    return (
        <Form onSubmit={handleSubmit} className="space-y-8">
           
            <div className="space-y-4">
               
                <div className="w-full">
                    <Progress.Root value={progress} max={100} className="h-2 rounded-full bg-gray-200">
                        <Progress.Indicator
                            className="h-full bg-violet-500 rounded-full"
                            style={{ width: `${progress}%` }}
                        />
                    </Progress.Root>
                </div>
                <div className="flex justify-center items-center space-x-4 mb-6">
                    {[1, 2, 3,4].map((step) => (
                        <div
                            key={step}
                            className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${currentStep === step
                                ? 'bg-violet-500 text-white border-violet-500/20'
                                : 'bg-gray-200 text-gray-500 border-violet-500/50'
                                }`}
                        >
                            <span className="font-semibold">{step}</span>
                        </div>
                    ))}

                </div>
            </div>

            {currentStep === 1 && (
                <div className='space-y-4'>

                    <CapitalStructure />

                    <div className="flex justify-between mt-6">
                        <Button type="button" onClick={prevStep} className="w-1/6">Previous</Button>
                        <Button type="button" onClick={nextStep} className="w-1/6">Next</Button>
                    </div>
                </div>
            )}

            {currentStep === 2 && (

                <div className='space-y-4'>
                   
                <h3 className='text-2xl mb-4 mt-6 text-center text-violet-500 font-semibold' >Address of the Company</h3>

                <div>
                    <Label>Correspondence Address</Label>
                    <Input type="text" placeholder="Enter Correspondence Address" className="w-full" />
                </div>

                <div>
                    <Label>Address Line 2</Label>
                    <Input type="text" placeholder="Enter Address Line 2" className="w-full" />
                </div>

                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <Label>Pin Code</Label>
                        <Input type="text" placeholder="Enter Pin Code" className="w-full" />
                    </div>

                    <div>
                        <Label>Mobile Number</Label>
                        <Input type="text" placeholder="Enter Mobile Number" className="w-full" />
                    </div>
                </div>

                <div className="flex justify-between mt-6 ">
                    <Button type="button" onClick={prevStep} className="w-1/6">Previous</Button>
                    <Button type="button" onClick={nextStep} className="w-1/6">Next</Button>
                </div>
            </div>
            )}


            {currentStep === 3 && (
                <div className='space-y-4'>
                    <h3 className='text-2xl mb-4 mt-6 text-center text-violet-500 font-semibold' >Subscriber and Directors details</h3>

                   <DemoForm />

                    <div className="flex justify-between mt-6">
                        <Button type="button" onClick={prevStep} className="w-1/6">Previous</Button>
                        <Button type="button" onClick={nextStep} className="w-1/6">Next</Button>
                    </div>
                </div>
            )}

            {currentStep === 4 && (
                <div className='space-y-4'>
                   
                    <h3 className='text-2xl mb-4 mt-6 text-center text-violet-500 font-semibold' >Non-individual Subscriber & Individual Subscriber other than Subscriber cum Directors</h3>

                    <div className="flex justify-between mt-6 ">
                        <Button type="button" onClick={prevStep} className="w-1/6">Previous</Button>
                        <Button type="submit" className="w-1/6">Submit</Button>
                    </div>
                </div>
            )}
        </Form>
    );
};

export default SPICePartB;




// import React, { useState } from 'react';
// import { Input } from '@/components/ui/input';
// import { Button } from '@/components/ui/button';
// import { Label } from '@/components/ui/label';
// import { Form } from '@/components/ui/form';
// import { MdArrowForward } from 'react-icons/md'; // Importing right arrow icon from react-icons

// const SPICePartB = () => {
//     const [companyType, setCompanyType] = useState('');
//     const [shareCapital, setShareCapital] = useState('');
//     const [members, setMembers] = useState({
//         maxMembers: '',
//         nonEmployeeMaxMembers: '',
//         totalMembers: '',
//         nonEmployeeMembers: ''
//     });

//     const [currentStep, setCurrentStep] = useState(1);

//     // Handle Next Step
//     const nextStep = () => {
//         if (currentStep < 3) setCurrentStep(currentStep + 1);
//     };

//     // Handle Previous Step
//     const prevStep = () => {
//         if (currentStep > 1) setCurrentStep(currentStep - 1);
//     };

//     // Handle Submit Form
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log('Form submitted');
//     };

//     return (
//         <Form onSubmit={handleSubmit} className="space-y-8">
//             {/* Progress Bar / Step Indicator */}
//             <div className="flex justify-center items-center space-x-4 mb-6">
//                 {[1, 2, 3].map((step) => (
//                     <div
//                         key={step}
//                         className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${
//                             currentStep === step
//                                 ? 'bg-blue-500 text-white border-blue-500'
//                                 : 'bg-transparent text-gray-500 border-gray-300'
//                         }`}
//                     >
//                         <span className="font-semibold">{step}</span>
//                     </div>
//                 ))}
//                 {/* Right Icon for Next Step */}
//                 {currentStep < 3 && (
//                     <MdArrowForward
//                         className="text-2xl text-blue-500 cursor-pointer"
//                         onClick={nextStep}
//                     />
//                 )}
//             </div>

//             {/* Step 1: Capital Structure */}
//             {currentStep === 1 && (
//                 <div className='space-y-4'>
//                     <h2 className="text-2xl font-semibold">3A Capital Structure</h2>

//                     <div>
//                         <Label>Total Authorized Share Capital (INR)</Label>
//                         <Input type="number" placeholder="Enter Total Authorized Share Capital (INR)" className="w-full" />
//                     </div>

//                     <div>
//                         <Label>Total classified authorized share capital (in INR)</Label>
//                         <Input type="number" placeholder="Enter Total classified authorized share capital (in INR)" className="w-full" />
//                     </div>

//                     <div>
//                         <Label>Total Subscribed Share Capital (INR)</Label>
//                         <Input type="number" placeholder="Enter Total Subscribed Share Capital" className="w-full" />
//                     </div>

//                     <div>
//                         <Label>Total Unclassified Authorized Share Capital (INR)</Label>
//                         <Input type="number" placeholder="Enter Total Unclassified Authorized Share Capital" className="w-full" />
//                     </div>

//                     {/* Next Button */}
//                     <div className="mt-6">
//                         <Button type="button" onClick={nextStep} className="w-1/4">Next</Button>
//                     </div>
//                 </div>
//             )}

//             {/* Step 2: Members Details */}
//             {currentStep === 2 && (
//                 <div className='space-y-4'>
//                     <h2 className="text-2xl font-semibold">Details of Number of Members</h2>

//                     <div>
//                         <Label>Maximum Number of Members</Label>
//                         <Input
//                             type="number"
//                             value={members.maxMembers}
//                             onChange={(e) => setMembers({ ...members, maxMembers: e.target.value })}
//                             className="w-full"
//                             placeholder="Enter Maximum Number of Members"
//                         />
//                     </div>

//                     <div>
//                         <Label>Maximum Number of Members Excluding Employees</Label>
//                         <Input
//                             type="number"
//                             value={members.nonEmployeeMaxMembers}
//                             onChange={(e) => setMembers({ ...members, nonEmployeeMaxMembers: e.target.value })}
//                             className="w-full"
//                             placeholder="Enter Maximum Number of Members Excluding Employees"
//                         />
//                     </div>

//                     <div>
//                         <Label>Number of Members</Label>
//                         <Input
//                             type="number"
//                             value={members.totalMembers}
//                             onChange={(e) => setMembers({ ...members, totalMembers: e.target.value })}
//                             className="w-full"
//                             placeholder="Enter Number of Members"
//                         />
//                     </div>

//                     <div>
//                         <Label>Number of Members Excluding Employees</Label>
//                         <Input
//                             type="number"
//                             value={members.nonEmployeeMembers}
//                             onChange={(e) => setMembers({ ...members, nonEmployeeMembers: e.target.value })}
//                             className="w-full"
//                             placeholder="Enter Number of Members Excluding Employees"
//                         />
//                     </div>

//                     {/* Navigation Buttons */}
//                     <div className="flex justify-between mt-6">
//                         <Button type="button" onClick={prevStep} className="w-1/3">Previous</Button>
//                         <Button type="button" onClick={nextStep} className="w-1/3">Next</Button>
//                     </div>
//                 </div>
//             )}

//             {/* Step 3: Address Section */}
//             {currentStep === 3 && (
//                 <div className='space-y-4'>
//                     <h2 className="text-2xl font-semibold">Company Address</h2>

//                     <div>
//                         <Label>Correspondence Address</Label>
//                         <Input type="text" placeholder="Enter Correspondence Address" className="w-full" />
//                     </div>

//                     <div>
//                         <Label>Address Line 2</Label>
//                         <Input type="text" placeholder="Enter Address Line 2" className="w-full" />
//                     </div>

//                     <div className="grid grid-cols-2 gap-6">
//                         <div>
//                             <Label>Pin Code</Label>
//                             <Input type="text" placeholder="Enter Pin Code" className="w-full" />
//                         </div>

//                         <div>
//                             <Label>Mobile Number</Label>
//                             <Input type="text" placeholder="Enter Mobile Number" className="w-full" />
//                         </div>
//                     </div>

//                     {/* Submit Button */}
//                     <div className="flex justify-between mt-6">
//                     <Button type="button" onClick={prevStep} className="w-1/3">Previous</Button>
//                         <Button type="submit" className="w-1/3">Submit</Button>
//                     </div>
//                 </div>
//             )}
//         </Form>
//     );
// };

// export default SPICePartB;

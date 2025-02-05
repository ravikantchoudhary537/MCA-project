import React, { useReducer, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Form } from '@/components/ui/form';
import * as Progress from '@radix-ui/react-progress';
import { reducer, initialState } from "./utils"
import StructureCompany from './Forms/StructureCompany';
import { AddreshCompany } from './Forms/AddreshCompany';

const SPICeForms = () => {

    const [currentStep, setCurrentStep] = useState(1);
    const [state, dispatch] = useReducer(reducer, initialState)
// console.log(state)
    const nextStep = () => {
        if (currentStep < 10) setCurrentStep(currentStep + 1);
    };

    const prevStep = () => {
        if (currentStep > 1) setCurrentStep(currentStep - 1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const progress = (currentStep - 1) * 10; // 100% divided by 10 steps => 10% each step

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
                    {[...Array(10).keys()].map((step) => (
                        <div
                            key={step + 1}
                            className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${currentStep === step + 1
                                ? 'bg-violet-500 text-white border-violet-500/20'
                                : 'bg-gray-200 text-gray-500 border-violet-500/50'
                                }`}
                        >
                            <span className="font-semibold">{step + 1}</span>
                        </div>
                    ))}
                </div>
            </div>


            {currentStep === 1 && (
                <div className="space-y-4">
                    <StructureCompany state={state} dispatch={dispatch} />
                    <div className="flex justify-between mt-6">
                        <Button type="button" onClick={prevStep} className="w-1/6">Previous</Button>
                        <Button type="button" onClick={nextStep} className="w-1/6">Next</Button>
                    </div>
                </div>
            )}


            {currentStep === 2 && (
                <div className="space-y-4">
                    <h3 className="text-2xl mb-4 mt-6 text-center text-violet-500 font-semibold">Address of the Company</h3>

                       <AddreshCompany state={state} dispatch={dispatch} />


                    <div className="flex justify-between mt-6">
                        <Button type="button" onClick={prevStep} className="w-1/6">Previous</Button>
                        <Button type="button" onClick={nextStep} className="w-1/6">Next</Button>
                    </div>
                </div>
            )}

            {currentStep === 3 && (
                <div className="space-y-4">
                    <h3 className="text-2xl mb-4 mt-6 text-center text-violet-500 font-semibold">Subscriber and Directors Details</h3>

                    <div className="flex justify-between mt-6">
                        <Button type="button" onClick={prevStep} className="w-1/6">Previous</Button>
                        <Button type="button" onClick={nextStep} className="w-1/6">Next</Button>
                    </div>
                </div>
            )}

            {currentStep === 4 && (
                <div className="space-y-4">
                    <h3 className="text-2xl mb-4 mt-6 text-center text-violet-500 font-semibold">
                        Non-individual Subscriber & Individual Subscriber other than Subscriber cum Directors
                    </h3>

                    <div className="flex justify-between mt-6">
                        <Button type="button" onClick={prevStep} className="w-1/6">Previous</Button>
                        <Button type="submit" className="w-1/6">Submit</Button>
                    </div>
                </div>
            )}


        </Form>
    );
};

export default SPICeForms;






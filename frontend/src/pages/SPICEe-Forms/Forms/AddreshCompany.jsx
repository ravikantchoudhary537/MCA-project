import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';

export const AddreshCompany = ({ state, dispatch }) => {
    const { step2 } = state;
   
    // const handleChange = (field, e) => {
    //     dispatch({ type: "set-step-2-fields", payload: { field, value: e.target.value } });
    // };
    const handleChange = (field, value) => {
        console.log("Updating field:", field, "with value:", value);
        dispatch({ 
            type: "set-step-2-fields", 
            payload: { field, value: value} 
        });
    };
    

    return (
        <div className="space-y-4">
            <h4 className="text-lg font-medium ">4A Correspondence address</h4>
            <div >

                <div className="grid grid-cols-3 gap-6">
                    <div className="space-y-2">
                        <Label>Line 1</Label>
                        <Input
                            type="text"
                            name="correspondenceAddressLine1"
                            placeholder="Enter Address Line 2"
                            value={step2.correspondenceAddressLine1}
                            onChange={(e) => handleChange("correspondenceAddressLine1", e.target.value)} // Use e.target.value here
                         />

                    </div>

                    <div className="space-y-2">
                        <Label>Line 2</Label>
                        <Input
                            type="text"
                            name="correspondenceAddressLine2"
                            placeholder="Enter Address Line 2"
                            value={step2.correspondenceAddressLine2 || ''}
                            onChange={(e) => handleChange("correspondenceAddressLine2", e.target.value)}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label>Pin Code</Label>
                        <Input
                            type="text"
                            name="pinCode"
                            placeholder="Enter Pin Code"
                            value={step2.pinCode || ''}
                            onChange={(e) => handleChange("pinCode", e.target.value)}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label>Area/Locality</Label>
                        <Input
                            type="text"
                            name="areaLocality"
                            placeholder="Enter Area/Locality"
                            value={step2.areaLocality || ''}
                            onChange={(e) => handleChange("areaLocality", e.target.value)}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label>City</Label>
                        <Input
                            type="text"
                            name="city"
                            placeholder="Enter City"
                            value={step2.city || ''}
                            onChange={(e) => handleChange("city", e.target.value)}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label>District</Label>
                        <Input
                            type="text"
                            name="district"
                            placeholder="Enter District"
                            value={step2.district || ''}
                            onChange={(e) => handleChange("district", e.target.value)}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label>State/UT</Label>
                        <Input
                            type="text"
                            name="state"
                            placeholder="Enter State/UT"
                            value={step2.stateUt || ''}
                            onChange={(e) => handleChange("stateUt", e.target.value)}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label>Contact Details: Phone No. (with STD Code)</Label>
                        <Input
                            type="text"
                            name="mobileNumber"
                            placeholder="Enter Phone Number"
                            value={step2.phoneNumber || ''}
                            onChange={(e) => handleChange("phoneNumber", e.target.value)}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label>Contact details: Mobile Number</Label>
                        <Input
                            type="text"
                            name="mobileNumber"
                            placeholder="Enter Mobile Number"
                            value={step2.mobileNumber || ''}
                            onChange={(e) => handleChange("mobileNumber", e.target.value)}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label>Fax</Label>
                        <Input
                            type="text"
                            name="fax"
                            placeholder="Enter Mobile fax"
                            value={step2.fax || ''}
                            onChange={(e) => handleChange("fax", e.target.value)}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label>Email ID</Label>
                        <Input
                            type="email"
                            name="email"
                            placeholder="Enter Email ID"
                            value={step2.email || ''}
                            onChange={(e) => handleChange("email", e.target.value)}
                        />
                    </div>
                </div>

                <div className="col-span-3 space-y-2 mt-6">
                    <Label className="text-lg font-medium">4B Whether the address for correspondence is the address of registered office of the company</Label>
                    <div className="flex items-center space-x-4">
                        <div>
                            <input 
                                type="radio" 
                                name="isRegisteredOffice" 
                                value="yes" 
                                id="yes" 
                                checked={step2.isRegisteredOffice === "yes"}
                                onChange={(e) => handleChange("isRegisteredOffice", e.target.value)}
                            />
                            <label htmlFor="yes">Yes</label>
                        </div>
                        <div>
                            <input 
                                type="radio" 
                                name="isRegisteredOffice" 
                                value="no" 
                                id="no" 
                                checked={step2.isRegisteredOffice === "no"}
                                onChange={(e) => handleChange("isRegisteredOffice", e.target.value)}
                            />
                            <label htmlFor="no">No</label>
                        </div>
                    </div>

                </div>

                <div className="grid grid-cols-2 gap-6 mt-4">
                    <div className="space-y-2">
                        <Label>Longitude</Label>
                        <Input
                            type="text"
                            name="longitude"
                            placeholder="Enter Longitude"
                            value={step2.longitude || ''}
                            onChange={(e) => handleChange("longitude", e.target.value)}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label>Latitude</Label>
                        <Input
                            type="text"
                            name="latitude"
                            placeholder="Enter Latitude"
                            value={step2.latitude || ''}
                            onChange={(e) => handleChange("latitude", e.target.value)}
                        />
                    </div>

                </div>

                <div className="mt-6">
                    <Label className="space-y-2">Attachments:</Label>
                    <div className="space-y-2 grid grid-cols-2 gap-6 mt-2">
                        <div className="space-y-2">
                            <Label>Proof of Office address (Conveyance/ Lease deed/ Rent Agreement)</Label>
                            <input 
                                type="file" 
                                name="officeAddressProof" 
                                onChange={(e) => handleChange("officeAddressProof", e.target.value)} 
                            />
                        </div>

                        <div className="space-y-2">
                            <Label>Copy of the utility bills (not older than two months)</Label>
                            <input 
                                type="file" 
                                name="utilityBill" 
                                onChange={(e) => handleChange("utilityBill", e.target.value)} 
                            />
                        </div>
                    </div>
                </div>

                <div className="col-span-3 space-y-2 mt-6 mb-6">
                    <h4 className="text-lg font-medium ">4C *Name of the office of the Registrar of Companies in which the proposed company is to be registered</h4>
                    <Input
                        type="text"
                        name="registrarOffice"
                        placeholder="Enter the office of the Registrar"
                        value="Registrar of Companies, National Capital Territory of Delhi and Haryana"
                        // value={step2.registrarOffice || ''}
                        className="w-full"
                        onChange={(e) => handleChange("registrarOffice", e.target.value)}
                        
                    />
                </div>
            </div>
        </div>
    );
};



// import React from 'react';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';

// export const AddreshCompany = ({ state, dispatch }) => {
//     const { step2 } = state;

//     const handleChange = (field, e) => {
//         dispatch({ type: "set-step-2-fields", payload: { field, value: e.target.value } });
//     };

//     return (
//         <div className="space-y-4">
//             {/* <h3 className="text-xl font-medium my-4">4 Address of the Company  </h3> */}

//             <h4 className="text-lg font-medium ">4A Correspondence address</h4>
//             <div >

//                 <div className="grid grid-cols-3 gap-6">
//                     <div className="space-y-2">
//                         <Label> Line 1</Label>
//                         <Input
//                             type="text"
//                             name="correspondenceAddressLine1"
//                             placeholder="Enter Address Line 1"
//                             onChange={(e) => handleChange("correspondenceAddressLine1", e.target.value)}
//                         />
//                     </div>

//                     <div className="space-y-2">
//                         <Label>Line 2</Label>
//                         <Input
//                             type="text"
//                             name="correspondenceAddressLine2"
//                             placeholder="Enter Address Line 2"
//                             onChange={(e) => handleChange("correspondenceAddressLine2", e.target.value)}
//                         />
//                     </div>

//                     <div className="space-y-2">
//                         <Label>Pin Code</Label>
//                         <Input
//                             type="text"
//                             name="pinCode"
//                             placeholder="Enter Pin Code"
//                             onChange={(e) => handleChange("pinCode", e.target.value)}
//                         />
//                     </div>

//                     <div className="space-y-2">
//                         <Label>Area/Locality</Label>
//                         <Input
//                             type="text"
//                             name="areaLocality"
//                             placeholder="Enter Area/Locality"
//                             onChange={(e) => handleChange("areaLocality", e.target.value)}
//                         />
//                     </div>

//                     <div className="space-y-2">
//                         <Label>City</Label>
//                         <Input
//                             type="text"
//                             name="city"
//                             placeholder="Enter City"
//                             onChange={(e) => handleChange("city", e.target.value)}
//                         />
//                     </div>

//                     <div className="space-y-2">
//                         <Label>District</Label>
//                         <Input
//                             type="text"
//                             name="district"
//                             placeholder="Enter District"
//                             onChange={(e) => handleChange("district", e.target.value)}
//                         />
//                     </div>

//                     <div className="space-y-2">
//                         <Label>State/UT</Label>
//                         <Input
//                             type="text"
//                             name="state"
//                             placeholder="Enter State/UT"
//                             onChange={(e) => handleChange("stateUt", e.target.value)}
//                         />
//                     </div>

//                     <div className="space-y-2">
//                         <Label>Contact Details: Phone No. (with STD Code)
//                         </Label>
//                         <Input
//                             type="text"
//                             name="mobileNumber"
//                             placeholder="Enter Phone Number"
//                             onChange={(e) => handleChange("phoneNumber", e.target.value)}
//                         />
//                     </div>

//                     <div className="space-y-2">
//                         <Label>Contact details:Mobile Number</Label>
//                         <Input
//                             type="text"
//                             name="mobileNumber"
//                             placeholder="Enter Mobile Number"
//                             onChange={(e) => handleChange("mobileNumber", e.target.value)}
//                         />
//                     </div>

//                     <div className="space-y-2">
//                         <Label>Fax</Label>
//                         <Input
//                             type="text"
//                             name="fax"
//                             placeholder="Enter Mobile fax"
//                             onChange={(e) => handleChange("fax", e.target.value)}
//                         />
//                     </div>

//                     <div className="space-y-2">
//                         <Label>Email ID</Label>
//                         <Input
//                             type="email"
//                             name="email"
//                             placeholder="Enter Email ID"
//                             onChange={(e) => handleChange("email", e.target.value)}
//                         />
//                     </div>

//                 </div>

//                 <div className="col-span-3 space-y-2 mt-6">
//                     <Label className="text-lg font-medium">4B Whether the address for correspondence is the address of registered office of the company</Label>
//                     <div className="flex items-center space-x-4">
//                         <div>
//                             <input type="radio" name="isRegisteredOffice" value="yes" id="yes" onChange={(e) => handleChange("isRegisteredOffice", e.target.value)} />
//                             <label htmlFor="yes">Yes</label>
//                         </div>
//                         <div>
//                             <input type="radio" name="isRegisteredOffice" value="no" id="no" onChange={(e) => handleChange("isRegisteredOffice", e.target.value)} />
//                             <label htmlFor="no">No</label>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="grid grid-cols-2 gap-6 mt-4">
//                     <div className="space-y-2">
//                         <Label>Longitude</Label>
//                         <Input
//                             type="text"
//                             name="longitude"
//                             placeholder="Enter Longitude"
//                             onChange={(e) => handleChange("longitude", e.target.value)}
//                         />
//                     </div>

//                     <div className="space-y-2">
//                         <Label>Latitude</Label>
//                         <Input
//                             type="text"
//                             name="latitude"
//                             placeholder="Enter Latitude"
//                             onChange={(e) => handleChange("latitude", e.target.value)}
//                         />
//                     </div>

//                 </div>

//                 <div className=" mt-6">

//                     <Label className="space-y-2" >Attachments:</Label>
                    
//                     <div className="space-y-2 grid grid-cols-2 gap-6 mt-2">
//                         <div className="space-y-2">
//                         <Label>Proof of Office address (Conveyance/ Lease deed/ Rent Agreement)</Label>
//                             <input type="file" name="officeAddressProof" onChange={(e) => handleChange("officeAddressProof", e.target.value)} />
                            
//                         </div>

//                         <div className="space-y-2">
//                         <Label>Copy of the utility bills (not older than two months)</Label>
//                             <input type="file" name="utilityBill" onChange={(e) => handleChange("utilityBill", e.target.value)} />
                           
//                         </div>
//                     </div>
//                 </div>

                
//                 <div className="col-span-3 space-y-2 mt-6 mb-6">
//                 <h4 className="text-lg font-medium ">4C *Name of the office of the Registrar of Companies in which the proposed company is to be registered</h4>
//                     {/* <Label className="space-y-2">Registrar of Companies</Label> */}
//                     <Input
//                         type="text"
//                         name="registrarOffice"
//                         placeholder="Enter the office of the Registrar"
//                         onChange={(e) => handleChange("registrarOffice", e.target.value)}
//                         value="Registrar of Companies, National Capital Territory of Delhi and Haryana"
//                         className="w-[90%]"
//                         // disabled
//                     />
//                 </div>


//             </div>
//         </div>
//     );
// };

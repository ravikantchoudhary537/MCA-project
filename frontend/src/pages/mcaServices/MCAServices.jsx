import React, { useState } from "react";
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectContent,
} from "@/components/ui/select";

import { data } from "./MCAServircesData";
import SPICePartA from "../Form/spice_partA/SPICePartA";
import DemoForm from "../Form/DemoForm";
import ChangeNameOfCompany from "../Form/companye-filing/incorporation&changeservice/ChangeNameOfCompany";
import LLPDetails from "../Form/LLPe-filing/RunLLP/LLPDetails";
import VerificationofDIN from "../Form/FoServices/VerificationofDIN/VerificationOfDIN";
import VerificationOfDIN from "../Form/FoServices/VerificationofDIN/VerificationOfDIN";
import FindLLPIN from "../Form/FoServices/Find LLPIN/FindLLPIN";
import ServiceRelatedComplaint from "../Form/complaints/serviceRelatedComplaint/ServiceRelatedComplaint";
const DSCForm = () => {
    return (
      <div>
        <h3>DSC Services Form</h3>
      </div>
    );
  };
  
  const LLPForm = () => {
    return (
      <div>
        <h3>LLP e-Filing Form</h3>
      </div>
    );
  };

const categoryFormMap = {
    "Investor Services": <DemoForm />,
    "Track SRN transaction Status": <DemoForm />,
    "Address For Sending Physical Copy of G.A.R 33": <DemoForm />,
    "Complaints": <DemoForm />,
    "Document Related Services": <DemoForm />,
    "Fee And Payment Services": <DemoForm />,
    "Public Search of Trademark": <DemoForm />,
    "Application for MHA Security Clearance": <DemoForm />,
    "LLP Form-24 Letter View": <DemoForm />,
  };
  
  const subcategoryFormMap = {
    "Acquire DSC": <DSCForm />,
    "Associate DSC": <DemoForm /> ,
    "Update DSC": <DSCForm />,
    "View Companies/Director Under Prosecution": <DemoForm /> ,
    "Master Data Services V3": <DemoForm /> ,
    "RUN-LLP (Reserve Unique Name)": <LLPDetails />,
    "Fillip Incorporation of LLP": <LLPForm />,
    "Form 3-Information for LLP agreement and changes": <LLPForm />,
    "Form 4-Notice for change in information of partners/designated partners": <LLPForm />,
    "Form 5-Notice for change of name": <LLPForm />,
    "Form 8-Statement of Account & Solvency": <LLPForm />,
    "Form 11-Annual Return of LLP": <LLPForm />,
    "Form 12-Form for Intimating other address for service of documents": <LLPForm />,
    "Form 15-Notice for change of place of registered office": <LLPForm />,
    "Form 22 - Notice of Intimation of Order to the Registrar": <LLPForm />,
    "Form 23-Application for direction to LLP to change its name to the Registrar": <LLPForm />,
    "Form 24 - Application for striking off name": <LLPForm />,
    "Form 25- Reservation/renewal of name by a FLLP or Foreign Company": <LLPForm />,
    "Form 27 - Registration of particulars by FLLP": <LLPForm />,
    "Form 28 - Reporting of Alteration/closure": <LLPForm />,
    "Form 31 - Application for compounding of an offence under the Act": <LLPForm />,
    "Form 32 - Filing addendum for rectification of defects or incompleteness": <LLPForm />,
    "Form LLP BEN 2 - Return to the Registrar in respect of declaration under section 90": <LLPForm />,
    "Form 4D - Return to the Registrar in respect of declaration of beneficial Interest in contribution received by the LLP": <LLPForm />,
    "Create Service Related Complaint": <ServiceRelatedComplaint />,
    "Track Service Related Complaint": <DemoForm />,
    "Create Investor/Serious Complaint": <DemoForm />,
    "Track Investor/Serious Related Complaint": <DemoForm />,
    "Employee Grievance": <DemoForm />,
    "Get Certified Copies V2": <DemoForm />,
    "Services": <DemoForm />,
    "View Public Documents V2": <DemoForm />,
    "Request For Scanned Documents V2": <DemoForm />,
    "View Public Documents V3": <DemoForm />,
    "Get Certified Copies V3": <DemoForm />,
    "Request For Scanned Documents V3": <DemoForm />,
    "Enquire Fees": <DemoForm />, 
    "Pay Later": <DemoForm />,  
    "Link NEFT Payment": <DemoForm />,
    "Pay Miscellaneous Fees": <DemoForm />,  
    "Pay Stamp Duty": <DemoForm />,  
    "Track Payment Status": <DemoForm />,  
    "Generate SRN For Offline Payment": <DemoForm />, 
    "Pay Miscellaneous Fee V3": <DemoForm />,
    "Corporate Registration": <DemoForm />,
    "Individual Registration": <DemoForm />,
    "Check Annual Filing Status": <DemoForm /> ,
    "Update Subsidiary details": <DemoForm /> ,
    "Refund - Refund form": <DemoForm /> ,
    "Verify DIN PAN Details of Director": <VerificationOfDIN />,





    
    "Feedback / Suggestions": <DemoForm />,
    "Incorporation Service": <DemoForm />,
    "Enquire DIN Status": <DemoForm /> ,
    "Find LLPIN": <FindLLPIN /> ,
    "Find CIN": <DemoForm /> ,
    
    "Track Payment Status at NTRP": <DemoForm /> ,
    "Check Company/LLP Name": <DemoForm /> ,
    "Authorize / Suspend User": <DemoForm /> ,
    
    "Form DIR-3-KYC - KYC of directors": <DemoForm /> ,
    "Form DIR-3-KYC Web - Verify Director's KYC Details": <DemoForm /> ,
    
    
    
    "NDH-1 - Return of Statutory Compliances": <DemoForm /> ,
    "NDH-2 - Application for extension of time": <DemoForm /> ,
    "NDH-3 - Return of Nidhi Company (Half year)": <DemoForm /> ,
    "NDH-4 - Declaration as Nidhi Company": <DemoForm /> ,
    "INC-4 - One Person Company - Change in Member/ Nominee": <DemoForm /> ,
    "INC-22 - Notice of situation of registered office": <DemoForm /> ,
    "INC-27 - Conversion of company": <DemoForm /> ,
    "SH-7 - Alteration of share capital": <DemoForm /> ,
    "MR-1 - Appointment of MD/WTD/Manager": <DemoForm /> ,
    "FC-1 - Information by foreign company": <DemoForm /> ,
    "FC-2 - Alteration in the documents of foreign company": <DemoForm /> ,
    "FC-3 - Annual accounts by foreign company": <DemoForm /> ,
    "FC-4 - Annual accounts by foreign company": <DemoForm /> ,
    "GNL-4 - Addendum to form": <DemoForm /> ,
    "MGT-3 - Notice of situation where foreign register shall be kept": <DemoForm /> ,
    "PAS-2 - Information Memorandum": <DemoForm /> ,
    "INC-20 - Intimation of revocation of license issued u/s 8": <DemoForm /> ,
    "INC-20A - Declaration for commencement of business": <DemoForm /> ,
    "INC-28 - Notice of Order of the Court/Competent authority": <DemoForm /> ,
    "Form MSC-4 - Application for obtaining active status": <DemoForm /> ,
    "INC-24 - Application for change of name": <DemoForm /> ,
    "INC-12 - Application for License to an existing company u/s 8": <DemoForm /> ,
    "INC-6 - One Person Company - Conversion form": <DemoForm /> ,
    "MSC-1 - Application for obtaining status of dormant company": <DemoForm /> ,
    "STK-2 - Removal of name from Register of Companies": <DemoForm /> ,
    "Change Request Form": <DemoForm /> ,
    "INC-23 - Application to shift Registered Office": <DemoForm /> ,
    "INC-18 - Conversion of section 8 company": <DemoForm /> ,
    "RD-1 - Filing application to Regional Director": <DemoForm /> ,
    "ADJ - Memorandum of Appeal": <DemoForm /> ,
    "BEN-2 - Return to the Registrar in respect of declaration under section 90": <DemoForm /> ,
    "MGT-14 - Resolutions and agreements u/s 117": <DemoForm /> ,
    "MSC-3 - Return of dormant companies": <DemoForm /> ,
    "PAS-3 - Return of Allotment": <DemoForm /> ,
    "PAS-6 - Reconciliation of Share Capital Audit Report": <DemoForm /> ,
    "SH-11 - Buy-back of securities": <DemoForm /> ,
    "GNL-2 - Submission of documents with the Registrar": <DemoForm /> ,
    "GNL-3 - Particulars of person(s) of clause 60 of section 2": <DemoForm /> ,
    "MGT-6 - Declaration under section 89": <DemoForm /> ,
    "SH-8 - Letter of Offer": <DemoForm /> ,
    "SH-9 - Declaration of Solvency": <DemoForm /> ,
    "MSME - Half yearly return of Micro or Small Enterprise": <DemoForm /> ,
    "PAS-7 - Details of pending share warrants": <DemoForm /> ,
    "MR-2-CG Approval for Appointment/Reappointment of directors": <DemoForm /> ,
    "AOC-5-Notice of address at which books of account are maintained": <DemoForm /> ,
    "IEPF-1 - Statement of amounts credited/Transfer of amounts": <DemoForm /> ,
    "IEPF-1A - Statement of amounts credited": <DemoForm /> ,
    "IEPF-2 - Statement of unclaimed/unpaid amounts": <DemoForm /> ,
    "IEPF-4 - Statement of shares and unclaimed/unpaid amounts": <DemoForm /> ,
    "IEPF-5 - E-verification report": <DemoForm /> ,
    "IEPF-5 Web form - Claiming unpaid amounts and shares": <DemoForm /> ,

  };

  const subSubcategoryFormMap = {
    "RUN - Application for change of name of existing company": <ChangeNameOfCompany /> ,
    "SPICE+ Form - Reserve name for new company incorporation": <SPICePartA />,
    "Form DIR-3-KYC - KYC of directors": <DemoForm /> ,
    "Form DIR-3-KYC Web - Verfiy Director's KYC Details": <DemoForm /> ,
    "Form CHG-9-Intimation for registration of creation or modification of charge for debentures or rectification of particulars": <DemoForm /> ,
    "Form CHG-8-RD approval for delay in creation / modification / rectification of chargeCompanies": <DemoForm /> ,
    "Form CHG-6- Intimation of appointment/cessation of receiver / managerector": <DemoForm /> ,
    "Form CHG-4 - Intimation of satisfaction of chargers": <DemoForm /> ,
    "Form CHG-1-Intimation of creation / modification of charge (other than those related to debentures)": <DemoForm /> ,
    "Form DPT 4-Statement regarding deposits existing on the commencement of the Act": <DemoForm /> ,
    "Form DPT 3 - Return of deposits": <DemoForm /> ,
    "DIR-3 - Application for allotment of DIN": <DemoForm /> ,
    "DIR-3C - Intimation of DIN by the company": <DemoForm /> ,
    "DIR-6 - Change in particulars of Director": <DemoForm /> ,
    "DIR-12 - Appointment of Directors and KMP": <DemoForm /> ,
    "DIR-11 - Resignation of a Director": <DemoForm /> ,
    "DIR-5 - Surrender of DIN": <DemoForm /> ,
    "DIR-10 - Removal of disqualification of directors": <DemoForm /> ,
    "DIR-9 - Disqualification of Directors": <DemoForm /> ,
    "NDH-1 - Return of Statutory Compliances": <DemoForm /> ,
    "NDH-2 - Application for extension of time": <DemoForm /> ,
    "NDH-3 - Return of Nidhi Company (Half year)": <DemoForm /> ,
    "NDH-4 - Declaration as Nidhi Company": <DemoForm /> ,
    "INC-4 - One Person Company - Change in Member/ Nominee": <DemoForm /> ,
    "INC-22 - Notice of situation of registered office": <DemoForm /> ,
    "INC-27 - Conversion of company": <DemoForm /> ,
    "SH-7 - Alteration of share capital": <DemoForm /> ,
    "MR-1 - Appointment of MD/WTD/Manager": <DemoForm /> ,
    "FC-1 - Information by foreign company": <DemoForm /> ,
    "FC-2 - Alteration in the documents of foreign company": <DemoForm /> ,
    "FC-3 - Annual accounts by foreign company": <DemoForm /> ,
    "FC-4 - Annual accounts by foreign company": <DemoForm /> ,
    "GNL-4 - Addendum to form": <DemoForm />,
    "MGT-3 - Notice of situation where foreign register shall be kept": <DemoForm />,
    "PAS-2 - Information Memorandum": <DemoForm />,
    "INC-20 - Intimation of revocation of license issued u/s 8": <DemoForm />,
    "INC-20A - Declaration for commencement of business": <DemoForm />,
    "INC-28 - Notice of Order of the Court/Competent authority": <DemoForm />,
    "Form MSC-4 - Application for obtaining active status": <DemoForm />,
    "INC-24 - Application for change of name": <DemoForm />,
    "INC-12 - Application for License to an existing company u/s 8": <DemoForm />,
    "INC-6 - One Person Company - Conversion form": <DemoForm />,
    "MSC-1 - Application for obtaining status of dormant company": <DemoForm />,
    "STK-2 - Removal of name from Register of Companies": <DemoForm />,
    "Change Request Form": <DemoForm />,
    "INC-23 - Application to shift Registered Office": <DemoForm />,
    "INC-18 - Conversion of section 8 company": <DemoForm />,
    "RD-1 - Filing application to Regional Director": <DemoForm />,
    "ADJ - Memorandum of Appeal": <DemoForm />,
    "BEN-2 - Return to the Registrar in respect of declaration under section 90": <DemoForm />,
    "MGT-14 - Resolutions and agreements u/s 117": <DemoForm />,
    "MSC-3 - Return of dormant companies": <DemoForm />,
    "PAS-3 - Return of Allotment": <DemoForm />,
    "PAS-6 - Reconciliation of Share Capital Audit Report": <DemoForm />,
    "SH-11 - Buy-back of securities": <DemoForm />,
    "GNL-2 - Submission of documents with the Registrar": <DemoForm />,
    "GNL-3 - Particulars of person(s) of clause 60 of section 2": <DemoForm />,
    "MGT-6 - Declaration under section 89": <DemoForm />,
    "SH-8 - Letter of Offer": <DemoForm />,
    "SH-9 - Declaration of Solvency": <DemoForm />,
    "MSME - Half yearly return of Micro or Small Enterprise": <DemoForm />,
    "PAS-7 - Details of pending share warrants": <DemoForm />,
    "MR-2-CG Approval for Appointment/Reappointment of directors": <DemoForm />,
    "AOC-5-Notice of address at which books of account are maintained": <DemoForm />,
    "IEPF-1 - Statement of amounts credited/Transfer of amounts": <DemoForm />,
    "IEPF-1A - Statement of amounts credited": <DemoForm />,
    "IEPF-2 - Statement of unclaimed/unpaid amounts": <DemoForm />,
    "IEPF-4 - Statement of shares and unclaimed/unpaid amounts": <DemoForm />,
    "IEPF-5 - E-verification report": <DemoForm />,
    "IEPF-5 Web form - Claiming unpaid amounts and shares": <DemoForm />,
    



    "Incorporation Services": <DemoForm /> ,
    "DIN Related Filings": <DemoForm /> ,
    "Charges Related filings": <DemoForm /> ,
    "Deposits related filings": <DemoForm /> ,
    "DIN Related Forms": <DemoForm /> ,
    "Nidhi Services": <DemoForm /> ,
    "Change Services": <DemoForm /> ,
    "Foreign Company Services": <DemoForm /> ,
    "Informational Services": <DemoForm /> ,
    "Approval Services (Registrar of Companies)": <DemoForm /> ,
    "Approval Services (Regional Director)": <DemoForm /> ,
    "Compliance Services": <DemoForm /> ,
    "Approval Services (Headquarters)": <DemoForm /> ,    
  };
  



const MCAServices = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [selectedSubSubcategory, setSelectedSubSubcategory] = useState(null);

  const handleCategoryChange = (value) => {
    const selected = data.find((item) => item.category === value);
    setSelectedCategory(selected);
    setSelectedSubcategory(null);
    setSelectedSubSubcategory(null);
  };

  const handleSubcategoryChange = (value) => {
    const selected = selectedCategory.subcategories.find(
      (item) => item.service === value
    );
    setSelectedSubcategory(selected);
    setSelectedSubSubcategory(null);
  };

  const handleSubSubcategoryChange = (value) => {
    setSelectedSubSubcategory(value);
  };

   

const renderForm = () => {
    if (selectedCategory) {
      if (!selectedCategory.subcategories || selectedCategory.subcategories.length === 0) {
        const categoryForm = categoryFormMap[selectedCategory.category];
        if (categoryForm) {
          return categoryForm;
        }
      } else {
        if (selectedSubcategory) {
          if (!selectedSubcategory.subcategories || selectedSubcategory.subcategories.length === 0) {
            const subcategoryForm = subcategoryFormMap[selectedSubcategory.service];
            if (subcategoryForm) {
              return subcategoryForm; 
            }
          } else {
            if (selectedSubSubcategory) {
              const subSubcategoryForm = subSubcategoryFormMap[selectedSubSubcategory];
              if (subSubcategoryForm) {
                return subSubcategoryForm; 
              }
            }
          }
        }
      }
    }
  
    return null; 
  };
  
  return (
    <div className="max-w-5xl mx-auto p-6  rounded-lg shadow-md">
        <h1 className="text-center text-lg text-gray-700 ">MCA SERVICES</h1>
      <div className="mb-4">
        <label htmlFor="category" className="block text-lg font-semibold mb-2">
          Select Category:
        </label>
        <Select
          id="category"
          onValueChange={handleCategoryChange}
          value={selectedCategory ? selectedCategory.category : ""}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <SelectTrigger>
            <SelectValue placeholder="--Select--" />
          </SelectTrigger>
          <SelectContent>
            {data.map((item) => (
              <SelectItem key={item.category} value={item.category}>
                {item.category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {selectedCategory && selectedCategory?.subcategories?.length > 0 && (
        <div className="mb-4">
          <label
            htmlFor="subcategory"
            className="block text-lg font-semibold mb-2"
          >
            Select Subcategory:
          </label>
          <Select
            id="subcategory"
            onValueChange={handleSubcategoryChange}
            value={selectedSubcategory ? selectedSubcategory.service : ""}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <SelectTrigger>
              <SelectValue placeholder="--Select--" />
            </SelectTrigger>
            <SelectContent>
              {selectedCategory.subcategories.map((item) => (
                <SelectItem key={item.service} value={item.service}>
                  {item.service}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}

      {selectedSubcategory && selectedSubcategory?.subcategories && (
        <div className="mb-4">
          <label
            htmlFor="subsubcategory"
            className="block text-lg font-semibold mb-2"
          >
            Select Sub-Subcategory:
          </label>
          <Select
            id="subsubcategory"
            onValueChange={handleSubSubcategoryChange}
            value={selectedSubSubcategory}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <SelectTrigger>
              <SelectValue placeholder="--Select--" />
            </SelectTrigger>
            <SelectContent>
              {selectedSubcategory.subcategories.map((item) => (
                <SelectItem key={item.service} value={item.service}>
                  {item.service}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}
      <div className="mt-6">
        {renderForm()}
      </div>
    </div>
  );
};




export default MCAServices;

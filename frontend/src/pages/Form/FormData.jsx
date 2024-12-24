export const FormData = {
  "Investor Services": {
    fields: [
      {
        name: "Investor Name",
        type: "text",
        placeholder: "Enter Investor Name",
      },
      {
        name: "Investor Email",
        type: "email",
        placeholder: "Enter Investor Email",
      },
      {
        name: "Transaction ID",
        type: "text",
        placeholder: "Enter Transaction ID",
      },
    ],
  },
  "Track SRN transaction Status": {
    fields: [
      {
        name: "SRN",
        type: "text",
        placeholder: "Enter SRN",
      },
    ],
  },
  "Address For Sending Physical Copy of G.A.R 33": {
    fields: [
      {
        name: "Address",
        type: "text",
        placeholder: "Enter Address",
      },
    ],
  },
  "Public Search of Trademark": {
    fields: [
      {
        name: "Trademark Name",
        type: "text",
        placeholder: "Enter Trademark Name",
      },
    ],
  },
  "Application for MHA Security Clearance": {
    fields: [
      {
        name: "Applicant Name",
        type: "text",
        placeholder: "Enter Applicant Name",
      },
      {
        name: "Security Clearance Number",
        type: "text",
        placeholder: "Enter Clearance Number",
      },
    ],
  },
  "LLP Form-24 Letter View": {
    form: "LLPForm",
    fields: [
      {
        name: "LLP Name",
        type: "text",
        placeholder: "Enter LLP Name",
      },
      {
        name: "Director Name",
        type: "text",
        placeholder: "Enter Director Name",
      },
      {
        name: "Form Type",
        type: "select",
        options: ["Form 24A", "Form 24B"],
      },
    ],
  },
  "Acquire DSC": {
    form: "DSCForm",
    fields: [
      {
        name: "Applicant Name",
        type: "text",
        placeholder: "Enter Applicant Name",
      },
      {
        name: "PAN Number",
        type: "text",
        placeholder: "Enter PAN Number",
      },
      {
        name: "DSC Type",
        type: "select",
        options: ["Class 2", "Class 3"],
      },
    ],
  },
  "Associate DSC": {
    fields: [
      {
        name: "DSC Number",
        type: "text",
        placeholder: "Enter DSC Number",
      },
    ],
  },
  "Update DSC": {
    form: "DSCForm",
    fields: [
      {
        name: "DSC Number",
        type: "text",
        placeholder: "Enter DSC Number",
      },
      {
        name: "New PAN Number",
        type: "text",
        placeholder: "Enter New PAN Number",
      },
    ],
  },
  "View Companies/Director Under Prosecution": {
    fields: [
      {
        name: "Director Name",
        type: "text",
        placeholder: "Enter Director Name",
      },
    ],
  },
  "Master Data Services V3": {
    fields: [
      {
        name: "Master Data",
        type: "text",
        placeholder: "Enter Master Data",
      },
    ],
  },
  "RUN-LLP (Reserve Unique Name)": {
    form: "LLPDetails",
    fields : [
        {
          name: "Purpose of Filing",
          type: "radio",
          options: [
            { label: "New Incorporation", value: "new-incorporation" },
            { label: "Conversion of Firm into LLP", value: "conversion-firm" },
            { label: "Conversion of Private Company into LLP", value: "conversion-private" },
            { label: "Change of Existing LLP", value: "change-existing" },
          ],
          placeholder: "",
        },
        {
          name: "2(a) CIN",
          type: "text",
          placeholder: "Enter CIN",
        },
        {
          name: "2(b) LLPIN",
          type: "text",
          placeholder: "Enter LLPIN",
        },
        {
          name: "NIC Code",
          type: "number",
          placeholder: "Enter NIC Code",
        },
        {
          name: "3(a) Main NIC code (sub-class)",
          type: "text",
          placeholder: "Enter Main NIC Code",
        },
        {
          name: "3(b) Description of the main sub-class",
          type: "text",
          placeholder: "Enter Description",
        },
        {
          name: "4(a) Proposed Name 1",
          type: "text",
          placeholder: "Enter Proposed Name 1",
        },
        {
          name: "4(b) Proposed Name 2",
          type: "text",
          placeholder: "Enter Proposed Name 2",
        },
        {
          name: "LLP/Company Name to find LLPIN/CIN",
          type: "text",
          placeholder: "Enter LLP/Company Name",
        },
        {
          name: "Attachment",
          type: "file",
          placeholder: "Upload Attachment",
        },
      ],      
  },
  "Fillip Incorporation of LLP": {
    form: "LLPForm",
    fields: [
      {
        name: "LLP Name",
        type: "text",
        placeholder: "Enter LLP Name",
      },
    ],
  },
  "Form 3-Information for LLP agreement and changes": {
    form: "LLPForm",
    fields: [
      {
        name: "Agreement Details",
        type: "text",
        placeholder: "Enter Agreement Details",
      },
    ],
  },
  "Form 4-Notice for change in information of partners/designated partners": {
    form: "LLPForm",
    fields: [
      {
        name: "Partner/Designated Partner Name",
        type: "text",
        placeholder: "Enter Name",
      },
    ],
  },
  "Form 5-Notice for change of name": {
    form: "LLPForm",
    fields: [
      {
        name: "New Name",
        type: "text",
        placeholder: "Enter New Name",
      },
    ],
  },
  "Form 8-Statement of Account & Solvency": {
    form: "LLPForm",
    fields: [
      {
        name: "Statement Details",
        type: "text",
        placeholder: "Enter Statement Details",
      },
    ],
  },
  "Form 11-Annual Return of LLP": {
    form: "LLPForm",
    fields: [
      {
        name: "Annual Return Details",
        type: "text",
        placeholder: "Enter Annual Return Details",
      },
    ],
  },
  "Form 12-Form for Intimating other address for service of documents": {
    form: "LLPForm",
    fields: [
      {
        name: "New Address",
        type: "text",
        placeholder: "Enter New Address",
      },
    ],
  },
  "Form 15-Notice for change of place of registered office": {
    form: "LLPForm",
    fields: [
      {
        name: "New Office Address",
        type: "text",
        placeholder: "Enter New Office Address",
      },
    ],
  },
  "Form 22 - Notice of Intimation of Order to the Registrar": {
    form: "LLPForm",
    fields: [
      {
        name: "Order Details",
        type: "text",
        placeholder: "Enter Order Details",
      },
    ],
  },
  "Form 23-Application for direction to LLP to change its name to the Registrar":
    {
      form: "LLPForm",
      fields: [
        {
          name: "New Name",
          type: "text",
          placeholder: "Enter New Name",
        },
      ],
    },
  "Form 24 - Application for striking off name": {
    form: "LLPForm",
    fields: [
      {
        name: "LLP Name",
        type: "text",
        placeholder: "Enter LLP Name",
      },
    ],
  },
  "Form 25- Reservation/renewal of name by a FLLP or Foreign Company": {
    form: "LLPForm",
    fields: [
      {
        name: "Reservation/Renewal Details",
        type: "text",
        placeholder: "Enter Details",
      },
    ],
  },
  "Form 27 - Registration of particulars by FLLP": {
    form: "LLPForm",
    fields: [
      {
        name: "FLLP Name",
        type: "text",
        placeholder: "Enter FLLP Name",
      },
    ],
  },
  "Form 28 - Reporting of Alteration/closure": {
    form: "LLPForm",
    fields: [
      {
        name: "Alteration/Closure Details",
        type: "text",
        placeholder: "Enter Details",
      },
    ],
  },
  "Form 31 - Application for compounding of an offence under the Act": {
    form: "LLPForm",
    fields: [
      {
        name: "Offence Details",
        type: "text",
        placeholder: "Enter Offence Details",
      },
    ],
  },
  "Form 32 - Filing addendum for rectification of defects or incompleteness": {
    form: "LLPForm",
    fields: [
      {
        name: "Rectification Details",
        type: "text",
        placeholder: "Enter Rectification Details",
      },
    ],
  },

  "Form LLP BEN 2 - Return to the Registrar in respect of declaration under section 90":
    {
      form: "LLPForm",
      fields: [
        {
          name: "Declaration Details",
          type: "text",
          placeholder: "Enter Declaration Details",
        },
      ],
    },
  "Form 4D - Return to the Registrar in respect of declaration of beneficial Interest in contribution received by the LLP":
    {
      form: "LLPForm",
      fields: [
        {
          name: "Beneficial Interest Details",
          type: "text",
          placeholder: "Enter Beneficial Interest Details",
        },
      ],
    },
  "Verify DIN PAN Details of Director": {
    fields: [
      {
        name: "DIN Number",
        type: "text",
        placeholder: "Enter DIN Number",
      },
      {
        name: "PAN Number",
        type: "text",
        placeholder: "Enter PAN Number",
      },
    ],
  },
  "Enquire DIN Status": {
    fields: [
      {
        name: "DIN Number",
        type: "text",
        placeholder: "Enter DIN Number",
      },
    ],
  },
  "Find LLPIN": {
    fields : [
        {
          name: "Search Type",
          type: "radio",
          options: [
            { label: "Search Based on Existing Company/LLP Name", value: "existing" },
            { label: "Search Based on Old Company/LLP Name", value: "old" },
          ],
        },
        {
          name: "Company/LLP Name",
          type: "text",
          placeholder: "Enter your Company/LLP Name",
          condition: "existing", 
        },
        {
          name: "Existing Name",
          type: "text",
          placeholder: "Enter Existing Name",
          condition: "existing",
        },
        {
          name: "Old Company/LLP Name",
          type: "text",
          placeholder: "Enter Old Company/LLP Name",
          condition: "old", 
        },
        {
          name: "Old Name",
          type: "text",
          placeholder: "Enter Old Name",
          condition: "old", 
        },
      ],
  },
  "Find CIN": {
    fields: [
      {
        name: "CIN",
        type: "text",
        placeholder: "Enter CIN",
      },
    ],
  },
  
  "Track Payment Status at NTRP": {
    fields: [
      {
        name: "Payment Reference Number",
        type: "text",
        placeholder: "Enter Payment Reference Number",
      },
    ],
  },
  "Enquire Fees": {
    fields: [
      {
        name: "Service Name",
        type: "text",
        placeholder: "Enter Service Name",
      },
    ],
  },
  "Check Company/LLP Name": {
    fields: [
      {
        name: "Company/LLP Name",
        type: "text",
        placeholder: "Enter Company/LLP Name",
      },
    ],
  },
  "Authorize / Suspend User": {
    fields: [
      {
        name: "User ID",
        type: "text",
        placeholder: "Enter User ID",
      },
      {
        name: "Action",
        type: "select",
        options: ["Authorize", "Suspend"],
      },
    ],
  },
  "Create Service Related Complaint": {
    form: "ComplaintForm",
    fields: [
      {
        name: "Name of Person",
        type: "text",
        placeholder: "Enter your name",
        required: true,
      },
      {
        name: "Country",
        type: "text",
        placeholder: "Enter your country",
        required: true,
        disabled: true,
      },
      {
        name: "City",
        type: "text",
        placeholder: "Enter your city",
        required: true,
      },
      {
        name: "Mobile Number",
        type: "text",
        placeholder: "Please Enter 10 digit mobile number",
        required: true,
        pattern: "^d{10}$",
      },
      {
        name: "Email ID",
        type: "email",
        placeholder: "Enter your email ID",
        required: true,
      },
      {
        name: "Type",
        type: "select",
        options: ["Issue with eform", "Other"],
        placeholder: "Select the issue type",
        required: true,
      },
      {
        name: "Severity",
        type: "select",
        options: ["Medium", "High", "Low"],
        placeholder: "Select the severity",
      },
      {
        name: "For MCA Offices",
        type: "select",
        options: ["Yes", "No"],
        placeholder: "Select if applicable",
      },
      {
        name: "Description of Problem",
        type: "textarea",
        placeholder: "Describe your problem",
        required: true,
      },
      {
        name: "Supporting Documents",
        type: "file",
        placeholder: "Upload supporting documents (if any)",
      },
      {
        name: "Company Name",
        type: "text",
        placeholder: "Enter your company name",
      },
      {
        name: "CIN / LLPIN",
        type: "text",
        placeholder: "Enter your CIN/LLPIN",
      },
      {
        name: "DIN Number (if Applicable)",
        type: "text",
        placeholder: "Enter your DIN number",
      },
      {
        name: "PAN",
        type: "text",
        placeholder: "Enter your PAN",
      },
      {
        name: "User ID",
        type: "text",
        placeholder: "Enter your user ID",
      },
      {
        name: "SRN Number (if not applicable enter NA)",
        type: "text",
        placeholder: "Enter SRN Number",
        required: true,
      },
      {
        name: "Others",
        type: "textarea",
        placeholder: "Please copy and paste exact error",
        required: true,
      },
      {
        name: "Logged Date & Time",
        type: "datetime-local",
        placeholder: "Select the date and time",
      },
    ],
  },
  "Track Service Related Complaint": {
    form: "ComplaintForm",
    fields: [
      {
        name: "Complaint ID",
        type: "text",
        placeholder: "Enter Complaint ID",
      },
    ],
  },
  "Create Investor/Serious Complaint": {
    form: "ComplaintForm",
    fields: [
      {
        name: "Complaint Details",
        type: "textarea",
        placeholder: "Enter Complaint Details",
      },
    ],
  },
  "Track Investor/Serious Related Complaint": {
    form: "ComplaintForm",
    fields: [
      {
        name: "Complaint ID",
        type: "text",
        placeholder: "Enter Complaint ID",
      },
    ],
  },
  "Feedback / Suggestions": {
    form: "FeedbackForm",
    fields: [
      {
        name: "Feedback Details",
        type: "textarea",
        placeholder: "Enter Feedback",
      },
    ],
  },
  "Employee Grievance": {
    form: "GrievanceForm",
    fields: [
      {
        name: "Employee Name",
        type: "text",
        placeholder: "Enter Employee Name",
      },
      {
        name: "Grievance Details",
        type: "textarea",
        placeholder: "Enter Grievance Details",
      },
    ],
  },
  "Get Certified Copies V2": {
    form: "CertifiedCopyForm",
    fields: [
      {
        name: "Document Details",
        type: "text",
        placeholder: "Enter Document Details",
      },
    ],
  },
  "View Public Documents V2": {
    form: "PublicDocumentsForm",
    fields: [
      {
        name: "Document ID",
        type: "text",
        placeholder: "Enter Document ID",
      },
    ],
  },
  "Request For Scanned Documents V2": {
    form: "ScannedDocumentsForm",
    fields: [
      {
        name: "Document ID",
        type: "text",
        placeholder: "Enter Document ID",
      },
    ],
  },
  "Request For Scanned Documents V3": {
    form: "ScannedDocumentsForm",
    fields: [
      {
        name: "Document ID",
        type: "text",
        placeholder: "Enter Document ID",
      },
    ],
  },
  
  "Pay Later": {
    form: "PaymentForm",
    fields: [
      {
        name: "Invoice Number",
        type: "text",
        placeholder: "Enter Invoice Number",
      },
    ],
  },
  "Link NEFT Payment": {
    form: "PaymentForm",
    fields: [
      {
        name: "NEFT Reference Number",
        type: "text",
        placeholder: "Enter NEFT Reference Number",
      },
    ],
  },
  "Pay Miscellaneous Fees": {
    form: "PaymentForm",
    fields: [
      {
        name: "Payment Details",
        type: "text",
        placeholder: "Enter Payment Details",
      },
    ],
  },
  "Pay Stamp Duty": {
    form: "PaymentForm",
    fields: [
      {
        name: "Stamp Duty Amount",
        type: "text",
        placeholder: "Enter Stamp Duty Amount",
      },
    ],
  },
  "Track Payment Status": {
    fields: [
      {
        name: "Payment Reference Number",
        type: "text",
        placeholder: "Enter Payment Reference Number",
      },
    ],
  },
  "Generate SRN For Offline Payment": {
    form: "PaymentForm",
    fields: [
      {
        name: "Offline Payment Details",
        type: "text",
        placeholder: "Enter Offline Payment Details",
      },
    ],
  },
  "Pay Miscellaneous Fee V3": {
    form: "PaymentForm",
    fields: [
      {
        name: "Miscellaneous Fee Details",
        type: "text",
        placeholder: "Enter Fee Details",
      },
    ],
  },
  "Corporate Registration": {
    form: "CorporateRegistrationForm",
    fields: [
      {
        name: "Company Name",
        type: "text",
        placeholder: "Enter Company Name",
      },
    ],
  },
  "Individual Registration": {
    form: "IndividualRegistrationForm",
    fields: [
      {
        name: "Individual Name",
        type: "text",
        placeholder: "Enter Individual Name",
      },
    ],
  },
  "RUN - Application for change of name of existing company": {
    form: "RUNForm",
    fields : [
        {
          name: "CIN",
          type: "text",
          placeholder: "Enter your CIN",
          required: true
        },
        {
          name: "Proposed Name 1",
          type: "text",
          placeholder: "Enter Proposed Name 1",
          required: true
        },
        {
          name: "Proposed Name 2",
          type: "text",
          placeholder: "Enter Proposed Name 2",
          required: true
        },
        {
          name: "Comments",
          type: "textarea",
          placeholder: "Enter your comments",
          required: true
        },
        {
          name: "Optional Attachment(s)",
          type: "file",
          placeholder: "Upload any optional attachment(s)"
        }
      ]
  },
  "SPICE+ Form - Reserve name for new company incorporation": {
    form: "SPICEForm",
    fields : [
        {
          name: "Type of Company",
          type: "select",
          options: [
            "Producer Company",
            "Unlimited Company",
            "Private Company",
            "IFSC Company",
            "Section 8 Company",
            "Nidhi Company",
            "New Company(Other)",
            "Part 1 Section 8 Company",
            "Part 1 LLP to Company",
            "Part 1 Firm Company",
            "Part 1 Other"
          ],
          placeholder: "Select Type of Company",
          required: true
        },
        {
          name: "Class of Company",
          type: "select",
          options: ["Public", "Private"],
          placeholder: "Select Class of Company",
          required: true
        },
        {
          name: "Category of Company",
          type: "select",
          options: ["Option X", "Option Y", "Option Z"],
          placeholder: "Select Category of Company",
          required: true
        },
        {
          name: "Sub Category of Company",
          type: "select",
          options: ["Option Alpha", "Option Beta", "Option Gamma"],
          placeholder: "Select Sub Category of Company"
        },
        {
          name: "Main NIC Code",
          type: "text",
          placeholder: "Enter Main NIC Code",
          required: true
        },
        {
          name: "Particulars of the proposed or approved name - 1",
          type: "text",
          placeholder: "Enter Here",
          required: true
        },
        {
          name: "Particulars of the proposed or approved name - 2",
          type: "text",
          placeholder: "Enter Here",
          required: true
        },
        {
          name: "Optional attachment(s) - if any",
          type: "file",
          placeholder: "Upload any optional attachments"
        },
        {
          name: "Company Name",
          type: "text",
          placeholder: "Enter your company name"
        },
        {
          name: "CIN / LLPIN",
          type: "text",
          placeholder: "Enter your CIN/LLPIN"
        },
        {
          name: "DIN Number (if Applicable)",
          type: "text",
          placeholder: "Enter your DIN number"
        },
        {
          name: "PAN",
          type: "text",
          placeholder: "Enter your PAN"
        },
        {
          name: "User ID",
          type: "text",
          placeholder: "Enter your user ID"
        },
        {
          name: "SRN Number (if not applicable enter NA)",
          type: "text",
          placeholder: "Enter SRN Number",
          required: true
        },
        {
          name: "Others",
          type: "textarea",
          placeholder: "Please copy and paste exact error",
          required: true
        },
        {
          name: "Logged Date & Time",
          type: "datetime-local",
          placeholder: "Select the date and time"
        }
      ],
  },
  "INC-4 - One Person Company - Change in Member/ Nominee": {
    form: "OPOCForm",
    fields: [
      {
        name: "New Member/Nominee Details",
        type: "text",
        placeholder: "Enter Details",
      },
    ],
  },
  "MR-1 - Appointment of MD/WTD/Manager": {
    form: "AppointmentForm",
    fields: [
      {
        name: "MD/WTD/Manager Name",
        type: "text",
        placeholder: "Enter Name",
      },
    ],
  },
  "INC-22 - Notice of situation of registered office": {
    form: "OfficeForm",
    fields: [
      {
        name: "Office Address",
        type: "text",
        placeholder: "Enter Address",
      },
    ],
  },
  "INC-27 - Conversion of company": {
    form: "CompanyConversionForm",
    fields: [
      {
        name: "Company Name",
        type: "text",
        placeholder: "Enter Company Name",
      },
      {
        name: "Conversion Type",
        type: "select",
        options: ["Private to Public", "Public to Private"],
      },
    ],
  },
  "SH-7 - Alteration of share capital": {
    form: "ShareCapitalAlterationForm",
    fields: [
      {
        name: "Company Name",
        type: "text",
        placeholder: "Enter Company Name",
      },
      {
        name: "New Share Capital",
        type: "text",
        placeholder: "Enter New Share Capital",
      },
    ],
  },
  "INC-6 - One Person Company - Conversion form": {
    form: "OPOCConversionForm",
    fields: [
      {
        name: "Company Name",
        type: "text",
        placeholder: "Enter Company Name",
      },
      {
        name: "Conversion Details",
        type: "text",
        placeholder: "Enter Conversion Details",
      },
    ],
  },
  "DIR-3 - Application for allotment of DIN": {
    form: "DINApplicationForm",
    fields: [
      {
        name: "Applicant Name",
        type: "text",
        placeholder: "Enter Applicant Name",
      },
      {
        name: "Date of Birth",
        type: "date",
        placeholder: "Enter Date of Birth",
      },
    ],
  },
  "DIR-3C - Intimation of DIN by the company": {
    form: "DINIntimationForm",
    fields: [
      {
        name: "DIN Number",
        type: "text",
        placeholder: "Enter DIN Number",
      },
      {
        name: "Director Name",
        type: "text",
        placeholder: "Enter Director Name",
      },
    ],
  },
  "DIR-6 - Change in particulars of Director": {
    form: "DirectorParticularsChangeForm",
    fields: [
      {
        name: "Director Name",
        type: "text",
        placeholder: "Enter Director Name",
      },
      {
        name: "New Particulars",
        type: "text",
        placeholder: "Enter New Particulars",
      },
    ],
  },
  "DIR-12 - Appointment of Directors and KMP": {
    form: "DirectorAppointmentForm",
    fields: [
      {
        name: "Director Name",
        type: "text",
        placeholder: "Enter Director Name",
      },
      {
        name: "KMP Name",
        type: "text",
        placeholder: "Enter Key Managerial Personnel Name",
      },
    ],
  },
  "Form DIR-3-KYC - KYC of directors": {
    form: "DirectorKYCForm",
    fields: [
      {
        name: "DIN Number",
        type: "text",
        placeholder: "Enter DIN Number",
      },
      {
        name: "PAN Number",
        type: "text",
        placeholder: "Enter PAN Number",
      },
    ],
  },
  "Form DIR-3-KYC Web - Verify Director's KYC Details": {
    form: "VerifyDirectorKYCForm",
    fields: [
      {
        name: "DIN Number",
        type: "text",
        placeholder: "Enter DIN Number",
      },
    ],
  },
  "DIR-11 - Resignation of a Director": {
    form: "DirectorResignationForm",
    fields: [
      {
        name: "Director Name",
        type: "text",
        placeholder: "Enter Director Name",
      },
      {
        name: "Resignation Date",
        type: "date",
        placeholder: "Enter Resignation Date",
      },
    ],
  },
  "DIR-5 - Surrender of DIN": {
    form: "DINRemovalForm",
    fields: [
      {
        name: "DIN Number",
        type: "text",
        placeholder: "Enter DIN Number",
      },
    ],
  },
  "DIR-10 - Removal of disqualification of directors": {
    form: "DirectorDisqualificationRemovalForm",
    fields: [
      {
        name: "Director Name",
        type: "text",
        placeholder: "Enter Director Name",
      },
      {
        name: "Reason for Disqualification",
        type: "text",
        placeholder: "Enter Reason for Disqualification",
      },
    ],
  },
  "DIR-9 - Disqualification of Directors": {
    form: "DirectorDisqualificationForm",
    fields: [
      {
        name: "Director Name",
        type: "text",
        placeholder: "Enter Director Name",
      },
      {
        name: "Reason for Disqualification",
        type: "text",
        placeholder: "Enter Reason for Disqualification",
      },
    ],
  },
  "Form CHG-1-Intimation of creation / modification of charge": {
    form: "ChargeModificationForm",
    fields: [
      {
        name: "Charge Details",
        type: "text",
        placeholder: "Enter Charge Details",
      },
    ],
  },
  "Form CHG-4 - Intimation of satisfaction of charges": {
    form: "ChargeSatisfactionForm",
    fields: [
      {
        name: "Charge Satisfaction Details",
        type: "text",
        placeholder: "Enter Charge Satisfaction Details",
      },
    ],
  },
  "Form CHG-6- Intimation of appointment/cessation of receiver/manager": {
    form: "ReceiverManagerForm",
    fields: [
      {
        name: "Receiver/Manager Name",
        type: "text",
        placeholder: "Enter Receiver/Manager Name",
      },
    ],
  },
  "Form CHG-8-RD approval for delay in creation/ modification/rectification of charge":
    {
      form: "ChargeRDApprovalForm",
      fields: [
        {
          name: "Charge Creation/Modification Details",
          type: "text",
          placeholder: "Enter Charge Details",
        },
      ],
    },
  "Form CHG-9-Intimation for registration of creation or modification of charge for debentures":
    {
      form: "ChargeDebentureForm",
      fields: [
        {
          name: "Charge Details",
          type: "text",
          placeholder: "Enter Charge Details",
        },
      ],
    },
  "INC-20A - Declaration for commencement of business": {
    form: "CommencementBusinessForm",
    fields: [
      {
        name: "Company Name",
        type: "text",
        placeholder: "Enter Company Name",
      },
    ],
  },
  "INC-20 - Intimation of revocation of license issued u/s 8": {
    form: "RevocationLicenseForm",
    fields: [
      {
        name: "Company Name",
        type: "text",
        placeholder: "Enter Company Name",
      },
      {
        name: "Reason for Revocation",
        type: "text",
        placeholder: "Enter Reason",
      },
    ],
  },
  "INC-28 - Notice of Order of the Court/Competent authority": {
    form: "CourtOrderNoticeForm",
    fields: [
      {
        name: "Company Name",
        type: "text",
        placeholder: "Enter Company Name",
      },
      {
        name: "Order Details",
        type: "text",
        placeholder: "Enter Order Details",
      },
    ],
  },
  "GNL-4 - Addendum to form": {
    form: "AddendumForm",
    fields: [
      {
        name: "Form Name",
        type: "text",
        placeholder: "Enter Form Name",
      },
      {
        name: "Addendum Details",
        type: "text",
        placeholder: "Enter Addendum Details",
      },
    ],
  },
  "MGT-3 - Notice of situation where foreign register shall be kept": {
    form: "ForeignRegisterForm",
    fields: [
      {
        name: "Company Name",
        type: "text",
        placeholder: "Enter Company Name",
      },
      {
        name: "Register Location",
        type: "text",
        placeholder: "Enter Register Location",
      },
    ],
  },
  "PAS-2 - Information Memorandum": {
    form: "InformationMemorandumForm",
    fields: [
      {
        name: "Company Name",
        type: "text",
        placeholder: "Enter Company Name",
      },
      {
        name: "Details",
        type: "textarea",
        placeholder: "Enter Information Details",
      },
    ],
  },
  "Refund - Refund form": {
    form: "RefundForm",
    fields: [
      {
        name: "Refund Reason",
        type: "text",
        placeholder: "Enter Refund Reason",
      },
      {
        name: "Amount",
        type: "number",
        placeholder: "Enter Amount",
      },
    ],
  },
  "BEN-2 - Return to the Registrar in respect of declaration under section 90":
    {
      form: "BEN2Form",
      fields: [
        {
          name: "Beneficial Owner Name",
          type: "text",
          placeholder: "Enter Beneficial Owner Name",
        },
        {
          name: "Details",
          type: "textarea",
          placeholder: "Enter Details",
        },
      ],
    },
  "MGT-14 - Resolutions and agreements u/s 117": {
    form: "MGT14Form",
    fields: [
      {
        name: "Resolution Details",
        type: "text",
        placeholder: "Enter Resolution Details",
      },
    ],
  },
  "MSC-3 - Return of dormant companies": {
    form: "DormantCompaniesReturnForm",
    fields: [
      {
        name: "Company Name",
        type: "text",
        placeholder: "Enter Company Name",
      },
      {
        name: "Dormant Status Date",
        type: "date",
        placeholder: "Enter Date Company Became Dormant",
      },
    ],
  },
  "MSME - Half yearly return of Micro or Small Enterprise": {
    form: "MSMEHalfYearlyReturnForm",
    fields: [
      {
        name: "Company Name",
        type: "text",
        placeholder: "Enter Company Name",
      },
      {
        name: "Return Period",
        type: "text",
        placeholder: "Enter Return Period",
      },
    ],
  },
  "PAS-3 - Return of Allotment": {
    form: "ReturnOfAllotmentForm",
    fields: [
      {
        name: "Company Name",
        type: "text",
        placeholder: "Enter Company Name",
      },
      {
        name: "Allotment Details",
        type: "textarea",
        placeholder: "Enter Details of Allotment",
      },
    ],
  },
  "PAS-6 - Reconciliation of Share Capital Audit Report": {
    form: "ShareCapitalAuditReportForm",
    fields: [
      {
        name: "Company Name",
        type: "text",
        placeholder: "Enter Company Name",
      },
      {
        name: "Audit Details",
        type: "textarea",
        placeholder: "Enter Audit Details",
      },
    ],
  },
  "SH-11 - Buy-back of securities": {
    form: "BuyBackOfSecuritiesForm",
    fields: [
      {
        name: "Company Name",
        type: "text",
        placeholder: "Enter Company Name",
      },
      {
        name: "Securities to Buy-Back",
        type: "text",
        placeholder: "Enter Details of Securities",
      },
    ],
  },
  "GNL-2 - Submission of documents with the Registrar": {
    form: "DocumentsSubmissionForm",
    fields: [
      {
        name: "Company Name",
        type: "text",
        placeholder: "Enter Company Name",
      },
      {
        name: "Document Type",
        type: "text",
        placeholder: "Enter Document Type",
      },
    ],
  },
  "GNL-3 - Particulars of person(s) of clause 60 of section 2": {
    form: "Clause60ParticularsForm",
    fields: [
      {
        name: "Person Name",
        type: "text",
        placeholder: "Enter Person Name",
      },
      {
        name: "Details",
        type: "text",
        placeholder: "Enter Details",
      },
    ],
  },
  "MGT-6 - Declaration under section 89": {
    form: "MGT6DeclarationForm",
    fields: [
      {
        name: "Company Name",
        type: "text",
        placeholder: "Enter Company Name",
      },
      {
        name: "Shareholder Details",
        type: "text",
        placeholder: "Enter Shareholder Details",
      },
    ],
  },
  "SH-8 - Letter of Offer": {
    form: "LetterOfOfferForm",
    fields: [
      {
        name: "Company Name",
        type: "text",
        placeholder: "Enter Company Name",
      },
      {
        name: "Offer Details",
        type: "textarea",
        placeholder: "Enter Offer Details",
      },
    ],
  },
  "SH-9 - Declaration of Solvency": {
    form: "DeclarationOfSolvencyForm",
    fields: [
      {
        name: "Company Name",
        type: "text",
        placeholder: "Enter Company Name",
      },
      {
        name: "Solvency Details",
        type: "textarea",
        placeholder: "Enter Solvency Details",
      },
    ],
  },
  "PAS-7 - Details of pending share warrants": {
    form: "PendingShareWarrantsForm",
    fields: [
      {
        name: "Company Name",
        type: "text",
        placeholder: "Enter Company Name",
      },
      {
        name: "Warrant Details",
        type: "text",
        placeholder: "Enter Details of Pending Warrants",
      },
    ],
  },
  "INC-23 - Application to shift Registered Office": {
    form: "ShiftRegisteredOfficeForm",
    fields: [
      {
        name: "Company Name",
        type: "text",
        placeholder: "Enter Company Name",
      },
      {
        name: "New Registered Office Address",
        type: "text",
        placeholder: "Enter New Address",
      },
    ],
  },
  "INC-18 - Conversion of section 8 company": {
    form: "Section8ConversionForm",
    fields: [
      {
        name: "Company Name",
        type: "text",
        placeholder: "Enter Company Name",
      },
      {
        name: "Conversion Details",
        type: "textarea",
        placeholder: "Enter Conversion Details",
      },
    ],
  },
  "RD-1 - Filing application to Regional Director": {
    form: "RegionalDirectorApplicationForm",
    fields: [
      {
        name: "Company Name",
        type: "text",
        placeholder: "Enter Company Name",
      },
      {
        name: "Application Details",
        type: "textarea",
        placeholder: "Enter Application Details",
      },
    ],
  },
  "ADJ - Memorandum of Appeal": {
    form: "AppealMemoForm",
    fields: [
      {
        name: "Appeal Subject",
        type: "text",
        placeholder: "Enter Appeal Subject",
      },
      {
        name: "Details of Appeal",
        type: "textarea",
        placeholder: "Enter Appeal Details",
      },
    ],
  },
  "INC-24 - Application for change of name": {
    form: "ChangeOfNameApplicationForm",
    fields: [
      {
        name: "Current Company Name",
        type: "text",
        placeholder: "Enter Current Company Name",
      },
      {
        name: "New Company Name",
        type: "text",
        placeholder: "Enter New Company Name",
      },
    ],
  },
  "INC-12 - Application for License to an existing company u/s 8": {
    form: "Section8LicenseApplicationForm",
    fields: [
      {
        name: "Company Name",
        type: "text",
        placeholder: "Enter Company Name",
      },
      {
        name: "License Details",
        type: "textarea",
        placeholder: "Enter License Details",
      },
    ],
  },
  "MSC-1 - Application for obtaining status of dormant company": {
    form: "DormantCompanyStatusForm",
    fields: [
      {
        name: "Company Name",
        type: "text",
        placeholder: "Enter Company Name",
      },
      {
        name: "Status Application Details",
        type: "textarea",
        placeholder: "Enter Application Details",
      },
    ],
  },
  "Form MSC-4 - Application for obtaining active status": {
    form: "ActiveCompanyStatusForm",
    fields: [
      {
        name: "Company Name",
        type: "text",
        placeholder: "Enter Company Name",
      },
      {
        name: "Status Application Details",
        type: "textarea",
        placeholder: "Enter Application Details",
      },
    ],
  },
  "STK-2 - Removal of name from Register of Companies": {
    form: "RemoveCompanyNameForm",
    fields: [
      {
        name: "Company Name",
        type: "text",
        placeholder: "Enter Company Name",
      },
      {
        name: "Reason for Removal",
        type: "text",
        placeholder: "Enter Reason for Removal",
      },
    ],
  },
  "MR-2-CG Approval for Appointment/Reappointment of directors": {
    form: "DirectorAppointmentApprovalForm",
    fields: [
      {
        name: "Director Name",
        type: "text",
        placeholder: "Enter Director Name",
      },
      {
        name: "Appointment Details",
        type: "textarea",
        placeholder: "Enter Appointment Details",
      },
    ],
  },
  "Change Request Form": {
    form: "ChangeRequestForm",
    fields: [
      {
        name: "Request Details",
        type: "textarea",
        placeholder: "Enter Change Request Details",
      },
    ],
  },
  "AOC-5 - Notice of address at which books of account are maintained": {
    form: "BooksOfAccountNoticeForm",
    fields: [
      {
        name: "Company Name",
        type: "text",
        placeholder: "Enter Company Name",
      },
      {
        name: "Address of Books of Account",
        type: "text",
        placeholder: "Enter Address",
      },
    ],
  },
  "Form DPT 3 - Return of deposits": {
    form: "ReturnOfDepositsForm",
    fields: [
      {
        name: "Company Name",
        type: "text",
        placeholder: "Enter Company Name",
      },
      {
        name: "Deposit Details",
        type: "textarea",
        placeholder: "Enter Deposit Details",
      },
    ],
  },
  "Form DPT 4 - Statement regarding deposits existing on the commencement of the Act":
    {
      form: "DPT4DepositsStatementForm",
      fields: [
        {
          name: "Company Name",
          type: "text",
          placeholder: "Enter Company Name",
        },
        {
          name: "Deposit Details",
          type: "textarea",
          placeholder: "Enter Details of Existing Deposits",
        },
      ],
    },
  "NDH-1 - Return of Statutory Compliances": {
    form: "NDH1StatutoryCompliancesForm",
    fields: [
      {
        name: "Company Name",
        type: "text",
        placeholder: "Enter Company Name",
      },
      {
        name: "Compliance Details",
        type: "textarea",
        placeholder: "Enter Statutory Compliance Details",
      },
    ],
  },
  "NDH-2 - Application for extension of time": {
    form: "NDH2ExtensionForm",
    fields: [
      {
        name: "Company Name",
        type: "text",
        placeholder: "Enter Company Name",
      },
      {
        name: "Extension Request Details",
        type: "textarea",
        placeholder: "Enter Details of Extension Request",
      },
    ],
  },
  "NDH-3 - Return of Nidhi Company (Half year)": {
    form: "NDH3NidhiCompanyReturnForm",
    fields: [
      {
        name: "Company Name",
        type: "text",
        placeholder: "Enter Company Name",
      },
      {
        name: "Return Period",
        type: "text",
        placeholder: "Enter Return Period",
      },
    ],
  },
  "NDH-4 - Declaration as Nidhi Company": {
    form: "NDH4NidhiCompanyDeclarationForm",
    fields: [
      {
        name: "Company Name",
        type: "text",
        placeholder: "Enter Company Name",
      },
      {
        name: "Nidhi Company Details",
        type: "textarea",
        placeholder: "Enter Nidhi Company Declaration Details",
      },
    ],
  },
  "FC-1 - Information by foreign company": {
    form: "FC1ForeignCompanyInformationForm",
    fields: [
      {
        name: "Foreign Company Name",
        type: "text",
        placeholder: "Enter Foreign Company Name",
      },
      {
        name: "Company Details",
        type: "textarea",
        placeholder: "Enter Foreign Company Details",
      },
    ],
  },
  "FC-2 - Alteration in the documents of foreign company": {
    form: "FC2AlterationForeignCompanyForm",
    fields: [
      {
        name: "Foreign Company Name",
        type: "text",
        placeholder: "Enter Foreign Company Name",
      },
      {
        name: "Alteration Details",
        type: "textarea",
        placeholder: "Enter Alteration Details",
      },
    ],
  },
  "FC-3 - Annual accounts by foreign company": {
    form: "FC3ForeignCompanyAnnualAccountsForm",
    fields: [
      {
        name: "Foreign Company Name",
        type: "text",
        placeholder: "Enter Foreign Company Name",
      },
      {
        name: "Annual Accounts Details",
        type: "textarea",
        placeholder: "Enter Annual Accounts Details",
      },
    ],
  },
  "FC-4 - Annual accounts by foreign company": {
    form: "FC4ForeignCompanyAnnualAccountsForm",
    fields: [
      {
        name: "Foreign Company Name",
        type: "text",
        placeholder: "Enter Foreign Company Name",
      },
      {
        name: "Annual Accounts Details",
        type: "textarea",
        placeholder: "Enter Annual Accounts Details",
      },
    ],
  },
  "IEPF-1 - Statement of amounts credited/Transfer of amounts": {
    form: "IEPF1AmountTransferForm",
    fields: [
      {
        name: "Company Name",
        type: "text",
        placeholder: "Enter Company Name",
      },
      {
        name: "Amount Transfer Details",
        type: "textarea",
        placeholder: "Enter Amount Transfer Details",
      },
    ],
  },
  "IEPF-1A - Statement of amounts credited": {
    form: "IEPF1AAmountCreditedForm",
    fields: [
      {
        name: "Company Name",
        type: "text",
        placeholder: "Enter Company Name",
      },
      {
        name: "Credited Amount Details",
        type: "textarea",
        placeholder: "Enter Details of Amounts Credited",
      },
    ],
  },
  "IEPF-2 - Statement of unclaimed/unpaid amounts": {
    form: "IEPF2UnclaimedAmountsForm",
    fields: [
      {
        name: "Company Name",
        type: "text",
        placeholder: "Enter Company Name",
      },
      {
        name: "Unclaimed Amount Details",
        type: "textarea",
        placeholder: "Enter Details of Unclaimed/Unpaid Amounts",
      },
    ],
  },
  "IEPF-4 - Statement of shares and unclaimed/unpaid amounts": {
    form: "IEPF4SharesUnclaimedAmountsForm",
    fields: [
      {
        name: "Company Name",
        type: "text",
        placeholder: "Enter Company Name",
      },
      {
        name: "Shares and Amount Details",
        type: "textarea",
        placeholder: "Enter Details of Shares and Unclaimed Amounts",
      },
    ],
  },
  "IEPF-5 - E-verification report": {
    form: "IEPF5EVerificationForm",
    fields: [
      {
        name: "Company Name",
        type: "text",
        placeholder: "Enter Company Name",
      },
      {
        name: "E-verification Report Details",
        type: "textarea",
        placeholder: "Enter E-verification Report Details",
      },
    ],
  },
  "IEPF-5 Web form - Claiming unpaid amounts and shares": {
    form: "IEPF5WebClaimForm",
    fields: [
      {
        name: "Claimant Name",
        type: "text",
        placeholder: "Enter Claimant Name",
      },
      {
        name: "Unpaid Amount and Shares",
        type: "textarea",
        placeholder: "Enter Details of Unpaid Amounts and Shares",
      },
    ],
  },
  // Additional sections for "View Public Documents", "My Cart", etc.
  "View Public Documents": {
    form: "PublicDocumentsViewForm",
    fields: [
      {
        name: "Document Type",
        type: "text",
        placeholder: "Enter Document Type",
      },
      {
        name: "Document Details",
        type: "textarea",
        placeholder: "Enter Document Details",
      },
    ],
  },
  "My Cart": {
    form: "MyCartForm",
    fields: [
      {
        name: "Item Name",
        type: "text",
        placeholder: "Enter Item Name",
      },
      {
        name: "Item Details",
        type: "textarea",
        placeholder: "Enter Item Details",
      },
    ],
  },
  Workspace: {
    form: "WorkspaceForm",
    fields: [
      {
        name: "Workspace Name",
        type: "text",
        placeholder: "Enter Workspace Name",
      },
      {
        name: "Workspace Details",
        type: "textarea",
        placeholder: "Enter Workspace Details",
      },
    ],
  },
  "My Cart GCC": {
    form: "MyCartGCCForm",
    fields: [
      {
        name: "Item Name",
        type: "text",
        placeholder: "Enter Item Name",
      },
      {
        name: "Item Details",
        type: "textarea",
        placeholder: "Enter Item Details",
      },
    ],
  },
  "My Workspace GCC": {
    form: "MyWorkspaceGCCForm",
    fields: [
      {
        name: "Workspace Name",
        type: "text",
        placeholder: "Enter Workspace Name",
      },
      {
        name: "Workspace Details",
        type: "textarea",
        placeholder: "Enter Workspace Details",
      },
    ],
  },
};

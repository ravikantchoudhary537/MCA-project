import React, { useState } from "react";
import { Input } from "@/components/ui/input";

const LLPDetails = () => {
  const [purpose, setPurpose] = useState("");
  const [cin, setCin] = useState("");
  const [llpin, setLlpIn] = useState("");
  const [nicCode, setNicCode] = useState("");
  const [mainNicCode, setMainNicCode] = useState("");
  const [description, setDescription] = useState("");
  const [proposedName1, setProposedName1] = useState("");
  const [proposedName2, setProposedName2] = useState("");
  const [attachment, setAttachment] = useState(null);
  const [llpOrCompanyName, setLlpOrCompanyName] = useState(""); 

  const handleFileChange = (e) => {
    setAttachment(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      purpose,
      cin,
      llpin,
      nicCode,
      mainNicCode,
      description,
      proposedName1,
      proposedName2,
      attachment,
      llpOrCompanyName, 
    });
  };

  const renderFormFields = () => {
    switch (purpose) {
      case "new-incorporation":
      case "conversion-firm":
        return (
          <div className="space-y-4">
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label className="block">2(a) CIN</label>
                <Input
                  type="text"
                  value={cin}
                  onChange={(e) => setCin(e.target.value)}
                />
              </div>
              <div className="w-1/2">
                <label className="block">2(b) LLPIN</label>
                <Input
                  type="text"
                  value={llpin}
                  onChange={(e) => setLlpIn(e.target.value)}
                />
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label className="block">NIC Code</label>
                <Input
                  type="number"
                  value={nicCode}
                  onChange={(e) => setNicCode(e.target.value)}
                />
              </div>
              <div className="w-1/2">
                <label className="block">3(a) Main NIC code (sub-class)</label>
                <Input
                  type="text"
                  value={mainNicCode}
                  onChange={(e) => setMainNicCode(e.target.value)}
                />
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block">3(b) Description of the main sub-class</label>
                <Input
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div>
                <label className="block">4(a) Proposed Name 1</label>
                <Input
                  type="text"
                  value={proposedName1}
                  onChange={(e) => setProposedName1(e.target.value)}
                />
              </div>
              <div>
                <label className="block">4(b) Proposed Name 2</label>
                <Input
                  type="text"
                  value={proposedName2}
                  onChange={(e) => setProposedName2(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label className="block">Attachment</label>
              <input
                id="attachment"
                type="file"
                onChange={handleFileChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
            >
              Submit
            </button>
          </div>
        );
      case "conversion-private":
        return (
            <div className="space-y-4">
              <div className="flex space-x-4">
                <div className="w-1/2">
                  <label className="block">2(a) CIN</label>
                  <Input
                    type="text"
                    value={cin}
                    onChange={(e) => setCin(e.target.value)}
                  />
                </div>
                <div className="w-1/2">
                  <label className="block">2(b) LLPIN</label>
                  <Input
                    type="text"
                    value={llpin}
                    onChange={(e) => setLlpIn(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full">
              <label className="block">
                Enter LLP/Company name to find LLPIN/CIN
              </label>
              <Input
                type="text"
                value={llpOrCompanyName}
                onChange={(e) => setLlpOrCompanyName(e.target.value)}
              />
            </div>
              <div className="flex space-x-4">
                <div className="w-1/2">
                  <label className="block">NIC Code</label>
                  <Input
                    type="number"
                    value={nicCode}
                    onChange={(e) => setNicCode(e.target.value)}
                  />
                </div>
                <div className="w-1/2">
                  <label className="block">3(a) Main NIC code (sub-class)</label>
                  <Input
                    type="text"
                    value={mainNicCode}
                    onChange={(e) => setMainNicCode(e.target.value)}
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block">3(b) Description of the main sub-class</label>
                  <Input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block">4(a) Proposed Name 1</label>
                  <Input
                    type="text"
                    value={proposedName1}
                    onChange={(e) => setProposedName1(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block">4(b) Proposed Name 2</label>
                  <Input
                    type="text"
                    value={proposedName2}
                    onChange={(e) => setProposedName2(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <label className="block">Attachment</label>
                <input
                  id="attachment"
                  type="file"
                  onChange={handleFileChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
              >
                Submit
              </button>
            </div>
          );
      case "change-existing":
        return (
            <div className="space-y-4">
              <div className="flex space-x-4">
                <div className="w-1/2">
                  <label className="block">2(a) CIN</label>
                  <Input
                    type="text"
                    value={cin}
                    onChange={(e) => setCin(e.target.value)}
                  />
                </div>
                <div className="w-1/2">
                  <label className="block">2(b) LLPIN</label>
                  <Input
                    type="text"
                    value={llpin}
                    onChange={(e) => setLlpIn(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full">
              <label className="block">
                Enter LLP/Company name to find LLPIN/CIN
              </label>
              <Input
                type="text"
                value={llpOrCompanyName}
                onChange={(e) => setLlpOrCompanyName(e.target.value)}
              />
            </div>
              <div className="flex space-x-4">
                <div className="w-1/2">
                  <label className="block">3(a) Main NIC code (sub-class)</label>
                  <Input
                    type="text"
                    value={mainNicCode}
                    onChange={(e) => setMainNicCode(e.target.value)}
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block">3(b) Description of the main sub-class</label>
                  <Input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block">4(a) Proposed Name 1</label>
                  <Input
                    type="text"
                    value={proposedName1}
                    onChange={(e) => setProposedName1(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block">4(b) Proposed Name 2</label>
                  <Input
                    type="text"
                    value={proposedName2}
                    onChange={(e) => setProposedName2(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <label className="block">Attachment</label>
                <input
                  id="attachment"
                  type="file"
                  onChange={handleFileChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
              >
                Submit
              </button>
            </div>
          );
      default:
        return null;
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold text-center mb-6">LLP Details</h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="block text-lg mb-2">Purpose of Filing</label>
          <div className="space-x-4 flex">
            <label className="inline-flex items-center space-x-2">
              <input
                type="radio"
                name="purpose"
                value="new-incorporation"
                checked={purpose === "new-incorporation"}
                onChange={(e) => setPurpose(e.target.value)}
                className="form-radio text-blue-500"
              />
              <span>New Incorporation</span>
            </label>
            <label className="inline-flex items-center space-x-2">
              <input
                type="radio"
                name="purpose"
                value="conversion-firm"
                checked={purpose === "conversion-firm"}
                onChange={(e) => setPurpose(e.target.value)}
                className="form-radio text-blue-500"
              />
              <span>Conversion of Firm into LLP</span>
            </label>
            <label className="inline-flex items-center space-x-2">
              <input
                type="radio"
                name="purpose"
                value="conversion-private"
                checked={purpose === "conversion-private"}
                onChange={(e) => setPurpose(e.target.value)}
                className="form-radio text-blue-500"
              />
              <span>Conversion of Private Company into LLP</span>
            </label>
            <label className="inline-flex items-center space-x-2">
              <input
                type="radio"
                name="purpose"
                value="change-existing"
                checked={purpose === "change-existing"}
                onChange={(e) => setPurpose(e.target.value)}
                className="form-radio text-blue-500"
              />
              <span>Change of Existing LLP</span>
            </label>
          </div>
        </div>
        {renderFormFields()}
      </form>
    </div>
  );
};

export default LLPDetails;

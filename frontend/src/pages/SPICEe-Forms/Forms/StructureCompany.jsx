import StructureTopPart from '@/pages/SPICe-Part-B/Forms/Structure-top';
import React from 'react'
import StructureTopPartNew from './Structure-top-new';
import { Input } from '@/components/ui/input';
import EquityShareTable from './EquityShare';
import PreferenceShareTable from './PrefrenceShare';

const StructureCompany = ({ state, dispatch}) => {
  const { step1 } = state

  const handleChange = (field, e) => {
    dispatch({ type: "set-step-1-fields", payload: { field, value: e.target.value } })
  }

  return (
    <>
      <div className='p-8'>
        <StructureTopPartNew state={state} dispatch={dispatch} />

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block mb-2">Total authorized share capital (in INR)</label>
            <Input
              type="number"
              value={step1.total_authorized }
              readOnly
              className="w-full"
            />
          </div>

          <div>
            <label className="block mb-2">Total classified authorized share capital (in INR)</label>
            <Input
              type="number"
              value={step1.total_classified}
              readOnly
              className="w-full"
            />
          </div>
          <div>
            <label className="block mb-2">Total subscribed share capital (in INR)</label>
            <Input
              type="number"
              value={step1.total_subscribed}
              readOnly
              className="w-full"
            />
          </div>

          <div>
            <label className="block mb-2">Total unclassified authorized share capital (in INR)</label>
            <Input
              type="number"
              value={step1.total_unclassified}
              onChange={(e) => {
                dispatch({ type: "set-total_unclassified", payload: e.target.value });
              }}
              className="w-full"
            />
          </div>
        </div>

        <div>
        <h3 className="text-lg font-medium my-4"> 3A(i) Equity share capital </h3>
          <label className="block mb-2">Number of classes</label>
          <Input
            type="number"
            onChange={(e) => {
              dispatch({ type: "number-of-classes-equity", payload: e.target.value })
            }}
            value={step1.number_classes}
            className="w-[50%]"
          />
        </div>
        <EquityShareTable state={state} dispatch={dispatch} />

        <div>
        <h3 className="text-lg font-medium my-4"> 3A(ii) Preference share capital </h3>
          <label className="block mb-2">Number of classes</label>
          <Input
            type="number"
            onChange={(e) => {
              dispatch({ type: "number-of-classes-prefrence", payload: e.target.value })
            }}
            value={step1.number_classes_prefrence}
            className="w-[50%]"
          />
        </div>
        <PreferenceShareTable state={state} dispatch={dispatch} />
      </div>
    </>
  ) 
}

export default StructureCompany
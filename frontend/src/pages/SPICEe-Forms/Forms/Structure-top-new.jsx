import React from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Table } from '@/components/ui/table';
import { Button } from '@/components/ui/button';


const StructureTopPartNew = ({ state, dispatch }) => {
  const { AOA, Details_articles_table, Articles_entrenchment, company_is } = state.step1;

  const handleAOACheckboxChange = (choice) => {
    dispatch({
      type: 'set-AOA',
      payload: { choice },  
    });
  };

  const handleCompanyIsChange = (companyChoice) => {
    dispatch({
      type: 'set-company-is',
      payload: { companyChoice },
    });
  };

  // Handle input change for article details
  const handleArticleDetailChange = ( field, value) => {
    dispatch({
      type: 'set-details-articles-table',
      payload: { field , value },
    });
  };

  return (
    <div className="mb-6">
      <h3 className="text-2xl mb-4 text-center relative text-violet-500 font-semibold decoration-violet-500 after:h-[2px] after:bottom-0 after:transition-all after:duration-300">
        Structure of the Company
      </h3>

      {/* AOA Entrenchment Section */}
      <div className="mb-4">
        <label className="block text-lg font-medium">
          1(a) *Whether AOA is entrenched?
        </label>
        <div className="flex gap-4 mt-2">
          <label className="flex items-center gap-1">
            <Checkbox
              checked={AOA.yes}
              onCheckedChange={() => handleAOACheckboxChange('yes')}
            />
            Yes
          </label>
          <label className="flex items-center gap-1">
            <Checkbox
              checked={AOA.no}
              onCheckedChange={() => handleAOACheckboxChange('no')}
            />
            No
          </label>
        </div>
      </div>

      {/* Show entrenchment details if AOA is entrenched */}
      {AOA.yes && (
        <div className="mt-6 space-y-4">
          <div className="mb-4">
            <label className="block text-lg font-medium mb-2">
              (b) Number of Articles to which provisions of entrenchment is applicable
            </label>
            <Input
              type="number"
              name="numberOfArticles"
              value={Articles_entrenchment}
              onChange={(e) => dispatch({
                type: 'set-step-1-fields',
                payload: { field: 'Articles_entrenchment', value: e.target.value }
              })}
              placeholder="Enter number of articles"
            />
          </div>

          <div className="mb-2">
            <label className="block text-lg font-medium mb-2">
              Details of such articles
            </label>
            <Table>
              <thead>
                <tr>
                  <th className="px-4 py-3">Sr no</th>
                  <th className="px-4 py-3">Article number</th>
                  <th className="px-4 py-3">Short description on entrenchment of the clause</th>
                </tr>
              </thead>
              <tbody>
                <tr >
                  <td>
                    <Input
                      type="text"
                      value={Details_articles_table.serialNo}
                      onChange={(e) => handleArticleDetailChange('serialNo', e.target.value)}
                      placeholder="Sr no"
                    />
                  </td>
                  <td>
                    <Input
                      type="text"
                      value={Details_articles_table.articleNumber}
                      onChange={(e) => handleArticleDetailChange( 'articleNumber', e.target.value)}
                      placeholder="Article number"
                    />
                  </td>
                  <td>
                    <Input
                      type="text"
                      value={Details_articles_table.description}
                      onChange={(e) => handleArticleDetailChange('description', e.target.value)}
                      placeholder="Short description"
                    />
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      )}

      {/* Company is Section */}
      <div className="mb-4 mt-4">
        <label className="block text-lg font-medium">
          2 *Company is
        </label>
        <div className="flex gap-4 mt-2">
          <label className="flex items-center gap-1">
            <Checkbox
              checked={company_is.having_share_capital}
              onCheckedChange={() => handleCompanyIsChange('having_share_capital')}
            />
            Having share capital
          </label>
          <label className="flex items-center gap-1">
            <Checkbox
              checked={company_is.having_not_share_capital}
              onCheckedChange={() => handleCompanyIsChange('having_not_share_capital')}
            />
            Not having share capital
          </label>
        </div>
      </div>
    </div>
  );
};

export default StructureTopPartNew;

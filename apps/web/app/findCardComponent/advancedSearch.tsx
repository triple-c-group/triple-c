import React, { useState } from 'react';

const AdvancedSearch: React.FC = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [budgetValue, setBudgetValue] = useState(0);

  const handleTagChange = (tag: string) => {
    setTags((prevTags) => prevTags.includes(tag) ? prevTags.filter((t) => t !== tag) : [...prevTags, tag]);
  };
  

  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Advanced Search</h3>
      <hr className="w-full border-t border-gray-200 my-4"></hr>
      <div className="mb-4">
        <div className="flex items-center">
          <h1 className="text-sm text-semibold">Tags Search </h1>
          <button className="text-sm text-gray-500 ml-36">Clear </button>
        </div>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="e.g. 'Thai Airways'"
            className="border border-gray-300 rounded-md px-3 py-2 w-full mr-2"
          />
        </div>
        <button
          onClick={() => handleTagChange('tag')}
          className={`mt-2 px-5 py-1 rounded-xl font-medium ${tags.includes('tag') ? 'bg-green-500 text-white' : 'bg-lime-200 text-black'}`}
        >
          tag
        </button>
        <button
          onClick={() => handleTagChange('tag')}
          className={`mt-2 ml-3 px-5 py-1 rounded-xl font-medium ${tags.includes('tag') ? 'bg-pink-500 text-white' : 'bg-pink-300 text-black'}`}
        >
          tag
        </button>
      </div>
      <div className="mb-4">
        <label htmlFor="budget" className="block font-medium mb-2">
          Budget
        </label>
        <input
          type="range"
          id="budget"
          min={0}
          max={10000}
          className="w-full"
          value={budgetValue} 
          onChange={(e) => setBudgetValue(parseInt(e.target.value))}
        />
        <div className="flex justify-between text-sm text-gray-500">
          <span>฿0</span>
          <span>฿{budgetValue}</span> 
          <span>฿10,000</span>
        </div>
      </div>
      <div className="mb-4">
        <label className="block font-medium mb-2">Lifestyle &amp; Usage</label>
        <div className="grid grid-cols-1 gap-2">
          <div>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-green-600"
              />
              <span className="ml-2">First Jobber</span>
            </label>
          </div>
          <div>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-green-600"
              />
              <span className="ml-2">Shopper</span>
            </label>
          </div>
          <div>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-green-600"
              />
              <span className="ml-2">Health &amp; Fitness</span>
            </label>
          </div>
          <div>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-green-600"
              />
              <span className="ml-2">Food</span>
            </label>
          </div>
          <div>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-green-600"
              />
              <span className="ml-2">Travel &amp; Commute</span>
            </label>
          </div>
          <div>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-green-600"
              />
              <span className="ml-2">Exclusive</span>
            </label>
          </div>
        </div>
      </div>
      <div className="mb-4">
        <label className="block font-medium mb-2">Preferred Bank</label>
        <div className="grid grid-cols-1 gap-2">
          <div>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="preferred-bank"
                className="form-checkbox h-5 w-5 text-green-600"
              />
              <span className="ml-2">Kasikorn Bank</span>
            </label>
          </div>
          <div>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="preferred-bank"
                className="form-checkbox h-5 w-5 text-green-600"
              />
              <span className="ml-2">SCB</span>
            </label>
          </div>
          <div>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="preferred-bank"
                className="form-checkbox h-5 w-5 text-green-600"
              />
              <span className="ml-2">Krungsri</span>
            </label>
          </div>
          <div>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="preferred-bank"
                className="form-checkbox h-5 w-5 text-green-600"
              />
              <span className="ml-2">Krungthai Bank</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedSearch;
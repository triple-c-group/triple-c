import AdvancedSearch from '~/findCardComponent/advancedSearch';
import React from 'react';
import NavBar from 'app/pageComponent/cutopBar_button'

const applyPage: React.FC = () => {
  return (
    <div className="flex">
      <NavBar topbarScroll={false} setThaiLan={undefined} thaiLan={false}/>
      <div className="ml-5 mt-32 w-3/4 p-4">
      <h1 className="text-sm text-gray-500">Recommend cards </h1> 
        <div className="flex items-center mb-4"> 
          <h2 className="text-2xl font-bold mr-4">Results </h2> 
          <div className="flex w-full">
            <input
              type="text"
              placeholder="Search Card By Card Name"
              className="border border-gray-300 rounded-full px-3 py-2 w-full ml-20 mr-2"
            />
            <button className="bg-white text-[#00000080] border border-gray-300 rounded-full px-4 py-2">Search</button>
          </div>
        </div>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 dark:opacity-80"></hr>
       <div className="w-1/4 bg-white border border-gray-300 rounded-lg p-4">
          <AdvancedSearch />
        </div>
      </div>
    </div>
  );
};

export default applyPage;

import React, { useState } from 'react';

const tabs = ['All Orders', 'Pending', 'Reviewed', 'Arrived'];

const FooterTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('All Orders');

  return (
    <div className=" bottom-0 fixed flex bg-gray-50 w-full items-center border-t border-gray-400 px-4 py-2 pl-14 space-x-6 text-sm">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`pb-1 ${
            activeTab === tab
              ? 'font-semibold bg-[#E8F0E9] w-[111px] h-[44px] py-[10px] px-[16px] text-green-800 border-t-2 border-green-700'
              : 'text-gray-400'
          }`}
        >
          {tab}
        </button>
      ))}
      <button className="text-xl text-gray-500">+</button>
    </div>
  );
};

export default FooterTabs;

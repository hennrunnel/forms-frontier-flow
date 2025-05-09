
import React from 'react';

interface TabItem {
  id: string;
  label: string;
}

interface TabsProps {
  items: TabItem[];
  activeTab: string;
  onTabChange: (id: string) => void;
}

const Tabs: React.FC<TabsProps> = ({ items, activeTab, onTabChange }) => {
  return (
    <div className="flex border-b border-zinc-100">
      {items.map((item, index) => (
        <div 
          key={item.id}
          className={`relative cursor-pointer ${index === 0 ? 'pl-6' : 'px-4'}`}
          onClick={() => onTabChange(item.id)}
        >
          <div className="py-4">
            <span 
              className={`text-sm font-medium leading-normal ${
                activeTab === item.id ? 'text-brand-primary-blue' : 'text-black'
              }`}
            >
              {item.label}
            </span>
          </div>
          {activeTab === item.id && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-primary-blue"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Tabs;

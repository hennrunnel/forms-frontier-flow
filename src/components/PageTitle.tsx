import React from 'react';
import { ArrowLeft } from 'lucide-react';
interface PageTitleProps {
  title: string;
  subtitle?: string;
  onBack?: () => void;
}
const PageTitle: React.FC<PageTitleProps> = ({
  title,
  subtitle,
  onBack
}) => {
  return <div className="container mx-auto py-8 px-6">
      <div className="max-w-[992px] mx-auto">
        <div className="flex items-center mb-2">
          {onBack && <button onClick={onBack} className="mr-4 p-2 rounded-full hover:bg-gray-100" aria-label="Go back">
              <ArrowLeft className="w-6 h-6" />
            </button>}
          <h1 className="text-black text-4xl font-normal leading-10">{title}</h1>
        </div>
        {subtitle}
      </div>
    </div>;
};
export default PageTitle;
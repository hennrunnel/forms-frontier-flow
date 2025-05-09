
import React, { ReactNode } from 'react';

interface IntegrationCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  actionType: 'primary' | 'secondary';
  actionLabel: string;
  onAction: () => void;
}

const IntegrationCard: React.FC<IntegrationCardProps> = ({
  title,
  description,
  icon,
  actionType,
  actionLabel,
  onAction
}) => {
  return (
    <div className="w-full h-60 bg-neutral-50 rounded shadow-card">
      <div className="p-6">
        <div className="flex items-center mb-6">
          <div className="mr-4">{icon}</div>
          <h3 className="text-black text-sm font-semibold leading-none">{title}</h3>
        </div>
        <p className="text-neutral-400 text-sm font-medium leading-tight mb-6">
          {description}
        </p>
        <button
          onClick={onAction}
          className={`px-4 py-2 rounded-lg ${
            actionType === 'primary'
              ? 'bg-brand-primary-blue text-white'
              : 'bg-opacity-10 bg-brand-primary-blue text-brand-primary-blue'
          }`}
        >
          <span className="text-sm font-semibold leading-normal">{actionLabel}</span>
        </button>
      </div>
    </div>
  );
};

export default IntegrationCard;


import React from 'react';
import { Bell } from 'lucide-react';

interface HeaderProps {
  username: string;
  avatarUrl?: string;
}

const Header: React.FC<HeaderProps> = ({ username, avatarUrl }) => {
  return (
    <div className="w-full h-32 overflow-hidden bg-white border-b border-brand-greys-grey3">
      <div className="container mx-auto px-4 h-full flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-11 h-11 bg-brand-primary-grey rounded"></div>
        </div>
        <div className="flex items-center space-x-4">
          <Bell className="w-6 h-6" />
          <span className="text-right text-black text-base font-medium leading-loose">{username}</span>
          {avatarUrl ? (
            <img 
              src={avatarUrl} 
              alt={username} 
              className="w-10 h-10 rounded-full object-cover"
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-600 text-sm font-medium">
                {username.charAt(0).toUpperCase()}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;

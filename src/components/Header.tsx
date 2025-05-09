
import React from 'react';
import { Bell } from 'lucide-react';

interface HeaderProps {
  username: string;
  avatarUrl?: string;
}

const Header: React.FC<HeaderProps> = ({
  username,
  avatarUrl
}) => {
  return (
    <div className="bg-white py-4 px-6 border-b">
      <div className="container mx-auto flex justify-end items-center">
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full hover:bg-gray-100">
            <Bell className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">{username}</span>
            {avatarUrl ? (
              <img 
                src={avatarUrl} 
                alt={`${username}'s avatar`}
                className="w-8 h-8 rounded-full object-cover" 
              />
            ) : (
              <div className="w-8 h-8 rounded-full bg-brand-primary-blue text-white flex items-center justify-center">
                {username.charAt(0).toUpperCase()}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

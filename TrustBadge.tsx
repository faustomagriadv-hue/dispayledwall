
import React from 'react';

interface TrustBadgeProps {
  icon: React.ReactNode;
  text: string;
}

export const TrustBadge: React.FC<TrustBadgeProps> = ({ icon, text }) => {
  return (
    <div className="flex flex-col items-center text-center p-4 bg-white dark:bg-zinc-800 rounded-lg shadow-md">
      <div className="text-accent text-4xl mb-2">{icon}</div>
      <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">{text}</span>
    </div>
  );
};

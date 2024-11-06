import React, { useState, useEffect } from 'react';
import { BellIcon, SearchIcon, MenuIcon, XIcon, SunIcon, MoonIcon } from '@heroicons/react/outline';
interface TopNavigationProps {
  onToggleSidebar: () => void;
}

const TopNavigation: React.FC<TopNavigationProps> = ({ onToggleSidebar }) => {
  const [searchText, setSearchText] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);


  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    onToggleSidebar();
  };

  const handleToggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark', !isDarkMode);
  };

  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  return (
    <div className="flex items-center justify-between px-4 py-2 bg-white dark:bg-gray-900 border-b dark:border-gray-700">
      <button
        onClick={handleToggleSidebar}
        className="text-gray-700 dark:text-gray-200 p-2 rounded-lg focus:outline-none md:hidden"
      >
        {isSidebarOpen ? (
          <XIcon className="h-6 w-6" aria-hidden="true" />
        ) : (
          <MenuIcon className="h-6 w-6" aria-hidden="true" />
        )}
      </button>

      <div className="relative hidden md:flex items-center w-full max-w-md">
        <input
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="w-full pl-4 pr-10 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-300"
        />
        {searchText && (
          <button
            onClick={() => setSearchText('')}
            className="absolute right-10 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
          >
            ✖️
          </button>
        )}
        <SearchIcon className="absolute right-3 h-5 w-5 text-gray-500 dark:text-gray-400" />
      </div>

      <div className="flex items-center space-x-1">
        <button
          onClick={handleToggleTheme}
          className="p-2 rounded-lg focus:outline-none hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200"
        >
          {isDarkMode ? (
            <SunIcon className="h-6 w-6" aria-hidden="true" />
          ) : (
            <MoonIcon className="h-6 w-6" aria-hidden="true" />
          )}
        </button>

        <button className="relative text-gray-700 dark:text-gray-200 p-2 rounded-lg focus:outline-none hover:bg-gray-100 dark:hover:bg-gray-800">
          <BellIcon className="h-6 w-6" aria-hidden="true" />
          <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-1.5 text-xs font-semibold text-white bg-red-500 rounded-full"></span>
        </button>
      </div>
    </div>
  );
};

export default TopNavigation;

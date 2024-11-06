import React from 'react';

const ProjectOverview: React.FC = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-100">Project Overview</h3>
      
      <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
        <span>Timeline:</span> Apr 14 - May 7
      </div>
      
      <div className="flex items-center mb-4">
        <span className="text-gray-600 dark:text-gray-400 text-sm">Team:</span>
        <div className="flex -space-x-2 ml-2">
          <img src="https://via.placeholder.com/24" alt="team-member" className="rounded-full border-2 border-white dark:border-gray-800" />
          <img src="https://via.placeholder.com/24" alt="team-member" className="rounded-full border-2 border-white dark:border-gray-800" />
        </div>
      </div>

      <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
        Status: <span className="text-blue-500 dark:text-blue-400">In Progress</span>
      </div>

      <div>
        <h4 className="font-semibold text-gray-700 dark:text-gray-300">Team Chat</h4>
        <div className="flex items-start space-x-2 mt-4">
          <img src="https://via.placeholder.com/24" alt="user" className="rounded-full" />
          <div>
            <p className="text-gray-800 dark:text-gray-200 text-sm">Have a great working week!</p>
            <span className="text-xs text-gray-400 dark:text-gray-500">12:34 AM</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProjectOverview;

import React from 'react';
import Sidebar from './components/Sidebar';
import TopNavigation from './components/TopNavigation';
import TaskOverview from './components/TaskOverview';
import ProjectOverview from './components/ProjectOverview';
import { Lock } from 'lucide-react';

const ProjectDashboard: React.FC = () => {
  const handleToggleSidebar = () => {
  };

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      <Sidebar />

      <div className="flex flex-1">
        <div className="flex flex-col flex-1">
          <TopNavigation onToggleSidebar={handleToggleSidebar} />

          <div className="flex-1 p-6 sm:p-10 overflow-y-auto">
            <div className="flex space-x-2 text-sm text-gray-600 dark:text-gray-400">
              <span>workspace &#x3E;</span>
              <span>creative &#x3E;</span>
              <span className="text-gray-800 dark:text-gray-200">Creative website</span>
            </div>

            <div className="flex items-center justify-between my-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100">Website Design</h2>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center p-4 mb-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <div className="flex items-center space-x-2">
                <Lock className="text-gray-500 dark:text-gray-400 w-5 h-5" />
                <p className="text-gray-700 dark:text-gray-300 font-medium">Limited access</p>
              </div>
              <button className="mt-2 sm:mt-0 text-blue-600 dark:text-blue-400 hover:underline hover:text-blue-700 dark:hover:text-blue-500 transition duration-200">
                Copy Link
              </button>
            </div>

            <TaskOverview />
          </div>
        </div>

        <div className="w-full md:w-80 bg-white dark:bg-gray-800 border-l border-gray-200 dark:border-gray-700 p-4">
          <ProjectOverview />
        </div>
      </div>
    </div>
  );
};

export default ProjectDashboard;

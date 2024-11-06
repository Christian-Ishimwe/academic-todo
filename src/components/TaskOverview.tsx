import React from 'react';
import TaskCard from './TaskCard';
import NewTaskModal from './NewTask';
import { AdjustmentsIcon } from '@heroicons/react/outline';
import { fetchTodo } from '@/api/fetchTodo';
import {  useQuery } from '@tanstack/react-query';

const TaskOverview: React.FC = () => {
  const {data, isLoading, isError} = useQuery({queryKey: ['todo'], queryFn: fetchTodo});

  if (isLoading) {
    return <div>Loading tasks...</div>;
  }

  if (isError) {
    return <div>Failed to load tasks.</div>;
  }
  const allTasks= data.todos
  console.log(allTasks)
  

  
  return (
    <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md">
    
      <div className="flex justify-between items-center mb-4 bg-white dark:bg-gray-800 px-4 py-4 rounded-lg shadow-sm">
        <div className="flex space-x-4 overflow-x-auto">
          <button className="text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400 pb-1">
            All Tasks <span className="bg-blue-200 dark:bg-blue-600 px-2 py-1 rounded ml-2">9</span>
          </button>
          <button className="text-gray-600 dark:text-gray-300">To do <span className="bg-gray-300 dark:bg-gray-700 px-2 py-1 rounded ml-2">3</span></button>
          <button className="text-gray-600 dark:text-gray-300">In Progress <span className="bg-gray-300 dark:bg-gray-700 px-2 py-1 rounded ml-2">3</span></button>
          <button className="text-gray-600 dark:text-gray-300">Completed <span className="bg-gray-300 dark:bg-gray-700 px-2 py-1 rounded ml-2">3</span></button>
        </div>    

        <div className="flex space-x-4">
          <button className="flex items-center space-x-2 border border-gray-300 dark:border-gray-700 px-4 py-2 rounded text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition">
            <AdjustmentsIcon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            <span>Filter & Sort</span>
          </button>
          <NewTaskModal />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {allTasks.map((task:any) =>{
          return <TaskCard status={task.completed} title={task.todo} subtext={task.subtext} comments={0} />
        })}
       
      </div>
    </div>
  );
};

export default TaskOverview;

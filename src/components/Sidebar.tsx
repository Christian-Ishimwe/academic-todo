
import {
  HomeIcon,
  MailIcon,
  ClipboardListIcon,
  BellIcon,
  PlusCircleIcon,
  UserCircleIcon,
  FlagIcon
} from '@heroicons/react/outline';

const Sidebar = () => {
 
  return (
    <aside className={`w-20 flex flex-col items-center py-4 space-y-6 transition-colors duration-300 dark:bg-gray-900 dark:text-white  bg-white text-gray-900`}>
      <button
        className="p-2 rounded-lg focus:outline-none"
      >
            <FlagIcon
              className='h-6 w-6 text-blue-700'
            ></FlagIcon>
      </button>


      <button className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
        <HomeIcon className="h-6 w-6" />
      </button>
      <button className="p-2 rounded-lg bg-gray-300 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700
      
      ">
        <MailIcon className="h-6 w-6" />
      </button>
      <button className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
        <ClipboardListIcon className="h-6 w-6" />
      </button>
      <button className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
        <BellIcon className="h-6 w-6" />
      </button>
      <button className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700">
        <PlusCircleIcon className="h-6 w-6" />
      </button>

      {/* Profile Image Placeholder */}
      <div className="mt-auto mb-4">
        <UserCircleIcon className="h-10 w-10" />
      </div>
    </aside>
  );
};

export default Sidebar;

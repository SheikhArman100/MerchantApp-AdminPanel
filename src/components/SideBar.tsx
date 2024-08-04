'use client';
import { SideBarItems } from '@/constant';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Sidebar() {
  const currentPath = usePathname();
  return (
    <div className='sidebar w-[280px] dark:bg-coal-600 bg-light border-r border-r-gray-200 dark:border-r-coal-100 fixed top-0 bottom-0 z-20 hidden xl:flex flex-col items-stretch shrink-0'>
      <div
        className='sidebar-header hidden lg:flex items-center relative justify-between px-3 lg:px-6 py-6 shrink-0'
        id='sidebar_header'
      >
        <Link className='dark:hidden' href='/'>
          <img
            className='hidden md:block min-h-[22px] max-w-none'
            src='/media/app/default-logo.svg'
          />
          <img
            className='md:hidden min-h-[22px] max-w-none'
            src='/media/app/mini-logo.svg'
          />
        </Link>
        <Link className='hidden dark:block' href='/'>
          <img
            className='default-logo min-h-[22px] max-w-none'
            src='/media/app/default-logo-dark.svg'
          />
          <img
            className='small-logo min-h-[22px] max-w-none'
            src='/media/app/mini-logo.svg'
          />
        </Link>
      </div>
      <div
        className='sidebar-content flex grow shrink-0 py-5 pr-2 w-full'
        id='sidebar_content'
      >
        <div className='w-full'>
          <div className='p-5'>
            {SideBarItems.map((item, index) => {
              return (
                <Link
                  href={item.link}
                  key={index}
                  className={`menu-link flex items-center grow cursor-pointer border border-transparent gap-[10px] pl-[10px] pr-[10px] py-[6px] rounded-md ${currentPath === item.link ? 'bg-zinc-200 text-blue-500' : ''}`}
                >
                  <i className={`ki-filled ${item.icon}  text-lg`}></i>
                  <span className='menu-title text-sm font-semibold text-gray-700 menu-item-active:text-primary menu-link-hover:!text-primary capitalize'>
                    {item.name}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

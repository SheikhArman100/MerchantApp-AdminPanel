'use client';
import { SideBarItems } from '@/constant';
import { ListTodo, Menu } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const SideDrawer = () => {
  const [active, setActive] = useState(false);
  const currentPath = usePathname();

  return (
    <>
      <button
        className='btn btn-xs btn-icon btn-light drop-shadow-sm'
        onClick={() => setActive(!active)}
      >
        <i className='ki-filled ki-burger-menu-5  '></i>
      </button>
      <>
        {/* backdrop */}
        <div
          onClick={() => setActive(false)}
          className={`fixed top-0 left-0 bg-black/50  min-h-screen z-10 ${active ? ' w-full' : 'w-0'}`}
        ></div>

        {/* -----------------------------------menubar---------------------------------------------- */}
        <div
          className={`${active ? 'max-w-[90%] w-[300px] ' : 'w-0'} h-screen bg-white  z-10 fixed top-0 left-0   duration-200 transition-all `}
        >
          {/* -----------------------------------content------------------------------------ */}
          <div
            className={`${active ? 'visible delay-[210ms] ease-in duration-200 ' : 'invisible '}  `}
          >
            <div className='w-full flex items-center justify-end p-5 '>
              {/* <h3 className='text-base font-semibold text-gray-900'>
                Drawer Title
              </h3> */}
              <button
                className='btn btn-xs btn-icon btn-light'
                onClick={() => setActive(false)}
              >
                <i className='ki-outline ki-cross'></i>
              </button>
            </div>
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
      </>
    </>
  );
};

export default SideDrawer;

{
  /* <Link
href='/'
className='menu-link flex items-center grow cursor-pointer border border-transparent gap-[10px] pl-[10px] pr-[10px] py-[6px] '
>
<ListTodo  className='size-5' />
<span className='menu-title text-sm font-semibold text-gray-700 menu-item-active:text-primary menu-link-hover:!text-primary'>
  Tasks
</span>
</Link> */
}

{
  /* <div className='menu-item pt-2.25 pb-px'>
                    <span className='menu-heading uppercase pl-[10px] pr-[10px] text-2sm font-semibold text-gray-500'>User</span>
                  </div> */
}

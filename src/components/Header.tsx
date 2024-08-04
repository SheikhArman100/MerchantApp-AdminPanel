import Image from 'next/image';
import Link from 'next/link';
import SideDrawer from './SideDrawer';

function Header() {
  return (
    <header className='header fixed top-0 z-10 left-0 right-0 flex items-center shrink-0 bg-[#fefefe] dark:bg-coal-500 shadow-sm h-16'>
      {/* begin: container */}
      <div
        className='container-fixed flex justify-between xl:justify-end items-center lg:gap-4 '
        id='header_container'
      >
        {/* -----------------------------------------------mobile left side-------------------------------------- */}
        <div className='flex gap-2 xl:hidden items-center -ml-1'>
          <SideDrawer />
          <Link className='shrink-0' href='/'>
            <Image
              height='25'
              width='25'
              alt='logo'
              className='max-h-[25px] w-full'
              src='/media/app/mini-logo.svg'
            />
          </Link>
        </div>
        {/* -------------------------------------big screen right side-------------------------------------- */}
        <div className='flex items-center gap-2 lg:gap-3.5'>
          <button className=' btn btn-icon btn-icon-xl relative cursor-pointer size-10 rounded-full hover:bg-primary-light hover:text-primary  text-gray-500'>
            <i className='ki-filled ki-notification-on'></i>
          </button>
          <div className='relative size-12 rounded-full   font-semibold border-2 border-green-700  p-2'>
            <Image
              alt='avatar'
              fill
              className='w-full h-full rounded-full'
              src='/media/avatars/300-2.png'
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

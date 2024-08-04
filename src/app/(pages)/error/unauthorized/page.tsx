import SignOutButton from '@/components/SignOutButton';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const UnAuthorized = () => {
  return (
    <div className='flex items-center justify-center grow h-screen w-full'>
      <div className='flex flex-col items-center'>
        <div className='mb-16 relative h-[160px] aspect-square'>
          <Image
            fill
            alt='image'
            className='w-full h-full '
            src='/media/illustrations/5.svg'
          />
        </div>
        <span className='badge badge-primary badge-outline mb-3'>
          Unauthorized Error
        </span>
        <h3 className='text-2.5xl font-semibold text-gray-900 text-center mb-2'>
          You are not authorized to to use this website
        </h3>
        <div className='text-md font-medium text-center text-gray-600 mb-10'>
          <SignOutButton />
        </div>
      </div>
    </div>
  );
};

export default UnAuthorized;

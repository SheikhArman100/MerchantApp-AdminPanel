'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { code: number; name: string; message: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);
  return (
    <div className='flex items-center justify-center grow h-screen w-full'>
      <div className='flex flex-col items-center'>
        <div className='mb-16'>
          <img
            alt='image'
            className='dark:hidden max-h-[160px]'
            src='assets/media/illustrations/5.svg'
          />
        </div>
        <span className='badge badge-primary badge-outline mb-3'>
          {error.code} Error
        </span>
        <h3 className='text-2.5xl font-semibold text-gray-900 text-center mb-2'>
          {error.name}
        </h3>
        <div className='text-md font-medium text-center text-gray-600 mb-10'>
          Server error occurred. Please try again later or
          <a
            className='text-primary font-medium hover:text-primary-active'
            href='#'
          >
            Contact Us
          </a>
          for assistance.
        </div>
        <button
          onClick={() => reset()}
          className='btn btn-primary flex justify-center'
        >
          Try Again
        </button>
        <Link
          className='btn btn-primary flex justify-center'
          href='/auth/signin'
        >
          Sign in
        </Link>
      </div>
    </div>
  );
}

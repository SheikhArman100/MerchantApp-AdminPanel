import SignOutButton from '@/components/SignOutButton';
import { CustomError } from '@/error';
import Link from 'next/link';
import React from 'react';

const a = 1;
const Dashboard = () => {
  // if(a){
  //   throw new CustomError(
  //         500,
  //         'UnAuthorized',
  //         'You are not Authorized to visit this website',
  //       );
  // }

  return (
    <div className='flex justify-center flex-wrap gap-2'>
      <SignOutButton />
      <Link href='/auth/signup' className='btn btn-warning'>
        Create User
      </Link>
      <Link href='/auth/change-password' className='btn btn-success'>
        Change password
      </Link>
    </div>
  );
};

export default Dashboard;

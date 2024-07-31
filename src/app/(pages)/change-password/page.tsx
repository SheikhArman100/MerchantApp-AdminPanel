'use client';
import { IChangePasswordFormData } from '@/interfaces/auth.interface';
import { changePasswordSchema } from '@/validation/auth.validation';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const ChangePassword = () => {
  const [passwordHidden, setPasswordHidden] = useState({
    oldPassword: true,
    newPassword: true,
  });

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<IChangePasswordFormData>({
    resolver: zodResolver(changePasswordSchema),
  });
  const handleChangePassword = (data:IChangePasswordFormData) => {
    console.log(data);
    reset();
  };
  return (
    <div className='flex items-center justify-center min-h-screen w-full grow bg-center bg-no-repeat page-bg'>
      <div className='card max-w-[370px] w-full'>
        <form
          
          className='card-body flex flex-col gap-5 p-10'
          onSubmit={handleSubmit(handleChangePassword)}
        >
          <div className='text-center'>
            <h3 className='text-lg font-semibold text-gray-900'>
              Reset Password
            </h3>
            <span className='text-2sm font-medium text-gray-600'>
              Enter your new password
            </span>
          </div>
          <div className='flex flex-col gap-1'>
            <label className='form-label text-gray-900'>Old Password</label>
            <label className='input' data-toggle-password='true'>
              <input
                placeholder='Enter old password'
                type={passwordHidden.oldPassword ? 'password' : 'text'}
                {...register('oldPassword')}
              />
              <button
                type='button'
                className='btn btn-icon'
                onClick={() =>
                  setPasswordHidden({
                    ...passwordHidden,
                    oldPassword: !passwordHidden.oldPassword,
                  })
                }
              >
                {passwordHidden.oldPassword ? (
                  <i className='ki-filled ki-eye-slash text-gray-500 '></i>
                ) : (
                  <i className='ki-filled ki-eye text-gray-500 '></i>
                )}
              </button>
            </label>
            {errors.oldPassword?.message && (
              <p className='form-hint text-red-700 '>
                *{errors.oldPassword?.message}
              </p>
            )}
          </div>
          <div className='flex flex-col gap-1'>
            <label className='form-label text-gray-900'>
              New Password
            </label>
            <label className='input' data-toggle-password='true'>
              <input
                placeholder='Enter a new Password'
                type={passwordHidden.newPassword ? 'password' : 'text'}
                {...register('newPassword')}
              />
              <button
                type='button'
                className='btn btn-icon'
                onClick={() =>
                  setPasswordHidden({
                    ...passwordHidden,
                    newPassword: !passwordHidden.newPassword,
                  })
                }
              >
                {passwordHidden.newPassword ? (
                  <i className='ki-filled ki-eye-slash text-gray-500 '></i>
                ) : (
                  <i className='ki-filled ki-eye text-gray-500 '></i>
                )}
              </button>
            </label>
            {errors.newPassword?.message && (
              <p className='form-hint text-red-700 '>
                *{errors.newPassword?.message}
              </p>
            )}
          </div>
          <button className='btn btn-primary flex justify-center grow'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;

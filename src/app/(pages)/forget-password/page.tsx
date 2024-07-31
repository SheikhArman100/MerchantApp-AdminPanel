'use client';
import { IForgetPasswordFormData } from '@/interfaces/auth.interface';
import { forgetPasswordSchema } from '@/validation/auth.validation';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';

const ForgetPassword = () => {
  const {
    register,
    handleSubmit,
    reset,

    formState: { errors },
  } = useForm<IForgetPasswordFormData>({
    resolver: zodResolver(forgetPasswordSchema),
  });
  const handleForgetPassword = (data: IForgetPasswordFormData) => {
    console.log(data);
    reset();
  };
  return (
    <div className='flex items-center justify-center min-h-screen w-full grow bg-center bg-no-repeat page-bg'>
      <div className='card max-w-[370px] w-full'>
        <form
          onSubmit={handleSubmit(handleForgetPassword)}
          className='card-body flex flex-col gap-5 p-10'
        >
          <div className='text-center'>
            <h3 className='text-lg font-semibold text-gray-900'>Your Email</h3>
            <span className='text-2sm text-gray-600 font-medium'>
              Enter your email to reset password
            </span>
          </div>
          <div className='flex flex-col gap-1'>
            <label className='form-label text-gray-900'>Email</label>
            <input
              className='input'
              placeholder='email@email.com'
              type='text'
              {...register('email')}
            />
            {errors.email?.message && (
              <p className='form-hint text-red-700 '>
                *{errors.email?.message}
              </p>
            )}
          </div>
          <button className='btn btn-primary flex justify-center grow'>
            Continue
            <i className='ki-filled ki-black-right'></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;

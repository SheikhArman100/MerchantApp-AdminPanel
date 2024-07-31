'use client';
import { IResetPasswordFormData } from '@/interfaces/auth.interface';
import { resetPasswordSchema } from '@/validation/auth.validation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const ResetPassword = () => {
  const [passwordHidden, setPasswordHidden] = useState(true);
  const {
    register,
    handleSubmit,
    reset,

    formState: { errors },
  } = useForm<IResetPasswordFormData>({
    resolver: zodResolver(resetPasswordSchema),
  });
  const handleResetPassword = (data: IResetPasswordFormData) => {
    console.log(data);
    reset();
  };
  return (
    <div className='flex items-center justify-center min-h-screen w-full grow bg-center bg-no-repeat page-bg'>
      <div className='card max-w-[370px] w-full'>
        <form
          onSubmit={handleSubmit(handleResetPassword)}
          className='card-body flex flex-col gap-5 p-10'
        >
          <div className='text-center'>
            <h3 className='text-lg font-semibold text-gray-900'>
              Reset Password
            </h3>
            <span className='text-2sm text-gray-600 font-medium'>
              Enter new password to reset password
            </span>
          </div>
          <div className='flex flex-col gap-1'>
            <label className='form-label text-gray-900'>New Password</label>
            <label className='input' data-toggle-password='true'>
              <input
                {...register('newPassword')}
                placeholder='Enter new password'
                type={passwordHidden ? 'password' : 'text'}
              />
              <button
                type='button'
                className='btn btn-icon'
                onClick={() => setPasswordHidden(!passwordHidden)}
              >
                {passwordHidden ? (
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
            Reset
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;

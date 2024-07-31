'use client';
import { ISignInFormData } from '@/interfaces/auth.interface';
import { signInSchema } from '@/validation/auth.validation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const SignIn = () => {
  const [passwordHidden, setPasswordHidden] = useState(true)
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<ISignInFormData>({
    resolver: zodResolver(signInSchema),
  });

  const handleSignIn = (data: ISignInFormData) => {
    console.log(data);
    reset();
  };
  return (
    <div className='flex items-center justify-center grow bg-center bg-no-repeat page-bg min-h-screen w-full'>
      <div className='card max-w-[370px] w-full'>
        <form
          className='card-body flex flex-col gap-7 p-10'
          onSubmit={handleSubmit(handleSignIn)}
        >
          <div className='text-center mb-2.5'>
            <h3 className='text-lg font-semibold text-gray-900 leading-none mb-2.5'>
              Sign in
            </h3>
            <div className='flex items-center justify-center font-medium'>
              <span className='text-2sm text-gray-600 me-1.5'>
                Need an account?
              </span>
              <a
                className='text-2sm link'
                href='html/demo1/authentication/classNameic/sign-up.html'
              >
                Sign up
              </a>
            </div>
          </div>

          <div className='flex items-center gap-2'>
            <span className='border-t border-gray-200 w-full'></span>
            <span className='text-2xs text-gray-500 font-medium uppercase'>
              Or
            </span>
            <span className='border-t border-gray-200 w-full'></span>
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
          <div className='flex flex-col gap-1'>
            <div className='flex items-center justify-between gap-1'>
              <label className='form-label text-gray-900'>Password</label>
              <a
                className='text-2sm link shrink-0'
                href='html/demo1/authentication/classNameic/reset-password/enter-email.html'
              >
                Forgot Password?
              </a>
            </div>
            <label className='input' data-toggle-password='true'>
              <input
                placeholder='Enter Password'
                type={passwordHidden?"password":"text"}
                {...register('password')}
              />
              <button
              type='button'
                className='btn btn-icon'
                onClick={()=>setPasswordHidden(!passwordHidden)}
              >
                {passwordHidden?<i className='ki-filled ki-eye-slash text-gray-500 '></i>:<i className='ki-filled ki-eye text-gray-500'></i>}
                
                
              </button>
            </label>
            {errors.password?.message && (
              <p className='form-hint text-red-700 '>
                *{errors.password?.message}
              </p>
            )}
          </div>
          <button className='btn btn-primary flex justify-center grow'>
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;

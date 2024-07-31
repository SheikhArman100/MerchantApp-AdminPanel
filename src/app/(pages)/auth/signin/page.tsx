'use client';
import Spinner from '@/components/Spinner';
import { ISignInFormData } from '@/interfaces/auth.interface';
import { signinUser } from '@/services/auth.service';
import { useAuthStore } from '@/state/auth.state';
import { signInSchema } from '@/validation/auth.validation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const SignIn = () => {
  const [passwordHidden, setPasswordHidden] = useState(true);
  const router = useRouter();
  const setAccessToken = useAuthStore((state: any) => state.setAccessToken);
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    reset,

    formState: { errors },
  } = useForm<ISignInFormData>({
    resolver: zodResolver(signInSchema),
  });

  //sign in mutation
  const signinMutation = useMutation({
    mutationFn: signinUser,
    onSuccess: async (data: any) => {
      setAccessToken(data.accessToken);
      return queryClient.invalidateQueries({ queryKey: ['user'] });
    },
  });

  const handleSignIn = (data: ISignInFormData) => {
    signinMutation.mutate(
      {
        email: data.email,
        password: data.password,
      },
      {
        onError: (data: any) => {
          toast.error(data.response.data.message);
        },
        onSuccess: (data) => {
          router.push('/');
          toast.success(data.message);
          reset();
        },
      },
    );
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
              <Link
                className='text-2sm link shrink-0'
                href='/auth/forget-password'
              >
                Forgot Password?
              </Link>
            </div>
            <label className='input' data-toggle-password='true'>
              <input
                placeholder='Enter Password'
                type={passwordHidden ? 'password' : 'text'}
                {...register('password')}
              />
              <button
                type='button'
                className='btn btn-icon'
                onClick={() => setPasswordHidden(!passwordHidden)}
              >
                {passwordHidden ? (
                  <i className='ki-filled ki-eye-slash text-gray-500 '></i>
                ) : (
                  <i className='ki-filled ki-eye text-gray-500'></i>
                )}
              </button>
            </label>
            {errors.password?.message && (
              <p className='form-hint text-red-700 '>
                *{errors.password?.message}
              </p>
            )}
          </div>

          <button className='btn btn-primary flex justify-center grow'>
            {signinMutation.isPending ? <Spinner /> : <p>Sign in</p>}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;

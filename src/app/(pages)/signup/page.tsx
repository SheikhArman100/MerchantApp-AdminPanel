'use client';
import { roles } from '@/constant';
import { IRegisterFormData } from '@/interfaces/auth.interface';
import { registerSchema } from '@/validation/auth.validation';
import { zodResolver } from '@hookform/resolvers/zod';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

const SignUp = () => {
  const [roleOpen, setRoleOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState('');
  const [passwordHidden, setPasswordHidden] = useState(true);

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<IRegisterFormData>({
    resolver: zodResolver(registerSchema),
  });
  const handleRegister = async (data: IRegisterFormData) => {
    console.log(data);
    reset();
  };

  return (
    <div className='w-full min-h-screen flex items-center justify-center grow bg-center bg-no-repeat page-bg'>
      <div className='card max-w-[560px] w-full m-2'>
        <form
          autoComplete='off'
          className='card-body flex flex-col gap-5 p-10'
          onSubmit={handleSubmit(handleRegister)}
        >
          <div className='text-center mb-2.5'>
            <h3 className='text-xl font-semibold text-gray-900 leading-none mb-2.5'>
              Sign up
            </h3>
            <div className='flex items-center justify-center font-medium'>
              <span className='text-sm text-gray-600 me-1.5'>
                Create a new user
              </span>
            </div>
          </div>
          <div className='flex items-center gap-2'>
            <span className='border-t border-gray-200 w-full'></span>
            <span className='text-2xs text-gray-500 font-medium uppercase'>
              or
            </span>
            <span className='border-t border-gray-200 w-full'></span>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-4'>
            {/* ----------------------------------------------first name----------------------------- */}
            <div className='flex flex-col gap-1'>
              <label className='form-label text-gray-900'>First name</label>
              <input
                className='input'
                {...register('firstName')}
                placeholder='Enter your first name'
                type='text'
              />
              {errors.firstName?.message && (
                <p className='form-hint text-red-700 '>
                  *{errors.firstName?.message}
                </p>
              )}
            </div>

            {/* ----------------------------------------------last name----------------------------- */}
            <div className='flex flex-col gap-1'>
              <label className='form-label text-gray-900'>Last name</label>
              <input
                className='input'
                {...register('lastName')}
                placeholder='Enter your last name'
                type='text'
              />
              {errors.lastName?.message && (
                <p className='form-hint text-red-700 '>
                  *{errors.lastName?.message}
                </p>
              )}
            </div>

            {/* -------------------------------------------email ------------------------------------------ */}
            <div className='flex flex-col gap-1'>
              <label className='form-label text-gray-900'>Email</label>
              <input
                className='input'
                {...register('email')}
                placeholder='email@email.com'
                type='email'
              />
              {errors.email?.message && (
                <p className='form-hint text-red-700 '>
                  *{errors.email?.message}
                </p>
              )}
            </div>

            {/* phone Number */}
            <div className='flex flex-col gap-1'>
              <label className='form-label text-gray-900'>Phone number</label>
              <input
                className='input'
                placeholder='Enter your phone number'
                type='text'
                {...register('phoneNumber')}
              />
              {errors.phoneNumber?.message && (
                <p className='form-hint text-red-700 '>
                  *{errors.phoneNumber?.message}
                </p>
              )}
            </div>
            {/* ------------------------------------------password --------------------------------------------------------------*/}
            <div className='flex flex-col gap-1'>
              <label className='form-label text-gray-900'>Password</label>
              <label className='input' data-toggle-password='true'>
                <input
                  {...register('password')}
                  placeholder='Enter Password'
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
              {errors.password?.message && (
                <p className='form-hint text-red-700 '>
                  *{errors.password?.message}
                </p>
              )}
            </div>

            {/* ---------------------------------------role-------------------------------------- */}
            <div className='flex flex-col gap-1'>
              <label className='form-label text-gray-900'>Role</label>
              <div className='dropdown relative'>
                <button
                  type='button'
                  onClick={() => setRoleOpen(!roleOpen)}
                  className=' btn btn-light w-full flex items-center justify-between'
                >
                  {selectedRole ? (
                    <span>{selectedRole}</span>
                  ) : (
                    <span>Select a role</span>
                  )}
                  <ChevronDown className='size-4' />
                </button>
                {roleOpen ? (
                  <Controller
                    control={control}
                    name='role'
                    render={({ field: { onChange, value } }) => (
                      <div className='w-full max-w-56 p-4 dropdown-content block absolute left-0 top-[105%] z-[2]'>
                        <div className='flex flex-col items-start gap-4'>
                          {roles.map((role, index) => (
                            <label
                              key={index}
                              className='form-label flex items-center gap-2.5'
                            >
                              <input
                                className='radio'
                                type='radio'
                                value={role.value}
                                checked={value === role.value}
                                onChange={() => {
                                  onChange(role.value);
                                  setSelectedRole(role.name);
                                  setRoleOpen(false);
                                }}
                              />
                              {role.name}
                            </label>
                          ))}
                        </div>
                      </div>
                    )}
                  />
                ) : null}
              </div>
              {errors.role?.message && (
                <p className='form-hint text-red-700 '>
                  *{errors.role?.message}
                </p>
              )}
            </div>

            {/* --------------------------------image-------------------------------------------------------- */}
            <div className='flex flex-col gap-1 col-span-1 sm:col-span-2'>
              <label className='form-label text-gray-900'>Profile Image</label>
              <input
                className='file-input'
                type='file'
                accept='image/*'
                {...register('image')}
              />
              {errors.image?.message && (
                <p className='form-hint text-red-700 '>
                  *{errors.image?.message}
                </p>
              )}
            </div>
          </div>

          <button
            type='submit'
            className='btn btn-primary flex justify-center grow'
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

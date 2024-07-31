'use client';
import { signoutUser } from '@/services/auth.service';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import React from 'react';
import { toast } from 'react-toastify';
import Spinner from './Spinner';

const SignOutButton = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const signoutMutation = useMutation({
    mutationFn: signoutUser,
  });
  const handleClick = () => {
    //@ts-ignore
    signoutMutation.mutate(
      {},
      {
        onError: (data: any) => {
          toast.error(data.response.data.message);
        },
        onSuccess: (data) => {
          router.refresh();
          toast.success(data.message);
        },
      },
    );
  };

  return (
    <button className='btn btn-primary' onClick={handleClick}>
      {signoutMutation.isPending ? <Spinner /> : <p>Sign out</p>}
    </button>
  );
};

export default SignOutButton;

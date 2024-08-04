'use client';
import { signoutUser } from '@/services/auth.service';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import Spinner from './Spinner';

const SignOutButton = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const signoutMutation = useMutation({
    mutationFn: signoutUser,
  });
  const handleClick = () => {
    signoutMutation.mutate(
      //@ts-ignore
      {},
      {
        onError: (data: any) => {
          toast.error(data.response.data.message);
        },
        onSuccess: (data) => {
          router.refresh();

          toast.success(data.message);
          router.push('/');
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

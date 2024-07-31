import { axiosPublic } from '@/libs/axios';

export const signinUser = async (data: any) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await axiosPublic.post('/auth/signin', data, {
    withCredentials: true,
  });

  return response.data;
};

export const registerUser = async (data: any) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await axiosPublic.post('/auth/register', data);

  return response.data;
};

export const signoutUser = async () => {
  const response = await axiosPublic.post('/auth/signout', {
    withCredentials: true,
  });

  return response.data;
};

export const forgetPassword = async (data: any) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await axiosPublic.post('/auth/forget-password', data, {
    withCredentials: true,
  });

  return response.data;
};
export const resetPassword = async (data: any, token: string) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await axiosPublic.put(
    `/auth/reset-password?token=${token}`,
    data,
    {
      withCredentials: true,
    },
  );

  return response.data;
};

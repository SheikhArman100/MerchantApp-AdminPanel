import { Role } from '@/types/common';

export interface IRegisterFormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
  role: Role;
  image: string;
};
export interface ISignInFormData{
  email:string,
  password:string,
}

export interface IChangePasswordFormData{
  oldPassword:string,
  newPassword:string
}
// export type IFormFieldProps = {
//   type: string;
//   placeholder: string;
//   name:
//     | 'firstName'
//     | 'lastName'
//     | 'email'
//     | 'phoneNumber'
//     | 'password'
//     | 'role'
//     | 'image';
//   register: UseFormRegister<IRegisterFormData>;
//   error: FieldError | undefined;
//   valueAsNumber?: boolean;
// };

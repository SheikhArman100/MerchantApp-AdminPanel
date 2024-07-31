import Image from 'next/image';
import Link from 'next/link';
import displayImage from '../../../../public/media/illustrations/30.svg';

const CheckEmail = () => {
  return (
    <div className='flex items-center justify-center min-h-screen w-full grow bg-center bg-no-repeat page-bg'>
      <div className='card max-w-[440px] w-full'>
        <div className='card-body p-10'>
          <div className='flex justify-center py-10'>
            <Image
              alt='image'
              height='130'
              width='130'
              className=' max-h-[130px]'
              src={displayImage}
            />
            {/* <Image alt="image" height="130" width="130" className="light:hidden max-h-[130px]" src={displayDarkImage}/> */}
          </div>
          <h3 className='text-lg font-semibold text-gray-900 text-center mb-3'>
            Check your email
          </h3>
          <div className='text-2sm font-medium text-center text-gray-600 mb-7.5'>
            Please click the link sent to your email
            <a
              className='text-2sm text-gray-800 font-medium hover:text-primary-active'
              href='#'
            >
              bob@reui.io
            </a>
            <br />
            to reset your password. Thank you
          </div>
          <div className='flex justify-center mb-5'>
            <Link className='btn btn-primary flex justify-center' href='/'>
              Back Home
            </Link>
          </div>
          <div className='flex items-center justify-center gap-1'>
            <span className='text-xs font-medium text-gray-600'>
              Didn’t receive an email?
            </span>
            <Link className='text-xs font-medium link' href='/forget-password'>
              Resend
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckEmail;

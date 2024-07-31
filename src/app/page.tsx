import SignOutButton from '@/components/SignOutButton';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='flex min-h-screen justify-center gap-4 p-24'>
      <SignOutButton />
      <Link href='/signup' className='btn btn-warning'>
        Create User
      </Link>
      <Link href="/change-password" className='btn btn-success'>Change password</Link>
    </main>
  );
}

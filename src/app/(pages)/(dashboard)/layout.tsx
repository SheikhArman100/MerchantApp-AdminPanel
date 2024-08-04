import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Sidebar from '@/components/SideBar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className='flex grow'>
      <Sidebar />
      <div className='wrapper flex grow flex-col'>
        <Header />
        <section
          className=' grow content min-h-[calc(100vh-64px)] mt-16 py-4'
          id='content'
          role='content'
        >
          <div className='container-fixed  h-full'>{children}</div>
        </section>
        {/* <Footer /> */}
      </div>
    </main>
  );
}

import { Outlet } from 'react-router-dom';
import { Navbar } from '../components';
import Footer from '../components/Footer';

const SharedLayout = () => {
  return (
    <div className='relative z-0 bg-primary min-h-screen flex flex-col'>
      <Navbar />
      <main className='flex-1'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default SharedLayout;
